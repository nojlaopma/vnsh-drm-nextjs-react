import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Define the valid page IDs and their corresponding components
const pageComponents = {
  vnls2: dynamic(() => import('../../../components/pages/Vnls2Page'), { ssr: true }),
  vnshblackbogo1: dynamic(() => import('../../../components/pages/VnshBlackBogo1Page'), { ssr: true }),
} as const;

type PageId = keyof typeof pageComponents;

// This is the main page component
export default function Page({
  params,
}: {
  params: { pageId: string };
}) {
  const { pageId } = params;

  // Check if the pageId is valid
  if (!(pageId in pageComponents)) {
    notFound();
  }

  const PageComponent = pageComponents[pageId as PageId];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageComponent />
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  return Object.keys(pageComponents).map((pageId) => ({
    pageId,
  }));
}

// Generate metadata for better SEO
export async function generateMetadata({
  params,
}: {
  params: { pageId: string };
}): Promise<Metadata> {
  // You can customize the metadata based on the page ID
  const pageTitles: Record<string, string> = {
    vnls2: 'Vintage Nylon Laptop Sleeve',
    vnshblackbogo1: 'Vintage Nylon Shoulder Bag - Black BOGO',
  };

  return {
    title: pageTitles[params.pageId] || 'Page Not Found',
  };
}

