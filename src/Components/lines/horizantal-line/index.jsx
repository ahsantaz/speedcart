import React from 'react'
import Circle from '../../circle'

export default function HorizantalLine({color}) {
  return (
    <><div className='relative'>
      {/* <div className='absolute right-[-4px] top-[-4px] hidden lg:block z-10'>
        <Circle />
      </div>
      <div className='absolute left-[-4px] top-[-4px] hidden lg:block z-10'>
        <Circle />
      </div> */}
     
<div className={`border-t-[1px] ${color} w-[100%]`}></div>
    </div>
        
    </>
  )
}
