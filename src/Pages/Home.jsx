import React from 'react'

import HorizantalLine from '../Components/lines/horizantal-line'

import HoverButton from '../Components/buttons/HoverButton'
import ContentWrapper from '../Components/content-wrapper'
import FaqAccordion from '../Components/sections/FaqAccordin'
import HeadingFlex from '../Components/headings/heading-flex' 
import EmptyBox from '../Components/lines/empty-box'
import Hero_section from '../Components/sections/hero-section'
import HeadingSection from '../Components/headings/heading-center'
import FeatureCard from '../Components/cards/feature-card'
import AnimationCard from '../Components/cards/animation-card'
import ComparisonTable from '../Components/sections/comarison-table'
import SlideCarousel from '../Components/sections/slides-crousel'
import BlogCard from '../Components/cards/blog-card'
export default function Home() {

const GrayLine = () => <HorizantalLine color="border-gray-200" />;
const blogQuestions = [
  { question: "Is Speed Cart easy to install?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Can I customize the cart design?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!"},
  { question: "How do abandoned cart emails work?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Can I add upsell products to the cart?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "What's a sticky cart button?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Can customers apply discount codes to the cart?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Is Speed Cart mobile-friendly?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Does it support loyalty rewards?", answer:"A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!"},
  { question: "How many abandoned cart emails can I send?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Is customer support available?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
];

  return (
    <>
   
<Hero_section image="/images/home-banner.svg"  description=" Convert and recover your sales with Speed Cart's advanced cart tools, upsells, sticky carts, and recovery emails." part1="Upgrade" part2="Your Cart" part3="Boost" part4="Sales" part5="Today"/>

<ContentWrapper>
  <div className='py-4'></div>
  <HeadingSection heading1="Our core" heading2="feature" description="Simplify cart management, boost sales, and recover lost revenue with our easy, powerful features." align="text-center mx-auto max-w-[700px]" />

   <div className="grid grid-cols-1 md:grid-cols-2">

    <div className='lg:p-[26px] p-[16px]   md:border-r-[1px] border-t-[1px] border-gray-200'>
<FeatureCard heading="Card Editor" description="Customize cart layouts, colors, promotions, product suggestions, trust badges, and more." background= "bg-[#E8F1FB]" image="/images/feature1.png" link="/cart-editor"/>
</div>

    <div className='lg:p-[26px] p-[16px]  border-t-[1px]  border-gray-200'>
<FeatureCard heading="Sticky Cart" description="Keep a floating cart button always visible for faster, friction-free checkouts from any page." background= "bg-[#FCF9E8]" image="/images/feature2.png" link="/sticky-cart"/>
</div>

    <div className='lg:p-[26px] p-[16px]  border-t-[1px] md:border-r-[1px]  border-gray-200'>
<FeatureCard heading="Abandoned Cart" description="Automatically email shoppers who leave items behind and bring them back to complete their orders." background= "bg-[#FBECEC]" image="/images/feature3.png" link="/abandoned-cart"/>
</div>

    <div className='lg:p-[26px] p-[16px]  border-t-[1px] border-gray-200'>
<FeatureCard heading="Cart Templates" description="Customize cart layouts, colors, promotions, product suggestions, trust badges, and more." background= "bg-[#EDEBFF]" image="/images/feature4.png" link="/"/>
</div>

  </div>
</ContentWrapper>
<GrayLine />
<EmptyBox></EmptyBox>
<GrayLine />
<ContentWrapper>
 
<HeadingFlex heading1="Speed cart is built to "  heading2="convert to a conversion." description="Powerful, scalable, and designed to convert — trusted by stores worldwide to boost sales and streamline checkout." align="text-left max-w-[620px]" />
 

 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-[1px]  border-gray-200">
  {/* Card 1 */}
  <div className="border-b-[1px] md:border-r-[1px] border-gray-200 relative group lg:p-[26px] p-[16px] bg-white overflow-hidden cursor-pointer">
    <AnimationCard heading="Announcement" description="Boost awareness and engagement by displaying promotional messages inside the cart" image ="/images/subfeature1.png"/>
  </div>

  {/* Card 2 */}
  <div className="border-b-[1px]  lg:border-r-[1px] border-gray-200 relative group lg:p-[26px] p-[16px]  bg-white overflow-hidden cursor-pointer">
    <AnimationCard heading="Rewards" description="Show loyalty points and rewards to boost customer retention and repeat sales." image ="/images/subfeature2.png"/>
  </div>

  {/* Card 3 */}
  <div className="border-b-[1px] lg:border-r-0 md:border-r-[1px] border-gray-200 relative group lg:p-[26px] p-[16px]  bg-white overflow-hidden cursor-pointer">
    
    <AnimationCard heading="Upsells" description="Encourage repeat purchases and boost loyalty by showing points or rewards inside the Cart." image ="/images/subfeature3.png" />
  </div>

  {/* Card 4 */}
  <div className="  lg:border-r-[1px] border-b-[1px] lg:border-b-0 border-gray-200 relative group lg:p-[26px] p-[16px]  bg-white overflow-hidden cursor-pointer ">
    <AnimationCard heading="Coupon Code" description="smoother & faster checkout experience as coupons can be applied through the Cart" image ="/images/subfeature4.png"/>
  </div>

  {/* Card 5 */}
  <div className=" md:border-r-[1px] lg:border-b-0 border-b-[1px] md:border-b-0   border-gray-200 relative group lg:p-[26px] p-[16px]  bg-white overflow-hidden cursor-pointer">
    <AnimationCard heading="Sticky Cart" description="A floating, always-visible cart button that's always just a tap away for your shoppers." image ="/images/subfeature5.png"/>
  </div>

  {/* Card 6 */}
  <div className="border-r-0  border-gray-200  relative group lg:p-[26px] p-[16px]  bg-white overflow-hidden cursor-pointer">
    <AnimationCard heading="Abandoned Cart Emails" description="Convert window shoppers into buyers by Auto-sending tailored emails to recover lost carts." image ="/images/subfeature6.png" />
  </div>
</div>


</ContentWrapper>

<GrayLine />
<EmptyBox></EmptyBox>
<GrayLine />
<ContentWrapper>
  <div className='flex justify-between items-center gap-5'>
<HeadingSection heading1="What Makes Us Different?" heading2=" See for Yourself " description="Speed Cart combines powerful customization, upsells, and recovery tools in one lightweight, high-performance Shopify app" align="text-left max-w-[700px]" />

  </div>
<GrayLine />
  <ComparisonTable />
 </ContentWrapper>
<GrayLine />
<EmptyBox></EmptyBox>
<GrayLine />
<ContentWrapper>
  <HeadingSection heading1="Merchants " heading2="Who Trust Us" description="Shopify merchants love Speed Cart because it boosts conversions, recovers lost sales, and speeds up checkouts" align="text-center mx-auto max-w-[700px]" />
<GrayLine />
  <div className='lg:py-[28px] lg:px-[26px] px-[16px] py-6'> 
  <SlideCarousel />
  </div>
 </ContentWrapper>

<GrayLine />
<EmptyBox></EmptyBox>
<GrayLine />
<ContentWrapper>
  <HeadingSection heading1="Insights to Accelerate  " heading2="Your Growth" description="Explore proven tactics, tips, and trends to increase conversions, boost cart value, and recover abandoned sales." align="text-center mx-auto max-w-[650px]" />
<GrayLine />
  <div className='grid md:grid-cols-3 grid-cols-1 lg:gap-[26px] lg:p-[26px] gap-[16px] p-[16px] '>
    <BlogCard />
    <BlogCard />
    <BlogCard />
  </div>
  <div className='w-40 mx-auto lg:pb-7 pb-5'>
    <HoverButton text="Read More Blogs" width="w-40" border= "border-2" />
  </div>
  </ContentWrapper>
<GrayLine />
<EmptyBox></EmptyBox>
<GrayLine />
<ContentWrapper>
  
<HeadingFlex heading1="All You Need to Know  " heading2="About Speed Cart" description="Got qustions? Here’s everythings you need to know about installing, using and growing with Speed Cart." align="text-left max-w-[550px]" />

  <GrayLine/>
      <FaqAccordion questions={blogQuestions} />
  </ContentWrapper>
<GrayLine />
<EmptyBox></EmptyBox>
<GrayLine />
<EmptyBox></EmptyBox>


    </>
  )
}
