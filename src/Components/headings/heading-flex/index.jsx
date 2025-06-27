import React from 'react'
import OrangeHover from '../../buttons/OrangeHover'

export default function HeadingFlex({ heading1, heading2, description, align }) {
  return (
    <div className='flex justify-between lg:flex-row flex-col lg:py-8 py-4 lg:px-[26px] px-4 gap-3'>
      <div className={`${align}  `}>
        <h2 className='md:text-[48px] text-[28px] leading-[120%] font-[600] text-black mb-4 capitalize'>
          {heading1} <span className='text-sec-orange'>{heading2}</span>
        </h2>
        <p className='text-gray-700 font-[400] md:text-[16px] text-[14px]'>{description}</p>
      </div>
<div className='lg:mr-0 mr-auto flex items-center'>
      <OrangeHover text="Get Started" width="w-27 mx-0" link="/" />
      </div>
    </div>
  )
}
