import React from 'react'
import Hero_section from '../Components/sections/hero-section'
import ContentWrapper from '../Components/content-wrapper'
import HeadingSection from '../Components/headings/heading-center'
import HorizantalLine from '../Components/lines/horizantal-line';
import FaqAccordion from '../Components/sections/FaqAccordin';
import HeadingFlex from '../Components/headings/heading-flex';
import EmptyBox from '../Components/lines/empty-box';
import StickyCard from '../Components/cards/sticky-card';

export default function AbandonedCart() {
  const GrayLine = () => <HorizantalLine color="border-gray-200" />;

  const cardData = [
    {
      image: "/images/automated.png",
      flexstyle: "lg:flex-row",

      heading: "Automated Abandoned Cart Emails",
      description: "Send automated, personalized emails to remind customers about their unpurchased items and recover lost sales.",
      benefits: [
        "Match your store's branding",
        "Control background, text, and accent colours",
        "Choose from clean, modern templates",
      ],
    },
    {
      image: "/images/small-email.png",
      flexstyle: "lg:flex-row-reverse",


      heading: "Smart Email Sequence Management",
      description: "Easily manage your abandoned cart campaigns with flexible, adjustable email schedules and targeting rules.",
      benefits: [
        "Promote free shipping or discounts",
        "Announce flash sales or holiday deals",
        "Increase awareness without disruption",
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
      <Hero_section image="/images/abandoned-banner.svg" description=" Implement Automation to rearrange shoppers who leave items in their cart with timed, personalized recovery emails" part1="Recover" part2="Lost Sales Using " part3="" part4=" Abandoned Cart" part5="Emails" />

      <ContentWrapper>
        <div className='py-4'></div>

        <HeadingSection heading1="Recover Lost Sales with" heading2=" Smart Abandoned Cart Emails" description="Implement Automation to rearrange shoppers who leave items in their cart with timed, personalized recovery emails." align="text-center mx-auto max-w-[780px]" />

        {cardData.map((card, index) => (
          <React.Fragment key={index}>
            <GrayLine />
            <StickyCard
              image={card.image}
              flexstyle={card.flexstyle}
              heading={card.heading}
              description={card.description}
              benefits={card.benefits}
              title="Recover Lost Sales"
            />

          </React.Fragment>
        ))}

      </ContentWrapper>
      <GrayLine />
      <EmptyBox />
      <GrayLine />

      <ContentWrapper>

        {/* questions section */}
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
