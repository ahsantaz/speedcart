import React from 'react'
import SmallHero from '../Components/sections/small-hero-section'
import SmallHeroSection from '../Components/sections/small-hero-section'
import OrangeHover from '../Components/buttons/OrangeHover'
import ContentWrapper from '../Components/content-wrapper'

export default function NotFound() {
  return (
<>
    <SmallHeroSection text="404"/>
    <ContentWrapper>
    <div className='lg:p-[64px] p-[32px] text-center'>
<div className='lg:p-[32px] p-[16px] bg-gray-100 rounded-3xl text-center max-w-[850px] mx-auto'>
<p className='lg:text-9xl font-[600] text-6xl text-[#818181]'>404</p>
<div className='lg:py-[40px] py-[30px] flex flex-col gap-[8px] lg:gap-[20px]'>


<p className='font-[700] text-[32px] md:text-[48px] lg:text-[64px] leading-[120%]'>Oops! Page not found</p>
<p>The page you’re looking for isn’t here, but we can help you find your way back.</p>
</div>
<div className='flex justify-center'><OrangeHover text="Back to Homepage" width="w-40 mx-0" />
</div>
</div>
    </div>
    </ContentWrapper>
    </>
  )
}
