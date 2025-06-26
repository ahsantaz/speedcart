import React from 'react'

export default function HeadingSection({heading1, heading2, description, align}) {
  return (
    <div className={`${align}   lg:py-8 py-4 lg:px-[26px] px-4`}>
        <h1 className='md:text-[48px] text-[28px] leading-[120%] font-[600] text-black mb-4 capitalize'>
        {heading1} <span className='text-sec-orange'>{heading2}</span>
        </h1>
            <p className='text-gray-700 font-[400] md:text-[16px] text-[14px]'>{description}</p>
    </div>
  )
}
