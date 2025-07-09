// @ts-nocheck

import { notFound } from 'next/navigation';
import DynamicPageLoader from '@/components/pages/DynamicPageLoader';

// This is a list of valid page IDs for static generation.
// It must be kept in sync with the keys in `pageComponents` in DynamicPageLoader.tsx
const validPageIds = ['vnls2', 'vnshblackbogo1', 'vnshcamobogo1'] as const;

type ValidPageId = typeof validPageIds[number];

// This tells Next.js which pages to generate at build time
export async function generateStaticParams() {
  return validPageIds.map((pageId) => ({
    pageId,
  }));
}

// This is the main page component
export default function Page({ 
  params, 
  searchParams 
}: { 
  params: { pageId: string }; 
  searchParams?: { [key: string]: string | string[] | undefined }; 
}) {
  // Get the pageId from params
  const pageId = params?.pageId;
  
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
    <div className="container mx-auto px-4 py-8">
      <DynamicPageLoader 
        params={{ pageId }} 
        searchParams={safeSearchParams} 
      />
    </div>
  );
}
