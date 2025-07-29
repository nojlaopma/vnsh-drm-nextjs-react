'use client';

import React from 'react';
import Image from 'next/image';

interface ReviewProps {
  name: string;
  rating: number;
  title: string;
  text: string;
  imageUrl?: string;
}

const CustomerReviews: React.FC = () => {
  const reviews: ReviewProps[] = [
    {
      name: 'Patty',
      rating: 5,
      title: 'Very intimidating flashlight!',
      text: 'After I got this in the mail and tried it I was showing it to my husband. I think he though it was just a flashlight until I activated the stun gun and pushed the button. He jumped! I haven\'t needed to use it and hope to never have to, but feel safer knowing I have to put down an attacker.',
      imageUrl: '/images/swt/reviews/knssextt3-patty.webp'
    },
    {
      name: 'ED',
      rating: 5,
      title: 'A Nice Insurance Policy!',
      text: 'Bought the exact item from another company for $10.00 more and was happy with that one! It\'s a nice little insurance policy when you have to go somewhere you can\'t go armed. I carry it at my job and no one knows what it is. The light is very powerful and I use it all the time, the stun part sounds very powerful as well! Bought one for my son and my wife! Recommend it and this company, they both seem very dependable.',
      imageUrl: '/images/swt/reviews/knssextt3-ed.webp'
    },
    {
      name: 'Ann Hollandsworth',
      rating: 5,
      title: 'Wow!',
      text: 'It came nicely packaged, love the belt loop holder. The light is very bright and luckily I haven\'t needed the stun gun, but when I tested it, I jumped! It goes with me any time I have to be out.',
      imageUrl: '/images/swt/reviews/knssextt3-ann.webp'
    },
    {
      name: 'HRB',
      rating: 5,
      title: 'A Must Have!',
      text: 'This item is a need to have in today\'s increasingly aggressive world. While bright light is always helpful, the electrical charge from the bezel, could help you to get out of dangerous situations. Imagine you\'re stuck in your car during one of the current riots, and someone is breaking through your window... a zap with a few thousand volts could help you.',
      imageUrl: '/images/swt/reviews/knssextt3-hrb.webp'
    }
  ];

  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="text-[#FFCC00] text-[16px] md:text-[20px] mx-[1px]">⭐</span>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-[1100px] mx-auto mt-6 mb-8">
      {/* <h2 className="text-center text-[22px] md:text-[28px] font-bold mb-6">What Our Customers Are Saying</h2> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="">
            <div className="flex items-start">
              {review.imageUrl && (
                <div className="mr-3 pt-[15px]">
                  <div className="w-[45px] h-[45px] overflow-hidden rounded-full bg-[#f2f2f2] flex-shrink-0">
                    <Image 
                      src={review.imageUrl} 
                      alt={`${review.name} profile`} 
                      width={45} 
                      height={45}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}
              
              <div className="flex-1 bg-[#f9f9f9] rounded-[20px] p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <div className="font-bold text-[16px] md:text-[18px]">{review.name} {renderStars(review.rating)}</div>
                </div>
                <div className="text-[#ff0000] font-bold text-[14px] md:text-[16px] mb-2">{review.title}</div>
                <p className="text-[14px] md:text-[18px] text-[#333] leading-[20px]">{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
