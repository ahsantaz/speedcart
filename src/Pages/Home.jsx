import React from 'react'
import Hero_section from '../Components/hero-section'
import HeadingSection from '../Components/heading-section'
import HorizantalLine from '../Components/lines/horizantal-line'
import FeatureCard from '../Components/feature-card'
export default function Home() {
  return (
    <>
   
<Hero_section image={''} heading="" description=" Convert and recover your sales with Speed Cart's advanced cart tools, upsells, sticky carts, and recovery emails." part1="Upgrade" part2="Your Cart" part3="Boost" part4="Sales" part5="Today"/>

<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] py-10'>
  <HeadingSection heading1="Our core" heading2="feature" description="Simplify cart management, boost sales, and recover lost revenue with our easy, powerful features."  />

   <div className="grid grid-cols-1 md:grid-cols-2">

    <div className='lg:p-6 p-[16px]  md:border-r-[2px] border-t-[2px] border-[#C9C9C9]'>
<FeatureCard heading="Card Editor" description="Customize cart layouts, colors, promotions, product suggestions, trust badges, and more." background= "bg-[#E8F1FB]" image="/images/feature1.png" link=""/>
</div>

    <div className='lg:p-6 p-[16px] border-t-[2px]  border-[#C9C9C9]'>
<FeatureCard heading="Sticky Cart" description="Keep a floating cart button always visible for faster, friction-free checkouts from any page." background= "bg-[#FCF9E8]" image="/images/feature2.png" link=""/>
</div>

    <div className='lg:p-6 p-[16px] border-t-[2px] md:border-r-[2px] md:border-b-[2px] border-[#C9C9C9]'>
<FeatureCard heading="Abandoned Cart" description="Automatically email shoppers who leave items behind and bring them back to complete their orders." background= "bg-[#FBECEC]" image="/images/feature3.png" link=""/>
</div>

    <div className='lg:p-6 p-[16px] border-t-[2px] border-b-[2px] border-[#C9C9C9]'>
<FeatureCard heading="Cart Templates" description="Customize cart layouts, colors, promotions, product suggestions, trust badges, and more." background= "bg-[#EDEBFF]" image="/images/feature4.png" link=""/>
</div>

  </div>
</div>


    </>
  )
}
