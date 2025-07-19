'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import shared sections
import { Hero, Features, Pricing } from '@/components/sections/vnls2';

interface Vnls2PageProps {
  params: {
    pageId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Vnls2Page({ params }: Vnls2PageProps) {
  return (
    <main className='w-full bg-[#f7f4f4] md:px-8 lg:px-[70px] max-w-[1240px] mx-auto relative overflow-hidden min-h-screen flex flex-col px-[15px]'>
      <Hero />
      <Features />
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing />
      </Suspense>
    </main>
  );
}
