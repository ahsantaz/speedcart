import React, { useState } from 'react';

export default function SocialIcon({ icon, hoverIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='rounded-[10px] hover:bg-sec-orange duration-500 cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverIcon : icon} alt="social icon" />
    </div>
  );
}
