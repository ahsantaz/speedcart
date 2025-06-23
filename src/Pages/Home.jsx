import React from 'react'
import Hero_section from '../Components/hero-section'
import HeadingSection from '../Components/heading-section'
import HorizantalLine from '../Components/lines/horizantal-line'
import FeatureCard from '../Components/feature-card'
import OrangeHover from '../Components/buttons/OrangeHover'
import AnimationCard from '../Components/animation-card'
import ComparisonTable from '../Components/comarison-table'
import SlideCarousel from '../Components/slides-crousel'
import BlogCard from '../Components/blog-card'
import HoverButton from '../Components/buttons/HoverButton'
export default function Home() {
  return (
    <>
   
<Hero_section image={''} heading="" description=" Convert and recover your sales with Speed Cart's advanced cart tools, upsells, sticky carts, and recovery emails." part1="Upgrade" part2="Your Cart" part3="Boost" part4="Sales" part5="Today"/>

<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-10 pt-6'>
  <HeadingSection heading1="Our core" heading2="feature" description="Simplify cart management, boost sales, and recover lost revenue with our easy, powerful features." align="text-center mx-auto" />

   <div className="grid grid-cols-1 md:grid-cols-2">

    <div className='lg:p-6 p-[16px]  md:border-r-[2px] border-t-[2px] border-[#C9C9C9]'>
<FeatureCard heading="Card Editor" description="Customize cart layouts, colors, promotions, product suggestions, trust badges, and more." background= "bg-[#E8F1FB]" image="/images/feature1.png" link=""/>
</div>

    <div className='lg:p-6 p-[16px] border-t-[2px]  border-[#C9C9C9]'>
<FeatureCard heading="Sticky Cart" description="Keep a floating cart button always visible for faster, friction-free checkouts from any page." background= "bg-[#FCF9E8]" image="/images/feature2.png" link=""/>
</div>

    <div className='lg:p-6 p-[16px] border-t-[2px] md:border-r-[2px]  border-[#C9C9C9]'>
<FeatureCard heading="Abandoned Cart" description="Automatically email shoppers who leave items behind and bring them back to complete their orders." background= "bg-[#FBECEC]" image="/images/feature3.png" link=""/>
</div>

    <div className='lg:p-6 p-[16px] border-t-[2px] border-[#C9C9C9]'>
<FeatureCard heading="Cart Templates" description="Customize cart layouts, colors, promotions, product suggestions, trust badges, and more." background= "bg-[#EDEBFF]" image="/images/feature4.png" link=""/>
</div>

  </div>
</div>
<HorizantalLine color="border-[#C9C9C9]" />
<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-14 pt-8'>
  </div>
<HorizantalLine color="border-[#C9C9C9]" />

<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-10 pt-6'>
  <div className='flex justify-between items-center p-4 md:flex-row flex-col'>
<HeadingSection heading1="Speed cart is built to " heading2="convert to a conversion." description="Powerful, scalable, and designed to convert — trusted by stores worldwide to boost sales and streamline checkout." align="text-left" />
  <OrangeHover text="Get Started" width="w-27 mx-0" />

  </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-[2px]  border-[#C9C9C9]">
  {/* Card 1 */}
  <div className="border-b-[2px] md:border-r-[2px] border-[#C9C9C9] ">
    <AnimationCard heading="Announcement" description="Boost awareness and engagement by displaying promotional messages inside the cart" image ="/images/subfeature1.png"/>
  </div>

  {/* Card 2 */}
  <div className="border-b-[2px]  lg:border-r-[2px] border-[#C9C9C9] ">
    <AnimationCard heading="Rewards" description="Show loyalty points and rewards to boost customer retention and repeat sales." image ="/images/subfeature2.png"/>
  </div>

  {/* Card 3 */}
  <div className="border-b-[2px] lg:border-r-0 md:border-r-[2px] border-[#C9C9C9]">
    
    <AnimationCard heading="Upsells" description="Encourage repeat purchases and boost loyalty by showing points or rewards inside the Cart." image ="/images/subfeature3.png" />
  </div>

  {/* Card 4 */}
  <div className="  lg:border-r-[2px] border-b-[2px] lg:border-b-0 border-[#C9C9C9] ">
    <AnimationCard heading="Coupon Code" description="smoother & faster checkout experience as coupons can be applied through the Cart" image ="/images/subfeature4.png"/>
  </div>

  {/* Card 5 */}
  <div className=" md:border-r-[2px] lg:border-b-0 border-b-[2px] md:border-b-0   border-[#C9C9C9]">
    <AnimationCard heading="Sticky Cart" description="A floating, always-visible cart button that's always just a tap away for your shoppers." image ="/images/subfeature5.png"/>
  </div>

  {/* Card 6 */}
  <div className="border-r-0  border-[#C9C9C9] ">
    <AnimationCard heading="Abandoned Cart Emails" description="Convert window shoppers into buyers by Auto-sending tailored emails to recover lost carts." image ="/images/subfeature6.png" />
  </div>
</div>


  </div>

  <HorizantalLine color="border-[#C9C9C9]" />
<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-14 pt-8'>
  </div>
<HorizantalLine color="border-[#C9C9C9]" />

<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-10 pt-6'>
  <div className='flex justify-between items-center gap-5 px-5'>
<HeadingSection heading1="What Makes Us Different?" heading2=" See for Yourself " description="Speed Cart combines powerful customization, upsells, and recovery tools in one lightweight, high-performance Shopify app" align="text-left" />

  </div>
   <HorizantalLine color="border-[#C9C9C9]" />
  <ComparisonTable />
  </div>
<HorizantalLine color="border-[#C9C9C9]" />
<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-14 pt-8'>
  </div>
<HorizantalLine color="border-[#C9C9C9]" />

<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-10 pt-6'>
  <HeadingSection heading1="Merchants " heading2="Who Trust Us" description="Shopify merchants love Speed Cart because it boosts conversions, recovers lost sales, and speeds up checkouts" align="text-center mx-auto" />
  <HorizantalLine color="border-[#C9C9C9]" />
  <div className='py-8'> 
  <SlideCarousel />
  </div>
  </div>

  <HorizantalLine color="border-[#C9C9C9]" />
<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-14 pt-8'>
  </div>
<HorizantalLine color="border-[#C9C9C9]" />

<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-10 pt-6'>
  <HeadingSection heading1="Insights to Accelerate  " heading2="Your Growth" description="Explore proven tactics, tips, and trends to increase conversions, boost cart value, and recover abandoned sales." align="text-center mx-auto" />
  <HorizantalLine color="border-[#C9C9C9]" />
  <div className='grid md:grid-cols-3 grid-cols-1 gap-10 p-5'>
    <BlogCard />
    <BlogCard />
    <BlogCard />
  </div>
  <div className='w-40 mx-auto pb-7'>
    <HoverButton text="Read More Blogs" width="w-40" border= "border-2" />
  </div>
  </div>
   <HorizantalLine color="border-[#C9C9C9]" />
<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-14 pt-8'>
  </div>
<HorizantalLine color="border-[#C9C9C9]" />

<div className='border-r-[2px] border-l-[2px] border-[#C9C9C9] max-w-[1200px] mx-auto w-[calc(100%-30px)] lg:w-[calc(100%-40px)] lg:pt-10 pt-6'>
  <div className='flex justify-between items-center p-4 md:flex-row flex-col'>
<HeadingSection heading1="All You Need to Know  " heading2="About Speed Cart" description="Got qustions? Here’s everythings you need to know about installing, using and growing with Speed Cart." align="text-left" />
  <OrangeHover text="Get Started" width="w-27 mx-0" />

  </div>
  </div>

    </>
  )
}
