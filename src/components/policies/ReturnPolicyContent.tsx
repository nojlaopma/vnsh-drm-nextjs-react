import React from 'react';
import Link from 'next/link';

const ReturnPolicyContent = () => {
  return (
    <div className="return-policy-content">
      <div className="space-y-6">
        <p>
          If you are not 100% satisfied with your purchase, you can return the product and get a full refund or exchange the product for another one, be it similar or not. You can return a product for up to 30 days from the date you purchased it. Any product you return must be in the same condition you received it and in the original packaging. Please keep the receipt.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Due to the nature of our products, we can only accept returns of unopened and unused items in their original packaging.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Return Process</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Contact our customer service team at <Link href="mailto:returns@VNSH.com" className="text-blue-600 hover:underline">returns@VNSH.com</Link> to initiate your return</li>
            <li>You will receive a Return Merchandise Authorization (RMA) number and return instructions</li>
            <li>Securely package your return with the RMA number clearly visible on the outside of the package</li>
            <li>Ship the package to the address provided in your return instructions</li>
          </ol>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Refund Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds will be processed within 3-5 business days after we receive your return</li>
            <li>Original shipping charges are non-refundable</li>
            <li>You are responsible for return shipping costs unless the return is due to our error</li>
            <li>Refunds will be issued to the original payment method</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Exchanges</h3>
          <p>
            If you need to exchange an item, please contact our customer service team at{' '}
            <Link href="mailto:exchanges@VNSH.com" className="text-blue-600 hover:underline">
              exchanges@VNSH.com
            </Link>{' '}
            or call us at{' '}
            <Link href="tel:1-888-526-1885" className="font-semibold hover:underline">
              1-888-526-1885
            </Link>.
          </p>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Damaged or Defective Items</h3>
          <p>
            If you receive a damaged or defective item, please contact us immediately at{' '}
            <Link href="mailto:support@VNSH.com" className="text-blue-600 hover:underline">
              support@VNSH.com
            </Link>{' '}
            or call us at{' '}
            <Link href="tel:1-888-526-1885" className="font-semibold hover:underline">
              1-888-526-1885
            </Link>.
            We will provide a prepaid return shipping label and process a replacement or refund as soon as possible.
          </p>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Return Address</h3>
          <p className="font-medium">Sicuro Brands LLC - Returns</p>
          <p>2121 Lohmans Crossing Rd #504-662</p>
          <p>Lakeway, TX 78734</p>
          <p className="mt-2 text-sm text-gray-600">
            Please include your RMA number on the outside of the package. Returns without an RMA number may experience delays in processing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyContent;
