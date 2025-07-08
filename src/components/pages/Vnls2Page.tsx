'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import shared sections
import { Hero, Features, Pricing } from '@/components/sections/shared';

interface Vnls2PageProps {
  params: {
    pageId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Vnls2Page({ params }: Vnls2PageProps) {
  return (
    <main>
      <Hero />
      <Features />
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing />
      </Suspense>
    </main>
  );
}
