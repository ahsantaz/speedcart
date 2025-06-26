import React, { useState } from 'react';

export default function SocialIcon({ icon, hoverIcon, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
    <div
      className='rounded-[10px] hover:bg-sec-orange duration-300 cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverIcon : icon} alt="social icon" />
    </div>
    </a>
  );
}
