import React from 'react'
import SmallHeroSection from '../Components/sections/small-hero-section'
import OrangeHover from '../Components/buttons/OrangeHover'
import ContentWrapper from '../Components/content-wrapper'
import EmptyBox from '../Components/lines/empty-box'
import HorizantalLine from '../Components/lines/horizantal-line'
import HeadingSection from '../Components/headings/heading-center'
import AboutCard from '../Components/cards/about-card'

export default function About() {
  const GrayLine = () => <HorizantalLine color="border-gray-200" />;

  return (
    <>
      <SmallHeroSection text="About Us" />
      <ContentWrapper>
        <div className='py-4'></div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[26px] gap-[16px] p-[16px] lg:p-[26px]'>
          <div className='lg:py-[26px] py-[16px] flex flex-col gap-[16px] lg:gap-[26px]'>

            <div className='p-[12px] lg:p-[24px] w-fit flex gap-[12px] items-center rounded-xl bg-[#D3F8F1]'>
              <img className='lg:w-[48px] w-[24px] lg:h-[48px] h-[24px]' src="/images/shopify.svg" alt="" />
              <p className='font-[400] lg:text-[20px] text-[16px] text-[#055345]'>Built-For Shopify</p>
            </div>
            <div className='p-[12px] lg:p-[24px] w-fit flex gap-[12px] items-center rounded-xl bg-[#F8ECD3] text-[#825800] ml-auto'>
              <p className='font-[600] lg:text-[24px] text-[20px]'>1K+</p>
              <p className='font-[400] lg:text-[20px] text-[16px]'>active users</p>
            </div>

            <div className='p-[12px] lg:p-[24px] w-fit flex gap-[12px] items-center rounded-xl bg-[#B5DAF9] text-[#0E4979]'>
              <p className='font-[600] lg:text-[24px] text-[20px]'>Built-in </p>
              <p className='font-[400] lg:text-[20px] text-[16px]'>Upsell Module</p>

            </div>
            <div className='p-[12px] lg:p-[24px] w-fit flex gap-[12px] items-center rounded-xl bg-[#F2D3F8] ml-auto'>
              <img className='lg:w-[48px] w-[24px] lg:h-[48px] h-[24px]' src="/images/dropdown3.svg" alt="" />
              <p className='font-[400] lg:text-[20px] text-[16px] text-[#6B087E]'>Abandoned Carts</p>

            </div>
          </div>
          <div className='flex flex-col gap-[16px]'>
            <h1 className='lg:text-[48px] text-[28px] leading-[120%] font-[600] text-black mb-4 capitalize'>
              Our Story,  <span className='text-sec-orange'>Your Sales Boost</span>
            </h1>
            <p className='text-gray-700 font-[400] md:text-[16px] text-[14px]'>At Speed Cart, we're passionate about making Shopify stores quicker, more innovative, and more lucrative. Constructed by the team at DaisyDiffusion.com, we concentrate on establishing high-performance Shopify apps that fix real problems for modern merchants.
            </p>
            <p className='text-gray-700 font-[400] md:text-[16px] text-[14px]'>From cart modification to checkout optimization and sales recovery, Speed Cart is created to give you overall control over your shop's cart experience. It helps you quickly enhance conversions, boost order value, and recover lost sales.
              <br></br>
              <br></br>
              We're not new to this. Our Shopify app household also includes Assurify (product warranty and protection strategies). ChargeUp helps Shopify merchants boost order value by adding customizable extra fees and service charges at checkout, which are relied on by numerous Shopify merchants worldwide.

            </p>
          </div>
        </div>
      </ContentWrapper>

      <GrayLine />
      <EmptyBox></EmptyBox>
      <GrayLine />
      <ContentWrapper>
        <HeadingSection heading1="Why We Build " heading2="Shopify Apps" description="Merchants deserve practical, user-friendly tools developed with growth in mind. Our objective is to simplify e-commerce management and help brands open new earnings chances without technical headaches. 
" align="text-center mx-auto max-w-[700px]" />
        <GrayLine />
        <div className='grid lg:grid-cols-8 grid-cols-1'>
          {/* Left Column */}
          <div className='lg:p-[26px] p-[16px] lg:col-span-5 col-span-1 lg:border-r-[1px] lg:border-b-0 border-b-[1px] border-gray-200 flex justify-center items-center'>
            <img className='rounded-xl w-full' src="/images/intro-video.svg" alt="" />
          </div>

          {/* Right Column */}
          <div className='flex flex-col lg:col-span-3 col-span-1 lg:border-b-0 border-b-[1px] border-gray-200 min-h-0'>

            {/* Top Half */}
            <div className='flex-1 border-b-[1px] border-gray-200 lg:p-[26px] p-[16px]'>
              <div className="bg-[url('/images/footer-bg.svg')] bg-cover bg-center w-full h-full rounded-xl flex flex-col lg:gap-2 gap-[24px] p-[16px]">
                <p className='font-[600] lg:text-[24px] text-[20px] text-white'>
                  Customize Cart Without Code
                </p>
                <p className='text-gray-100 lg:text-[16px] text-[14px] font-[400] mt-auto'>
                  We’re launching Speed Cart. Our mission is to integrate powerful cart optimization and upsell tools in a single app.
                </p>
              </div>
            </div>

            {/* Bottom Half */}
            <div className='flex-1  lg:p-[26px] p-[16px]'>
              <div className='w-full h-full rounded-xl flex flex-col lg:gap-2 gap-[24px] justify-between p-[16px] bg-[#F6F6F6]'>
                <p className='text-gray-900 lg:text-[16px] text-[14px] font-[400]'>
                  <span className='font-[600]'> Were here for you.</span> Our support team is available 24/7 tro assist with any questions or issues
                </p>
                <div className='flex'>

                  <OrangeHover text="Get Started" width="w-27 mx-0" link="/" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </ContentWrapper>
      <GrayLine />
      <EmptyBox></EmptyBox>
      <GrayLine />
      <ContentWrapper>
        <HeadingSection heading1="Sign up with" heading2="the Community" description="Speed Cart combines powerful customization, upsells, and recovery tools in one lightweight, high-performance Shopify app" align="text-left max-w-[700px]" />
        <GrayLine />
        <div className='flex lg:flex-row flex-col lg:gap-[26px] gap-[16px] lg:px-[26px] px-[16px] lg:py-[28px] p-[16px]'>
          <div className='lg:w-[60%] w-full lg:py-[26px] py-0'>
            <p className='lg:text-[40px] text-[24px] leading-[120%] font-[500] text-black'>A Community Built for Shopify Success</p>
            <p className='text-gray-700 font-[400] md:text-[16px] text-[14px] lg:py-[24px] py-4'>
              Countless Shopify store owners rely on apps developed by DaisyDiffusion to grow smarter, sell better, and serve faster. From customizing checkout experiences with Speed Cart to offering product protection with  {' '}
              <a
                href="https://apps.shopify.com/assurify"
                target="_blank"
                rel="noopener noreferrer"
                className=" font-[500] underline "
              >
                Assurify Shipping Protection
              </a> and increasing client lifetime value through {' '}
              <a
                href="https://apps.shopify.com/chargeup-extra-fee"
                target="_blank"
                rel="noopener noreferrer"
                className=" font-[500] underline "
              >
                Chargeup Extra Fee
              </a>, we build tools designed to boost every stage of your e-commerce journey. Our mission is to assist merchants with easy-to-use, conversion-focused solutions that deliver real, measurable results. We’re more than just an app provider — we’re a community. Join our growing network of Shopify entrepreneurs, marketers, and developers on {' '}
              <a
                href="https://discord.com/invite/pCAjH2Vu"
                target="_blank"
                rel="noopener noreferrer"
                className=" font-[500] underline "
              >
                Discord  </a>  to swap insights, get support, share feedback, and stay ahead of the curve together.
            </p>
            <p className='lg:text-[20px] text-[16px] font-[500] text-gray-900'>
              Check out more at {' '}
              <a
                href="https://DaisyDiffusion.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[16px] font-[400] underline "
              >
                DaisyDiffusion.com.
              </a>

            </p>

          </div>
          <div className='lg:w-[40%] w-full flex flex-col lg:gap-[32px] gap-4'>
            <AboutCard image="/images/community1.svg" title="Sped Cart App" description="At Speed Cart, we're passionate about making Shopify stores quicker" />
            <AboutCard image="/images/community2.svg" title="Assurify Shipping Protection" description="At Speed Cart, we're passionate about making Shopify stores quicker" />
            <AboutCard image="/images/community3.svg" title="Chargeup Extra Fee" description="At Speed Cart, we're passionate about making Shopify stores quicker" />
          </div>
        </div>
      </ContentWrapper>
      <GrayLine />
      <EmptyBox></EmptyBox>
      <GrayLine />
      <EmptyBox></EmptyBox>
    </>
  )
}
