import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FeatureCard({ image, heading, description, background, link }) {
  const navigate = useNavigate();
  const [showArrow, setShowArrow] = useState(false);

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className={`flex flex-col rounded-2xl lg:p-6 p-[16px] ${background} cursor-pointer transition h-full`}
      onClick={handleClick}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <div className='flex justify-between items-center'>
        <h2 className="md:text-[24px] font-[600] text-[20px]">{heading}</h2>
        <div
          className={`transition-all duration-500 ${showArrow ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img src="/images/arrow-right.svg" alt="arrow" className="w-5 h-5" />
        </div>
      </div>

      <p className="font-[400] text-[14px] md:text-[16px] text-gray-700 lg:pb-6 pb-[16px] pt-2">
        {description}
      </p>

      <div className='mt-auto'>
        <img src={image} alt="" />
      </div>
    </div>

  );
}
