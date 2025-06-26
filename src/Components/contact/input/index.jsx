import React from 'react'

export default function ContactInput({ title, placeholder }) {
  return (
    <div className='flex flex-col gap-[8px]'>
      <p className='lg:text-[16px] text-[14px] font-[500] text-gray-600'>{title}</p>
      <input className='py-3 px-4 rounded-xl bg-white text-gray-700 ' type='text' placeholder={placeholder} />

    </div>
  )
}
