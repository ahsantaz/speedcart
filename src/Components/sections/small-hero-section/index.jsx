import React from 'react'
import HorizantalLine from '../../lines/horizantal-line'

export default function SmallHeroSection({ text, date }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2  border-r-[1px] border-l-[1px] border-[#5D5C5C] max-w-[1286px] h-full z-10 pointer-events-none w-[calc(100%-30px)] lg:w-[calc(100%-40px)]"></div>

      <div className="bg-[#1a1a1a] bg-[url('/images/small-hero-img.svg')] bg-cover bg-center w-full md:pt-[130px] pt-[90px]">

        <HorizantalLine color="border-[#5D5C5C]" />

        <div className=" mx-auto lg:py-[64px] py-[32px] z-20 relative px-6 md:px-10">
          <div className="text-center">
            <p className='font-[600] text-[28px] lg:text-[48px] text-gray-50 leading-[120%]'>{text}</p>
            {date && <p className='text-[#F6F6F6] pt-[12px]'>{date}</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
