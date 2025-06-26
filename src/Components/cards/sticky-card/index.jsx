import OrangeHover from "../../buttons/OrangeHover";
import Benefit from "../../headings/benefit-text";

export default function StickyCard({ image, heading, description, benefits, flexstyle, title }) {
  return (
    <div className={`flex ${flexstyle} flex-col items-center lg:gap-[26px] gap-[16px] lg:py-8 py-6 lg:px-[26px] px-[16px] min-h-[500px]`}>
      {/* Left image column */}
      <div className='lg:w-1/2 w-full'>
        <img src={image} alt="" />
      </div>

      {/* Right content column */}
      <div className='lg:w-1/2 w-full'>
        <div>
          <div className='flex w-fit items-center rounded-3xl border-[1px] border-[#FACCBD] p-3 gap-3'>
            <img src="/images/orange-cart-icon.svg" alt="" />
            <span className='text-[14px] font-[400] text-gray-900'>{title}</span>
          </div>

          <p className='font-[600] lg:text-[40px] text-[24px] py-3'>{heading}</p>
          <p className='text-gray-700 font-[400] leading-[150%]'>{description}</p>

          <div className='lg:py-[48px] py-[20px] flex flex-col lg:gap-[24px] gap-[12px]'>
            {benefits?.map((item, index) => (
              <Benefit key={index} text={item} />
            ))}
          </div>

          <div className='flex'>
            <OrangeHover text="Get Started" width="w-27" link="/" />
          </div>
        </div>
      </div>
    </div>
  )
}
