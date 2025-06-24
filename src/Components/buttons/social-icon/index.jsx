import React from 'react'

export default function SocialIcon({icon}) {
  return (
    <div className=' rounded-[10px] hover:bg-sec-orange duration-500 cursor-pointer'>
        <img src={icon} alt="" />
    </div>
  )
}
