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
      name: 'Patrick',
      rating: 5,
      title: 'Shockingly cool!',
      text: 'I never write reviews but these flashlights are worth the extra minute to talk about...My wife and I are officially empty nesters. The last 2 left last week. I wanted something they could all have to protect themselves. 3 girls and a boy. I bought myself one to try it out. I was impressed how solid it was. Mine is the XL Baton. Light isn\'t as bright as I\'d hoped. The shock is what draws you in. I bought all the kids the "regular flashlight" it\'s about brighter but the tase is a little less. These lil guys will keep my girls and boy safe. No one will continue approaching once that hear this bug zapper on roids. It\'s loud and intimidating. I accidentally grasped the end after using the taser and it held a residual charge that cramped my hand into a fist and hurt my enter arm! The full brunt has to be painful. I recommend for your whole family, it certainly gives you piece of mind. They work better that I\'d hoped. Great EDC for even the slightest of person, a lil pricey but quality seems good, so it\'s worth it.',
      imageUrl: '/images/swt/reviews/knssextt3-patrick.webp'
    },
    {
      name: 'Edward D. Mencer',
      rating: 5,
      title: 'This is the Real Deal!',
      text: 'I love this torch light, it lights up my path and keeps The Shockwave Torch is the real deal. The quality is excellent and sure to last. I bought 2 of them. 1 for me and 1 for my wife and she loves it. I haven\'t had to use it in self defense but am certain it would do its job if necessary.',
      imageUrl: '/images/swt/reviews/knssextt3-edward.webp'
    },
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
