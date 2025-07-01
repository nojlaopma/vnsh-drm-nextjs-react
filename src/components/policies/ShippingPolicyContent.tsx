import React from 'react';
import Link from 'next/link';

const ShippingPolicyContent = () => {
  return (
    <div className="prose max-w-none space-y-4 text-gray-700">
      <p className="px-3">Orders are shipped within 24 hours of placing your order Sunday through Thursday.</p>
      <p className="px-3">Orders received Friday, Saturday and Sunday will go out first thing Monday morning.</p>
      <p className="px-3">
        You can reach support with any questions at{' '}
        <a href="tel:1-888-526-1885" className="font-bold text-blue-600 hover:underline">
          1-888-526-1885
        </a>.
      </p>
    </div>
  );
};

export default ShippingPolicyContent;
