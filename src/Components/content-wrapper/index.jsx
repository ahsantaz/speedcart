import React from 'react'

export default function ContentWrapper({ children }) {
  return (
   <div className='border-r-[1px] border-l-[1px] border-gray-200 max-w-[1286px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] '>
    { children }
    </div>
  )
}
