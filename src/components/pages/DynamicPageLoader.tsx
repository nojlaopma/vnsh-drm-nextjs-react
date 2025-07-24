'use client';

import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define the valid page IDs and their corresponding components with SSR disabled
const pageComponents = {
  vnls2: dynamic(() => import('./Vnls2Page'), { ssr: false }),
  vnshblackbogo1: dynamic(() => import('./VnshBlackBogo1Page'), { ssr: false }),
  vnshcamobogo1: dynamic(() => import('./VnshCamoBogo1Page'), { ssr: false }),
  vnsmp1: dynamic(() => import('./Vnsmp1Page'), { ssr: false }),
  vnls1: dynamic(() => import('./vnls1Page'), { ssr: false }),
  vns3mmbonus: dynamic(() => import('./vns3mmbonusPage'), { ssr: false }),
  vnshlite1: dynamic(() => import('./vnshlite1Page'), { ssr: false }),
  vnsmm1: dynamic(() => import('./vnsmm1Page'), { ssr: false }),
  vnshggg1: dynamic(() => import('./vnshggg1Page'), { ssr: false }),
  vnls1po223: dynamic(() => import('./vnls1po223Page'), { ssr: false }),
} as const;

type PageId = keyof typeof pageComponents;

interface PageProps {
  params: { pageId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function DynamicPageLoader({ params, searchParams = {} }: PageProps) {
  const { pageId } = params;
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle invalid page IDs
  if (!pageId || !(pageId in pageComponents)) {
    notFound();
  }

  const PageComponent = pageComponents[pageId as PageId];

  // Don't render anything on the server-side for dynamic content
  if (!isMounted) {
    return null;
  }

  // Convert searchParams to a plain object if it's a URLSearchParams instance
  const safeSearchParams = searchParams instanceof URLSearchParams
    ? Object.fromEntries(searchParams.entries())
    : searchParams;

  return <PageComponent params={params} searchParams={safeSearchParams} />






}
