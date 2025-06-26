import React from 'react'
import SmallHero from '../Components/sections/small-hero-section'
import SmallHeroSection from '../Components/sections/small-hero-section'
import OrangeHover from '../Components/buttons/OrangeHover'
import ContentWrapper from '../Components/content-wrapper'

export default function NotFound() {
  return (
    <>
      <SmallHeroSection text="404" />
      <ContentWrapper>
        <div className='lg:p-[64px] p-[32px] text-center'>
          <div className='lg:p-[32px] p-[16px] bg-[url("/images/405.svg")] bg-center bg-cover rounded-2xl text-center max-w-[850px] mx-auto'>
           
            <div className='lg:py-[40px] py-[30px] mt-[140px] flex flex-col gap-[8px] lg:gap-[20px]'>


              <p className='font-[600] text-[32px] md:text-[48px] lg:text-[64px] leading-[120%]'>Oops! Page not found</p>
              <p>The page you’re looking for isn’t here, but we can help you find your way back.</p>
            </div>
            <div className='flex justify-center'><OrangeHover text="Back to Homepage" width="w-40 mx-0" link="/" />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  )
}
