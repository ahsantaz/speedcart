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
      <SmallHeroSection text="Privacy Policy" date="Effective Date: May 22, 2025" />
      <ContentWrapper>
        <div className='lg:space-y-6 space-y-3 lg:px-[26px] px-[16px] lg:py-[64px] py-[24px] max-w-[870px]'>
          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>Who We Are</p>
            <p className='lg:text-[16px] text-[14px] font-[400] text-gray-700'>At <span className='font-[600] text-gray-900'>Speed Cart</span>, operated by <span className='font-[600] text-gray-900'>DaisyDiffusion</span> , we are committed to protecting your privacy and safeguarding your information. This Privacy Policy outlines how we collect, use, and manage your data when you use our website and Shopify app.</p>
          </div>
          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>Information We Collect</p>
            <p className="lg:text-[16px] text-[14px] font-[400] text-gray-700">
              When you use <span className='font-[600] text-gray-900'>Speed Cart</span>, we collect the following types of information:
              <ul className="list-disc pl-6 mt-2">
                <li>Store Owner Information: Name and email address</li>
                <li>Storefront Information: Store URL</li>
                <li>Cart Data: Cart contents, timestamps, and customer emails for abandoned cart recovery</li>
                <li>Order Data: Details associated with placed orders (if applicable)</li>
                <li>Customer Personal Data: Names, emails, and phone numbers when captured via the app</li>
                <li>App Activity Data: Logs, preferences, and usage patterns to improve app experience</li>
              </ul>
              We collect only the data necessary to deliver and enhance Speed Cart services.
            </p>


          </div>
          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>How We Use Your Information</p>
            <p className="lg:text-[16px] text-[14px] font-[400] text-gray-700">
              We use collected data to:
              <ul className="list-disc pl-6 mt-2">
                <li>Operate, maintain, and improve Speed Cart</li>
                <li>Enable abandoned cart recovery and cart customization features</li>
                <li>Provide customer support and technical assistance</li>
                <li>Send updates, feature announcements, and service notifications</li>
                <li>Monitor and secure app performance and reliability</li>
              </ul>
            </p>

          </div>
          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>Data Sharing & Disclosure</p>
            <p className="lg:text-[16px] text-[14px] font-[400] text-gray-700">
              We <span className='font-[600] text-gray-900'>do not sell or rent your personal information</span> to third parties.
              <br />
              Information may only be shared:
              <ul className="list-disc pl-6 mt-2">
                <li>With trusted third-party services needed to operate the app (e.g., Shopify API services)</li>
                <li>If required by law, legal process, or government request</li>
              </ul>
              We ensure all shared data remains protected and is used solely for its intended operational purpose.
            </p>


          </div>

          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>Data Retention</p>
            <p className='lg:text-[16px] text-[14px] font-[400] text-gray-700'>We retain your store-related and customer data as long as you actively use <span className='font-[600] text-gray-900'>Speed Cart</span>. Data is securely deleted within <span className='font-[600] text-gray-900'>30 days of app uninstallation.</span> </p>
          </div>

          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>Cookies & Tracking</p>
            <p className='lg:text-[16px] text-[14px] font-[400] text-gray-700'> <span className='font-[600] text-gray-900'>Speed Cart</span> uses essential cookies and session-based tracking to ensure smooth app functionality. No personal or sensitive customer data is tracked for advertising or analytics purposes.</p>
          </div>
          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>Your Rights Under CCPA</p>
            <p className="lg:text-[16px] text-[14px] font-[400] text-gray-700">
              If you are a California resident, you have the right to:
              <ul className="list-disc pl-6 mt-2">
                <li> <span className='font-[600] text-gray-900'>Access</span> the personal data we collect about you</li>
                <li><span className='font-[600] text-gray-900'>Request deletion</span> of your data</li>
                <li><span className='font-[600] text-gray-900'>Opt-out of data selling</span> (although we do not sell personal data)</li>
              </ul>

              To exercise these rights, contact us at <span className="font-semibold text-gray-900">info@daisydiffusion.com</span>.
            </p>
          </div>
          <div>
            <p className='lg:text-[24px] text-[20px] font-[600] pb-2'>Changes to This Privacy Policy</p>
            <p className='lg:text-[16px] text-[14px] font-[400] text-gray-700'> This Privacy Policy may change occasionally. Any changes will be posted on this page, and we encourage you to review it periodically.</p>
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
