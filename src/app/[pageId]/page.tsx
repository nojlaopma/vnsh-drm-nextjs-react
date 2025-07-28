// @ts-nocheck

export const dynamic = 'force-static';
import { Metadata } from 'next';
import DynamicPageLoader from '@/components/pages/DynamicPageLoader';

// This is a list of valid page IDs for static generation.
// It must be kept in sync with the keys in `pageComponents` in DynamicPageLoader.tsx
const validPageIds = ['vnls2', 'vnshblackbogo1', 'vnsmp1'];

// Generate static params for static generation
export async function generateStaticParams() {
  return validPageIds.map((pageId) => ({
    pageId,
  }));
}

// Generate metadata for better SEO
export async function generateMetadata({ params }: { params: { pageId: string } }): Promise<Metadata> {
  const pageTitles: Record<string, string> = {
    vnls2: 'Vintage Nylon Laptop Sleeve',
    vnshblackbogo1: 'Vintage Nylon Shoulder Bag - Black BOGO',
    vnsmp1: 'Vintage Nylon Shoulder Bag - Multi-Pack',
  
    'vnls1': 'Vnsh Black Bogo1',
  
    'vns3mmbonus': 'vnsmp1',
  
    'vns3mmbonus': 'vnshblackbogo1',
  
    'vnshlite1': 'vns3mmbonus',
  
    'vnsmm1': 'vnshlite1',
  
    'vnshggg1': 'vnsmp1',
  
    'vnls1po223': 'vnls1',
  
    'vnshblackbogogbb1': 'vnshblackbogo1',
  
    'vnshggg1fs': 'vnshggg1',
  
    'vnshblackbogogbb2': 'vnshblackbogogbb1',
  };

  return {
    title: pageTitles[params.pageId] || 'Page Not Found',
  };
}

// This is the main page component
export default function Page({ params, searchParams }: { params: { pageId: string }; searchParams?: { [key: string]: string | string[] | undefined }; }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <DynamicPageLoader params={params} searchParams={searchParams} />
    </div>
  );
}
