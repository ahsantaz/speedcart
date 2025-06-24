import React from 'react'
import ContentWrapper from '../content-wrapper'
import HorizantalLine from '../lines/horizantal-line'
import ShinyOrangeButton from '../buttons/ShinyOrangeButton'
import SocialIcon from '../buttons/social-icon'
import { Link } from 'react-router'
import OrangeHover from '../buttons/OrangeHover'

export default function Footer() {
  return (
    <div className="bg-[url('/images/footer-bg.svg')] bg-cover bg-center w-full">
        <div className='border-r-[2px] border-l-[2px] border-[#5D5C5C] max-w-[1286px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] '>
    
    
            <div className='lg:p-8 p-6'></div>
            <HorizantalLine color="border-[#5D5C5C]"/>
            <div className='text-center lg:pb-16 md:pb-10 pb-8 '>
                <div className='lg:py-16 md:py-10 py-8 px-[16px]'>
                 <p className="font-[600] text-[32px] md:text-[48px] lg:text-[64px] text-white leading-[120%]">
             Power Up Your Shopify  <br />
                Store with Speed Cart!
              </p>

              <p className="text-[#C9C9C9] leading-[150%] font-[400] mt-6 max-w-150 mx-auto text-sm sm:text-base">
             Find quick answers to common questions and learn how Speed Cart helps you boost conversions, simplify checkout, and recover more sales.
              </p>   
              </div>  
<ShinyOrangeButton text="Try For Free"/>
            </div>
            <HorizantalLine color="border-[#5D5C5C]"/>
<div className='grid lg:grid-cols-3 grid-col-1'>
    {/* column 1 */}
<div className=' md:p-[26px] p-[16px]  border-r-0 lg:border-r-[2px] border-[#5D5C5C] border-b-[2px]'>
<img src="/images/footer-logo.svg" alt="" />

<p className='lg:text-[16px] text-[14px] font-[400] text-gray-200 lg:py-[24px] py-[18px]'>Find quick answers to common questions and learn how Speed Cart helps you boost conversions, simplify checkout, and recover more sales.</p>

<div className='lg:py-[24px] py-[18px]'>
    <p className='font-[600] lg:text-[20px] text-[16px] text-white'>Follow us on</p>
    <div className='flex gap-[16px] pt-[16px]'>
        <SocialIcon  icon="/images/facebook.svg"/>
        <SocialIcon  icon="/images/linkedin.svg"/>
        <SocialIcon  icon="/images/instagram.svg"/>
        <SocialIcon  icon="/images/twitter.svg"/>
        <SocialIcon  icon="/images/youtube.svg"/>
    </div>
</div>
</div>
{/* column 2 */}
<div className='border-b-[2px] grid grid-cols-2 border-r-0 lg:border-r-[2px] border-[#5D5C5C]'>
<div className=' md:p-[26px] p-[16px] border-r-[2px] border-[#5D5C5C] flex flex-col gap-[16px]'>
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
<div className=' md:p-[26px] p-[16px] flex flex-col gap-[16px]'>
     <p className='lg:text-[20px] text-[16px] font-[600] text-white'>Company</p>
    <Link to={"/"} className='font-[400] text-gray-200'>Contact us</Link>
    <Link to={"/"} className='font-[400] text-gray-200'>Privacy & Policy</Link>
    <Link to={"/"} className='font-[400] text-gray-200'>Terms & Condition</Link>
    <Link to={"/"} className='font-[400] text-gray-200'>Affiliate Program</Link>
    <Link to={"/"} className='font-[400] text-gray-200'>Our Products</Link>
   
</div>
</div>
{/* column 3 */}
<div className=' lg:p-[26px] p-[18px] border-b-[2px]  border-[#5D5C5C]'>
      <p className='lg:text-[20px] text-[16px] font-[600] text-white'>Location</p>
    <p className='font-[400] text-gray-200 py-[16px]'>4544, Housing, Tangail, Dhaka, Bangladesh</p>
      <p className='lg:text-[20px] text-[16px] font-[600] text-white mt-[24px] lg:mt-[48px]'>Subscribe for latest tips</p>
    <div className="flex flex-col sm:flex-row gap-4 py-4 w-full max-w-[500px]">
  <input
    type="text"
    placeholder="Your Email Address"
    className="w-full sm:w-auto flex-1 px-4 py-2 rounded-3xl border border-gray-300 text-gray-200"
  />
  <OrangeHover text="Subscribe" width="w-24" />
</div>

     
</div>
</div>
<p className='text-gray-200 font-[400] lg:p-[26px] p-[16px] text-center '>© 2025 Product by Daisy Diffusion</p>
       </div>
    </div>
  )
}
