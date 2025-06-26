import React from 'react'

export default function AboutCard({image, title, description}) {
  return (
    <div className="lg:p-[20px] p-[12px] lg:gap-4 gap-3 rounded-xl flex items-center bg-[#F6F6F6]">
  <div className="shrink-0 lg:h-[64px] lg:w-[64px] w-[32px] h-[32px]">
    <img
      className="lg:h-[64px] lg:w-[64px] w-[32px] h-[32px] object-contain"
      src={image}
      alt=""
    />
  </div>
  <div className="flex-1">
    <p className="font-[500] lg:text-[20px] text-[16px]">{title}</p>
    <p className="font-[400] lg:text-[16px] text-gray-800 text-[14px] pt-2">
      {description}
    </p>
  </div>
</div>

  )
}
