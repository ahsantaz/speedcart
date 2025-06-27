import React from 'react'
import HorizantalLine from '../../lines/horizantal-line'
import ShinyOrangeButton from '../../buttons/ShinyOrangeButton'
import SocialIcon from '../../buttons/social-icon'
import { Link } from 'react-router'
import OrangeHover from '../../buttons/OrangeHover'
import BottomLeftBlack from '../../circleBlack/bottom-left-black'
import BottomRightBlack from '../../circleBlack/bottom-right-black'
import TopRightBlack from '../../circleBlack/top-right-black'
import TopLeftBlack from '../../circleBlack/top-left-black'

export default function Footer() {
  return (
    <div className="bg-[url('/images/footer-bg.svg')] bg-cover bg-center w-full">
      <div className='relative border-r-[1px] border-l-[1px] border-[#5D5C5C] max-w-[1286px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] '>


        <div className='relative lg:p-8 p-6'>
         
<BottomLeftBlack />
<BottomRightBlack />
        </div>
        <HorizantalLine color="border-[#5D5C5C]" />
        <div className='text-center lg:pb-16 md:pb-10 pb-8 '>
          <div className='lg:py-16 md:py-10 py-8 max-w-[830px] mx-auto px-[16px]'>
            <p className="font-[600] text-[32px] md:text-[48px] lg:text-[64px] text-white leading-[120%]">
              Power Up Your Shopify Store with Speed Cart!
            </p>

            <p className="text-[#C9C9C9] leading-[150%] font-[400] mt-6 max-w-150 mx-auto text-sm sm:text-base">
              Find quick answers to common questions and learn how Speed Cart helps you boost conversions, simplify checkout, and recover more sales.
            </p>
          </div>
          <div className='flex justify-center'>
            <ShinyOrangeButton text="Try For Free" link="/" />

          </div>
        </div>
        <HorizantalLine color="border-[#5D5C5C]" />
        <div className='grid lg:grid-cols-3 grid-col-1'>
          {/* column 1 */}
          <div className='relative lg:p-[26px] p-[16px]  border-r-0 lg:border-r-[1px] border-[#5D5C5C] border-b-[1px]'>
            <TopLeftBlack />
<TopRightBlack />
<BottomLeftBlack />
<BottomRightBlack />
            <img src="/images/footer-logo.svg" alt="" />

            <p className='lg:text-[16px] text-[14px] font-[400] text-gray-200 lg:py-[24px] py-[18px]'>Find quick answers to common questions and learn how Speed Cart helps you boost conversions, simplify checkout, and recover more sales.</p>

            <div className='lg:py-[24px] py-[18px]'>
              <p className='font-[600] lg:text-[20px] text-[16px] text-white'>Follow us on</p>
              <div className='flex gap-[16px] pt-[16px]'>
                <SocialIcon icon="/images/facebook.svg" hoverIcon="/images/facebook.svg" link="https://www.facebook.com/DaisyDiffusion" />
                <SocialIcon icon="/images/linkedin.svg" hoverIcon="/images/linkedin.svg" link="https://www.linkedin.com/company/daisy-diffusion/" />
                <SocialIcon icon="/images/instagram.svg" hoverIcon="/images/instagram.svg" link="https://www.instagram.com/daisy_diffusion/" />
                <SocialIcon icon="/images/twitter.svg" hoverIcon="/images/twitter.svg" link="https://x.com/DaisyDiffu50543" />
                <SocialIcon icon="/images/youtube.svg" hoverIcon="/images/youtube.svg" link="https://www.youtube.com/@DaisyDiffusion" />
                <SocialIcon icon="/images/printrest-light.svg" hoverIcon="/images/printrest-light.svg" link="https://uk.pinterest.com/daisydiffusion/" />

              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className='border-b-[1px] grid grid-cols-2 border-r-0 lg:border-r-[1px] border-[#5D5C5C]'>
            <div className='relative lg:p-[26px] p-[16px] border-r-[1px] border-[#5D5C5C] flex flex-col gap-[16px]'>
          
<TopRightBlack />

<BottomRightBlack />
              <p className='lg:text-[20px] text-[16px] font-[600] text-white'>Solution</p>
              <Link to={"/"} className='font-[400] text-gray-200'>Announcement</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Upsells</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Rewards</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Coupon Codes</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Shipping Proection</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Gift Wrapping</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Sticky Cart</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Abandoned Cart</Link>
            </div>
            <div className='relative lg:p-[26px] p-[16px] flex flex-col gap-[16px]'>
                        
<TopRightBlack />

<BottomRightBlack />
              <p className='lg:text-[20px] text-[16px] font-[600] text-white'>Company</p>
              <Link to={"/contact"} className='font-[400] text-gray-200'>Contact us</Link>
              <Link to={"/privacy-policy"} className='font-[400] text-gray-200'>Privacy & Policy</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Terms & Condition</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Affiliate Program</Link>
              <Link to={"/"} className='font-[400] text-gray-200'>Our Products</Link>

            </div>
          </div>
          {/* column 3 */}
          <div className='relative lg:p-[26px] p-[16px] border-b-[1px]  border-[#5D5C5C]'>
                      
<TopRightBlack />

<BottomRightBlack />
            <p className='lg:text-[20px] text-[16px] font-[600] text-white'>Location</p>
            <p className='font-[400] text-gray-200 py-[16px]'>125, Palk Road, Wellingborough, ENG
            </p>
            <p className='lg:text-[20px] text-[16px] font-[600] text-white mt-[24px] lg:mt-[48px]'>Subscribe for latest tips</p>
            <div className="flex  justify-center lg:gap-4 gap-3 py-4 w-full max-w-[500px]">
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-full sm:w-auto min-w-0 flex-grow px-4 py-2 rounded-3xl border border-gray-300 text-gray-200"
              />
              <OrangeHover text="Subscribe" width="w-24" link="/" />
            </div>


          </div>
        </div>
        <p className='text-gray-200 font-[400] lg:p-[26px] p-[16px] text-center '>© 2025 Product by Daisy Diffusion</p>
      </div>
    </div>
  )
}
