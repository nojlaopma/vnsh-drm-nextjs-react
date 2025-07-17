import React from 'react';
import Link from 'next/link';

const ReturnPolicyContent = () => {
  return (
    <div className="max-w-none space-y-4 text-[16px] leading-[1.4] font-arial">
      <p className="px-3">
        If you would like to return your purchase for a refund, you must reach out to customer support by either email or phone to receive a return merchandise authorization (RMA).
      </p>
      <p className="px-3">
        If you return your purchase without a RMA, we can not guarantee you credit. You have up to 365 days from purchase to request a refund. Call{' '}
        <Link href="tel:1-888-526-1885" className="font-bold text-blue-600 hover:underline">
          1-888-526-1885
        </Link>.
      </p>
    </div>
  );
};

export default ReturnPolicyContent;
