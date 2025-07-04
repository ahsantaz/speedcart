import React from 'react';
import { Link } from 'react-router';

export default function AnimationCard({ heading, description, image, link }) {
  return (


    <><Link to={link}>

    
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-0 group-hover:h-full group-hover:opacity-100 transition-all  duration-700 ease-in-out z-0" />


      <div className="relative z-10">
        <div className='flex justify-center items-center'>
          <img src={image} className='w-100' alt="" />
        </div>
        <h2 className="text-[20px] font-[600] md:text-[24px] pt-3 text-gray-900 group-hover:text-white transition-all duration-700">
          {heading}
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-700 pt-2 group-hover:text-white transition-all duration-700">
          {description}
        </p>
      </div>
      </Link>
    </>

  );
}
