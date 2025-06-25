import React from 'react'
import SmallHeroSection from '../Components/sections/small-hero-section'
import ContentWrapper from '../Components/content-wrapper'
import FaqAccordion from '../Components/sections/FaqAccordin'
import EmptyBox from '../Components/lines/empty-box';
import HeadingFlex from '../Components/headings/heading-flex';
import HorizantalLine from '../Components/lines/horizantal-line';
import HeadingSection from '../Components/headings/heading-center';
import Container from '../Components/contact/container';
import SocialIcon from '../Components/buttons/social-icon';
import ContactInput from '../Components/contact/input';
import OrangeHover from '../Components/buttons/OrangeHover';

export default function Contact() {
    const GrayLine = () => <HorizantalLine color="border-gray-200" />;
    
    const blogQuestions = [
  { question: "Is Speed Cart easy to install?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Can I customize the cart design?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!"},
  { question: "How do abandoned cart emails work?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "Can I add upsell products to the cart?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  { question: "What's a sticky cart button?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
 
];
  return (
    <>
        <SmallHeroSection text="Contact Us"/>
        <ContentWrapper>
       <div className='grid lg:grid-cols-2 grid-cols-1'>
<div className='lg:border-r-[1px] border-r-0 border-gray-200'>
 <div className={`text-left  lg:p-[26px] p-[16px]`}>
        <h1 className='md:text-[48px] text-[28px] leading-[120%] font-[600] text-black mb-4 capitalize'>
       Have A <span className='text-sec-orange'>Question?</span>
        </h1>
            <p className='text-gray-500 font-[400] md:text-[16px] text-[14px]'>Our team is here to help with anything—from feature questions to technical support.</p>
    </div>
 <GrayLine />

<Container  icon="/images/email.svg" title="Email" contact="info@daisydiffusion.com"/>
<GrayLine />

<Container  icon="/images/phone.svg" title="Phone" contact="+1(551) 333-7997"/>
<GrayLine />

<Container  icon="/images/location.svg" title="Location" contact="125, Palk Road, Wellingborough, ENG"/>
<GrayLine />
 <div className=' lg:p-[26px] p-[16px] lg:border-b-0 border-b-[1px] border-gray-200'>
    <p className='lg:text-[16px] text-[14px] font-[400] text-gray-500'>Follow us on</p>
 <div className='flex gap-[16px] pt-[16px]'>
        <SocialIcon  icon="/images/facebook-black.svg" hoverIcon="/images/facebook.svg"/>
        <SocialIcon  icon="/images/linkedin-black.svg" hoverIcon="/images/linkedin.svg"/>
        <SocialIcon  icon="/images/instagram-black.svg" hoverIcon="/images/instagram.svg"/>
        <SocialIcon  icon="/images/twitter-black.svg" hoverIcon="/images/twitter.svg"/>
        <SocialIcon  icon="/images/social icon.svg" hoverIcon="/images/youtube.svg"/>
    </div>
    </div>
</div>
<div className='lg:p-[26px] p-[16px]'>
<div className='bg-gray-100 h-full rounded-[12px] lg:p-[32px] p-[16px] '>
<div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[24px] gap-[16px]'>
<ContactInput title="First Name" placeholder="Enter First Name" />
<ContactInput title="Last Name" placeholder="Enter Last Name" />
<ContactInput title="Email" placeholder="Enter Email" />
<ContactInput title="Phone Number" placeholder="Enter phone number" />
</div>

<div className='flex flex-col gap-[8px] lg:my-[24px] my-[16px]'>
<p className='lg:text-[16px] text-[14px] font-[500] text-gray-600'>Message</p>
<textarea className='py-3 px-4 rounded-xl bg-white text-gray-500 h-[160px] lg:h-[220px]' type='text' placeholder="Leave Your Thoughts" />

    </div>

     <OrangeHover text="Send Inquiries" width="w-39" />
    

</div>
</div>
       </div>
        </ContentWrapper>
<GrayLine />
<EmptyBox></EmptyBox>
<GrayLine />
<ContentWrapper>
  
<HeadingFlex heading1="All You Need to Know  " heading2="About Speed Cart" description="Got qustions? Here’s everythings you need to know about installing, using and growing with Speed Cart." align="text-left" />

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
