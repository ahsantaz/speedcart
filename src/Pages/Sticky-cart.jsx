import React from 'react'
import Hero_section from '../Components/sections/hero-section'
import ContentWrapper from '../Components/content-wrapper'
import HeadingSection from '../Components/headings/heading-center'
import HorizantalLine from '../Components/lines/horizantal-line';
import FaqAccordion from '../Components/sections/FaqAccordin';
import HeadingFlex from '../Components/headings/heading-flex';
import EmptyBox from '../Components/lines/empty-box';
import StickyCard from '../Components/cards/sticky-card';

export default function StickyCart() {
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
    <Hero_section image="/images/sticky-banner.svg"  description=" Make it easy for shoppers to access their cart instantly from any page with a floating, customizable button." part1="Experience" part2="The Power of" part3="Floating" part4="Cart Button" part5=""/>
  
    <ContentWrapper>
              <div className='py-4'></div>

      <HeadingSection heading1="Sticky Cart Features That" heading2=" Drive Faster Checkouts " description="Reduce friction and speed up conversions by keeping the cart always within reach on every page." align="text-center mx-auto max-w-[800px]" />

<GrayLine />

<StickyCard image="/images/sticky-page-img.png"     title="Quick Checkout"
 flexstyle="lg:flex-row" heading="Instant, Customizable Sticky Cart Button" description="Share special offers or urgent messages inside the cart to capture attention and drive action."   benefits={[
    "Promote free shipping or discounts",
    "Announce flash sales or holiday deals",
    "Increase awareness without disruption",
  ]}/>
      </ContentWrapper>

      <GrayLine />
      <EmptyBox />
      <GrayLine />

      <ContentWrapper>
        {/* questions section */}
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
