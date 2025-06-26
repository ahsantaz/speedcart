import React from 'react'

export default function Container({ icon, title, contact }) {
  return (
    <div className='flex lg:gap-[24px] gap-[12px] lg:p-[26px] p-[16px] items-center'>
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
