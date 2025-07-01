import React from 'react';
import Link from 'next/link';

const ShippingPolicyContent = () => {
  return (
    <div className="shipping-policy-content">
      <div className="space-y-4">
        <p>
          Orders are shipped within 24 hours of placing your order Sunday through Thursday.
        </p>
        <p>
          Orders received Friday, Saturday and Sunday will go out first thing Monday morning.
        </p>
        <p>
          You can reach support with any questions at{' '}
          <Link href="tel:1-888-526-1885" className="font-semibold hover:underline">
            1-888-526-1885
          </Link>.
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Shipping Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard shipping typically takes 3-5 business days</li>
            <li>Expedited shipping options available at checkout</li>
            <li>International shipping available to select countries</li>
            <li>Free standard shipping on all orders over $50</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Order Processing</h3>
          <p>
            Please allow 1-2 business days for order processing before your package ships. You will receive a shipping confirmation email with tracking information once your order has been processed and shipped.
          </p>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Shipping Address</h3>
          <p className="font-medium">Sicuro Brands LLC</p>
          <p>2121 Lohmans Crossing Rd #504-662</p>
          <p>Lakeway, TX 78734</p>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>
            For any shipping-related questions or concerns, please contact our customer service team at{' '}
            <Link href="mailto:customercare@VNSH.com" className="text-blue-600 hover:underline">
              customercare@VNSH.com
            </Link>{' '}
            or call us at{' '}
            <Link href="tel:1-888-526-1885" className="font-semibold hover:underline">
              1-888-526-1885
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyContent;
