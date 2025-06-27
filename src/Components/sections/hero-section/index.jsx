import React from 'react'
import HorizantalLine from '../../lines/horizantal-line'
import HoverButton from '../../buttons/HoverButton'
import ShinyOrangeButton from '../../buttons/ShinyOrangeButton'
import TopLeftBlack from '../../circleBlack/top-left-black';
import TopRightBlack from '../../circleBlack/top-right-black';
import BottomLeftBlack from '../../circleBlack/bottom-left-black';
import BottomRightBlack from '../../circleBlack/bottom-right-black';




export default function Hero_section({ part1, part2, part3, part4, part5, description, image }) {
  return (
    <div className="relative">
     
      {/* <div className="relative">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 border-r-[1px] border-l-[1px] border-[#5D5C5C] max-w-[1286px] h-full z-10 pointer-events-none w-[calc(100%-30px)] lg:w-[calc(100%-40px)]"></div>

    
    <div className="absolute left-1/2 top-[-8px] -translate-x-1/2 hidden lg:block z-[100]">
      <Circle />
    </div>
  </div> */}

      <div className="bg-[#1a1a1a]  bg-[url('/images/hero-background.svg')] bg-cover bg-center w-full   border-r-[1px] border-l-[1px]">
       <div className='relative border-r-[1px] border-l-[1px] border-[#5D5C5C] max-w-[1286px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] md:pt-[130px] pt-[92px]'></div>
               <HorizantalLine color="border-[#5D5C5C]" />

<div className='relative border-r-[1px] border-l-[1px] border-[#5D5C5C] max-w-[1286px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] '>
  
  <TopLeftBlack />
<TopRightBlack />
<BottomLeftBlack />
<BottomRightBlack />

        <div className=" mx-auto pt-8 lg:pt-[64px] pb-4 md:pb-2 lg:pb-[32px] z-20 relative px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center md:w-auto w-full justify-center py-2 px-3 rounded-[50px] border border-[#FACCBD] gap-2 text-white font-[400] text-sm sm:text-base">
              <img src="/images/subtitle.svg" alt="" className="w-4 sm:w-auto" />
              <span>Smarter Carts. Higher Conversions.</span>
            </span>

            <div className="lg:my-5 my-4">
              <h1 className="font-[700] text-[32px] md:text-[48px] self-stretch lg:text-[64px] text-white leading-[120%] lg:max-w-[785px] md:max-w-[500px] sm:max-w-[300px] mx-auto" >
                <span className="text-sec-orange">{part1}</span> {part2} {part3} <span className="text-sec-orange">{part4}</span> {part5}
              </h1>

              <p className="text-[#C9C9C9] leading-[150%] font-[400] mt-6 max-w-150 mx-auto text-sm sm:text-base">
                {description}
              </p>

              <div className="flex flex-row gap-2 justify-center pt-[32px]">
                <ShinyOrangeButton text="Get started" link="/" />
                <HoverButton text="View Demo" color="text-white" width="w-25" link="/" />
              </div>
            </div>

            <div className="max-w-[1024px]  mx-auto mt-6 md:mt-10">
              <img src={image} alt="home banner" />
            </div>
          </div>
        </div>
        </div>
        <HorizantalLine color="border-[#5D5C5C]" />

 <div className='relative border-r-[1px] border-l-[1px] border-[#5D5C5C] max-w-[1286px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pb-[64px] pb-[32px]'></div>
      </div>
    </div>
  )
}
