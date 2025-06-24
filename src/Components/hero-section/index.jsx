import React from 'react'
import Header from '../header'
import HorizantalLine from '../lines/horizantal-line'
import OrangeHover from '../buttons/OrangeHover'
import HoverButton from '../buttons/HoverButton'
import ShinyOrangeButton from '../buttons/ShinyOrangeButton'

export default function Hero_section({part1, part2, part3, part4, part5, description, image}) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2  border-r-[2px] border-l-[2px] border-[#5D5C5C] max-w-[1286px] h-full z-10 pointer-events-none w-[calc(100%-30px)] lg:w-[calc(100%-40px)]"></div>

      <div className="bg-[#1a1a1a] bg-[url('/images/hero-background.svg')] bg-cover bg-center w-full md:pt-[130px] pt-[90px] pb-8 md:pb-14">
        <Header />
        <HorizantalLine color="border-[#5D5C5C]" />

        <div className=" mx-auto my-8 md:my-14 z-20 relative px-6 md:px-10">
          <div className="text-center">
            <span className="inline-flex items-center justify-center py-2 px-3 rounded-[50px] border border-[#FACCBD] gap-2 text-white font-[400] text-sm sm:text-base">
              <img src="/images/subtitle.svg" alt="" className="w-4 sm:w-auto" />
              <span>Smarter Carts. Higher Conversions.</span>
            </span>

            <div className="my-5">
              <p className="font-[700] text-[32px] md:text-[48px] lg:text-[64px] text-white leading-[120%]">
                <span className="text-sec-orange">{part1}</span> {part2} <br />
                {part3} <span className="text-sec-orange">{part4}</span> {part5}
              </p>

              <p className="text-[#C9C9C9] leading-[150%] font-[400] mt-6 max-w-150 mx-auto text-sm sm:text-base">
               {description}
              </p>

              <div className="flex flex-row gap-2 justify-center my-6 md:my-10">
<ShinyOrangeButton text="Get started"/>
                <HoverButton text="View Demo" color="text-white" width="w-25" />
              </div>
            </div>

            <div className="max-w-[1024px]  mx-auto mt-6 md:mt-10">
              <img src={image} alt="home banner" />
       </div>
          </div>
        </div>
        <HorizantalLine color="border-[#5D5C5C]" />

      
      </div>
    </div>
  )
}
