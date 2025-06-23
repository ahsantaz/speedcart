import React from 'react'

export default function HeadingSection({heading1, heading2, description}) {
  return (
    <div className=' text-center mx-auto max-w-[600px] mb-7 px-2'>
        <h1 className='md:text-[48px] text-[28px] leading-[120%] font-[600] text-black mb-4 capitalize'>
        {heading1} <span className='text-sec-orange'>{heading2}</span>
        </h1>
            <p className='text-gray-500 font-[400] md:text-[16px] text-[14px]'>{description}</p>
    </div>
  )
}
