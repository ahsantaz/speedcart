import React from 'react'
import TopLeft from '../../circle/top-left'
import TopRight from '../../circle/top-right'

export default function Container({ icon, title, contact }) {
  return (
    <div className='flex relative lg:gap-[24px] gap-[12px] lg:p-[26px] p-[16px] items-center'>
       <TopLeft />
            <TopRight />
      <div>
        <img className='lg:h-[32px] lg:w-[32px] h-[22px] w-[22px]' src={icon} alt="" />
      </div>
      <div className='flex flex-col gap-[8px]'>
        <p className='lg:text-[16px] text-[14px] font-[400] text-gray-700'>{title}</p>
        <p className='lg:text-[20px] text-[16px] font-[500] text-gray-700'>{contact}</p>
      </div>
    </div>
  )
}
