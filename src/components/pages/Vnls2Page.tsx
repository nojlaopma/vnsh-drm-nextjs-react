'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import shared sections
import { Hero, Features, Pricing } from '@/components/sections/shared';

export default function Vnls2Page() {
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
