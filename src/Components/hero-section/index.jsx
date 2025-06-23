import React from 'react'
import Header from '../header'
import HorizantalLine from '../lines/horizantal-line'
import OrangeHover from '../buttons/OrangeHover'
import HoverButton from '../buttons/HoverButton'

export default function Hero_section() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 border-l border-r border-[#5D5C5C] w-[1200px] h-full z-10 pointer-events-none"></div>

      <div className="bg-[url('/images/hero-background.svg')] bg-cover bg-center w-full pt-7 pb-14">
        <Header />
        <HorizantalLine />

        <div className="max-w-[1024px] mx-auto my-14 z-20 relative">
          <div className="text-center">
            <span className="inline-flex items-center justify-center py-2 px-3 rounded-[50px] border border-[#FACCBD] gap-2 text-white font-[400]">
              <img src="/images/subtitle.svg" alt="" />
              <span>Smarter Carts. Higher Conversions.</span>
            </span>

            <div className="my-5">
              <p className="font-[700] text-[64px] text-white leading-[120%]">
                <span className="text-sec-orange">Upgrade</span> Your Cart <br />
                Boost <span className="text-sec-orange">Sales</span> Today
              </p>

              <p className="text-[#C9C9C9] leading-[150%] font-[400] mt-6 max-w-150 mx-auto">
                Convert and recover your sales with Speed Cart's advanced cart tools, upsells, sticky carts, and recovery emails.
              </p>

              <div className="flex gap-2 justify-center my-10">
                <OrangeHover text="Get Started" width="w-27" />
                <HoverButton text="View Demo" color="text-white" width="w-25" />
              </div>
            </div>

            <div className="w-[100%] h-[500px] bg-gray-200 rounded-2xl my-10">
              image container
            </div>
          </div>
        </div>

        <HorizantalLine />
      </div>
    </div>
  )
}
