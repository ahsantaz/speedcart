import React from 'react'
import OrangeHover from '../buttons/OrangeHover'

export default function HeadingFlex({heading1, heading2, description, align}) {
  return (
    <div className='flex justify-between items-center md:flex-row flex-col lg:py-8 py-6 lg:px-[26px] px-5'>
    <div className={`${align}  max-w-[600px] `}>
        <h1 className='md:text-[48px] text-[28px] leading-[120%] font-[600] text-black mb-4 capitalize'>
        {heading1} <span className='text-sec-orange'>{heading2}</span>
        </h1>
            <p className='text-gray-500 font-[400] md:text-[16px] text-[14px]'>{description}</p>
    </div>

 <OrangeHover text="Get Started" width="w-27 mx-0" />
    </div>
  )
}
