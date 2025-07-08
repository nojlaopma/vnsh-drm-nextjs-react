import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Define the valid page IDs and their corresponding components
const pageComponents = {
  vnls2: dynamic(() => import('../../../components/pages/Vnls2Page')),
  vnshblackbogo1: dynamic(() => import('../../../components/pages/VnshBlackBogo1Page')),
} as const;

type PageId = keyof typeof pageComponents;

// Generate static params for static generation
export async function generateStaticParams() {
  return Object.keys(pageComponents).map((pageId) => ({
    pageId,
  }));
}

// Generate metadata for better SEO
export async function generateMetadata({ params }: { params: { pageId: string } }): Promise<Metadata> {
  const pageTitles: Record<string, string> = {
    vnls2: 'Vintage Nylon Laptop Sleeve',
    vnshblackbogo1: 'Vintage Nylon Shoulder Bag - Black BOGO',
  };

  return {
    title: pageTitles[params.pageId] || 'Page Not Found',
  };
}

// This is the main page component
export default function Page({ params }: { params: { pageId: string } }) {
  const { pageId } = params;

  // Check if the pageId is valid
  if (!(pageId in pageComponents)) {
    notFound();
  }

  const PageComponent = pageComponents[pageId as PageId];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* @ts-ignore */}
      <PageComponent params={{ pageId }} />
    </div>
  );
}

