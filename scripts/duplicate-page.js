#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get command line arguments
const [sourcePage, newPage] = process.argv.slice(2);

if (!sourcePage || !newPage) {
  console.error('Usage: node scripts/duplicate-page.js <sourcePage> <newPage>');
  console.error('Example: node scripts/duplicate-page.js VnshBlackBogo1Page VnshCamoBogo1');
  process.exit(1);
}

// Convert to kebab-case for directory names
const sourceKebab = sourcePage.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const newKebab = newPage.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const rootDir = path.join(__dirname, '..');
const sourcePagePath = path.join(rootDir, 'src', 'components', 'pages', `${sourcePage}.tsx`);
const newPagePath = path.join(rootDir, 'src', 'components', 'pages', `${newPage}Page.tsx`);

const sourceSectionPath = path.join(rootDir, 'src', 'components', 'sections', sourceKebab);
const newSectionPath = path.join(rootDir, 'src', 'components', 'sections', newKebab);

// Function to replace all occurrences in a string
function replaceAll(str, find, replace) {
  return str.split(find).join(replace);
}

// Function to process file content
function processFileContent(content, sourceName, newName) {
  // Replace component names
  let newContent = replaceAll(content, sourceName, newName);
  
  // Replace kebab-case names in imports and paths
  const sourceKebab = sourceName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  const newKebab = newName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  newContent = replaceAll(newContent, sourceKebab, newKebab);
  
  // Replace camelCase names
  const sourceCamel = sourceName[0].toLowerCase() + sourceName.slice(1);
  const newCamel = newName[0].toLowerCase() + newName.slice(1);
  newContent = replaceAll(newContent, sourceCamel, newCamel);
  
  return newContent;
}

// Function to update the valid page IDs in the route handler
function updateValidPageIds(newPageId) {
  const routeFilePath = path.join(__dirname, '..', 'src', 'app', 'pages', '[pageId]', 'page.tsx');
  try {
    let content = fs.readFileSync(routeFilePath, 'utf8');
    
    // Find and update the validPageIds array
    const regex = /const validPageIds = \[([\s\S]*?)\] as const;/;
    const match = content.match(regex);
    
    if (match) {
      const currentIds = match[1].split(',').map(id => id.trim().replace(/'/g, '').trim()).filter(Boolean);
      // Use the exact page ID as provided, without converting to kebab-case
      const pageId = newPageId.replace('Page', '').toLowerCase();
      
      if (!currentIds.includes(pageId)) {
        const newIds = [...currentIds, `'${pageId}'`];
        const newValidPageIds = `const validPageIds = [${newIds.join(', ')}] as const;`;
        content = content.replace(regex, newValidPageIds);
        
        // Ensure the page component is async
        if (!content.includes('export default async function Page')) {
          content = content.replace('export default function Page', 'export default async function Page');
        }
        
        fs.writeFileSync(routeFilePath, content, 'utf8');
        console.log(`✅ Updated valid page IDs with: ${pageId}`);
      }
    }
  } catch (error) {
    console.warn('⚠️ Could not update route configuration. Please update it manually.');
    console.warn(`Add '${newPageId.replace('Page', '').toLowerCase()}' to the validPageIds array in src/app/pages/[pageId]/page.tsx`);
  }
}

// Function to update DynamicPageLoader.tsx
function updateDynamicPageLoader(newPageId) {
  const loaderPath = path.join(__dirname, '..', 'src', 'components', 'pages', 'DynamicPageLoader.tsx');
  try {
    let content = fs.readFileSync(loaderPath, 'utf8');
    
    // Check if the page is already in the components
    const pageKebab = newPageId.replace('Page', '').toLowerCase();
    if (content.includes(`'${pageKebab}':`)) {
      return; // Already exists
    }
    
    // Find the last component in the pageComponents object
    const lastComponentRegex = /([\s\S]*?)(\},[\s\r\n]+)\] as const;/;
    const match = content.match(lastComponentRegex);
    
    if (match) {
      const newComponent = `  ${pageKebab}: dynamic(() => import('./${newPageId}'), { ssr: false }),\n`;
      const newContent = content.replace(lastComponentRegex, `$1$2${newComponent}] as const;`);
      fs.writeFileSync(loaderPath, newContent, 'utf8');
      console.log(`✅ Updated DynamicPageLoader with ${newPageId}`);
    }
  } catch (error) {
    console.warn('⚠️ Could not update DynamicPageLoader. Please update it manually.');
    console.warn(`Add '${pageKebab}': dynamic(() => import('./${newPageId}'), { ssr: false }), to the pageComponents object`);
  }
}

// Function to copy directory recursively
function copyDirectory(source, target, sourceName, newName) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);
  
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file.replace(new RegExp(sourceName, 'gi'), newName));
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath, sourceName, newName);
    } else {
      const content = fs.readFileSync(sourcePath, 'utf8');
      const newContent = processFileContent(content, sourceName, newName);
      fs.writeFileSync(targetPath, newContent, 'utf8');
    }
  }
}

try {
  console.log(`Duplicating ${sourcePage} to ${newPage}...`);
  
  // 1. Duplicate the page component
  if (fs.existsSync(sourcePagePath)) {
    const pageContent = fs.readFileSync(sourcePagePath, 'utf8');
    const newPageContent = processFileContent(pageContent, sourcePage, `${newPage}Page`);
    fs.writeFileSync(newPagePath, newPageContent, 'utf8');
    console.log(`✅ Created ${newPage}Page.tsx`);
  }
  
  // 2. Duplicate the section directory
  if (fs.existsSync(sourceSectionPath)) {
    // Use the exact page name for the section directory (without 'Page' suffix)
    const exactSectionPath = path.join(rootDir, 'src', 'components', 'sections', newPage.replace('Page', ''));
    copyDirectory(sourceSectionPath, exactSectionPath, sourcePage, newPage);
    console.log(`✅ Created ${newPage.replace('Page', '')} section directory`);
  }
  
  // 3. Update the valid page IDs in the route handler
  updateValidPageIds(newPage);
  
  // 4. Update DynamicPageLoader.tsx
  updateDynamicPageLoader(newPage);
  
  console.log('\n🎉 Page duplication complete!');
  console.log(`\nNext steps:`);
  console.log(`1. Run 'npm run build' to generate the new static page`);
  console.log(`2. Update any page-specific configurations in ${newPagePath}`);
  console.log(`3. Update any hardcoded values in the new components`);
  
} catch (error) {
  console.error('Error duplicating page:', error);
  process.exit(1);
}
