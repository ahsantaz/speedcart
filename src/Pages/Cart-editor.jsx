import React from 'react'
import Hero_section from '../Components/sections/hero-section'
import ContentWrapper from '../Components/content-wrapper'
import HeadingSection from '../Components/headings/heading-center'
import HorizantalLine from '../Components/lines/horizantal-line';
import FaqAccordion from '../Components/sections/FaqAccordin';
import HeadingFlex from '../Components/headings/heading-flex';
import EmptyBox from '../Components/lines/empty-box';
import StickyCard from '../Components/cards/sticky-card';

export default function CartEditor() {
  const GrayLine = () => <HorizantalLine color="border-gray-200" />;
  const cardData = [
    {
      image: "/images/customization.png",
      flexstyle: "lg:flex-row",
      heading: "Design Customization",
      description: "Adjust colors, fonts, button styles, and layouts to create an on-brand, conversion-focused cart.",
      benefits: [
        "Match your store's branding",
        "Control background, text, and accent colours",
        "Choose from clean, modern templates",
      ],
    },
    {
      image: "/images/announcements.png",
      flexstyle: "lg:flex-row-reverse",
      heading: "Announcements & Promos",
      description: "Share special offers or urgent messages inside the cart to capture attention and drive action.",
      benefits: [
        "Promote free shipping or discounts",
        "Announce flash sales or holiday deals",
        "Increase awareness without disruption",
      ],
    },
    {
      image: "/images/discount.png",
      flexstyle: "lg:flex-row",
      heading: "Discount",
      description: "Adjust colors, fonts, button styles, and layouts to create an on-brand, conversion-focused cart.",
      benefits: [
        "Match your store's branding",
        "Reduce cart abandonment",
        "Improve customer experience",
      ],
    },
    {
      image: "/images/upsells.png",
      flexstyle: "lg:flex-row-reverse",
      heading: "Upsells & Cross-Sells",
      description: "Adjust colors, fonts, button styles, and layouts to create an on-brand, conversion-focused cart.",
      benefits: [
        "Match your store's branding",
        "Reduce cart abandonment",
        "Improve customer experience",
      ],
    },
    {
      image: "/images/checkout.png",
      flexstyle: "lg:flex-row",
      heading: "Express Checkout & Trust Badges",
      description: "Adjust colors, fonts, button styles, and layouts to create an on-brand, conversion-focused cart.",
      benefits: [
        "Match your store's branding",
        "Reduce cart abandonment",
        "Improve customer experience",
      ],
    },
    {
      image: "/images/additional.png",
      flexstyle: "lg:flex-row-reverse",
      heading: "Additional Products",
      description: "Adjust colors, fonts, button styles, and layouts to create an on-brand, conversion-focused cart.",
      benefits: [
        "Match your store's branding",
        "Reduce cart abandonment",
        "Improve customer experience",
      ],
    },
  ];


  const blogQuestions = [
    { question: "Is Speed Cart easy to install?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "Can I customize the cart design?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "How do abandoned cart emails work?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "Can I add upsell products to the cart?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "What's a sticky cart button?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "Can customers apply discount codes to the cart?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "Is Speed Cart mobile-friendly?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "Does it support loyalty rewards?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "How many abandoned cart emails can I send?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
    { question: "Is customer support available?", answer: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!" },
  ];

  return (
    <>
      <Hero_section image="/images/feature-banner.svg" description=" Easily edit, rearrange, or remove cart items to match your brand & boost sales" part1="Customize" part2="Every Part of" part3="Your Cart" part4="Seamlessly" part5="" />

      <ContentWrapper>
        <div className='py-4'></div>

        <HeadingSection heading1="Cart Editor Features " heading2="That Boost Sales" description="A fully flexible cart editor with everything you need to optimize conversions and create a seamless customer experience." align="text-center mx-auto max-w-[700px]" />

        {cardData.map((card, index) => (
          <React.Fragment key={index}>
            <GrayLine />
            <StickyCard
              image={card.image}
              flexstyle={card.flexstyle}
              heading={card.heading}
              description={card.description}
              benefits={card.benefits}
              title="Change Cart, Boost Sales"

            />

          </React.Fragment>
        ))}


      </ContentWrapper>

      <GrayLine />
      <EmptyBox />
      <GrayLine />






      {/* questions section */}
      <ContentWrapper>

        <HeadingFlex heading1="All You Need to Know  " heading2="About Speed Cart" description="Got qustions? Here’s everythings you need to know about installing, using and growing with Speed Cart." align="text-left max-w-[550px]" />

        <GrayLine />
        <FaqAccordion questions={blogQuestions} />
      </ContentWrapper>
      <GrayLine />
      <EmptyBox></EmptyBox>
      <GrayLine />
      <EmptyBox></EmptyBox>

    </>
  )
}
