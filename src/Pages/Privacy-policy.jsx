import React from 'react'
import SmallHeroSection from '../Components/sections/small-hero-section'
import OrangeHover from '../Components/buttons/OrangeHover'
import ContentWrapper from '../Components/content-wrapper'
import EmptyBox from '../Components/lines/empty-box'
import HorizantalLine from '../Components/lines/horizantal-line'

export default function Privacy() {
        const GrayLine = () => <HorizantalLine color="border-gray-200" />;

  return (
<>
    <SmallHeroSection text="Privacy Policy" date="Effective Date: May 22, 2025"/>
    <ContentWrapper>
 
    </ContentWrapper>


    <GrayLine />
    <EmptyBox></EmptyBox>
    <GrayLine />
    <EmptyBox></EmptyBox>
    </>
  )
}
