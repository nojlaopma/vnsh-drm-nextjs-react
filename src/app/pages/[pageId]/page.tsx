// @ts-nocheck

import { notFound } from 'next/navigation';
import DynamicPageLoader from '@/components/pages/DynamicPageLoader';

// This is a list of valid page IDs for static generation.
// It must be kept in sync with the keys in `pageComponents` in DynamicPageLoader.tsx
const validPageIds = ['vnls2', 'vnshblackbogo1', 'vnshcamobogo1', 'vnsmp1', 'vnls1', 'vns3mmbonus', 'vnshlite1', 'vnsmm1', 'vnshggg1', 'vnls1po223', 'vnshblackbogogbb1'] as const;

type ValidPageId = typeof validPageIds[number];

// This tells Next.js which pages to generate at build time
export async function generateStaticParams() {
  return validPageIds.map((pageId) => ({
    pageId,
  }));
}

// This is the main page component
export default async function Page({ 
  params, 
  searchParams 
}: { 
  params: { pageId: string }; 
  searchParams?: { [key: string]: string | string[] | undefined }; 
}) {
  try {
    // Wait for params to be resolved
    const resolvedParams = await params;
    const pageId = resolvedParams?.pageId;
    
    // Check if the pageId is valid
    if (!pageId || !validPageIds.includes(pageId as ValidPageId)) {
      notFound();
    }

    // Client-side only: Handle search params in the browser
    // This will only run on the client side after hydration
    const safeSearchParams = typeof window !== 'undefined' ? 
      Object.fromEntries(new URLSearchParams(window.location.search)) : 
      {};

    return (
      <div className="md:container mx-auto md:px-4 font-arial">
        <DynamicPageLoader 
          params={{ pageId }} 
          searchParams={safeSearchParams} 
        />
      </div>
    );
  } catch (error) {
    console.error('Error loading page:', error);
    notFound();
  }
}
