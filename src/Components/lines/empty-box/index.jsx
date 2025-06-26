import React from 'react'
import BottomLeft from '../../circle/bottom-left'
import BottomRight from '../../circle/bottom-right'
import TopLeft from '../../circle/top-left'
import TopRight from '../../circle/top-right'

export default function EmptyBox({ children }) {
  return (
   <div className='relative border-r-[1px] border-l-[1px] border-gray-200 max-w-[1286px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:py-6 py-4'>
    { children }
  
        <TopLeft />
        <TopRight />
    </div>
  )
}
