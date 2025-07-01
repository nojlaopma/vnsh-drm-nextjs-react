'use client';

import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
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
