import React, { useEffect, useState } from 'react';
import HoverButton from '../../buttons/HoverButton';
import OrangeHover from '../../buttons/OrangeHover';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [rotated, setRotated] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const location = useLocation();

useEffect(() => {
  setDropdownVisible(false);
  setRotated(false);
  setMobileMenuOpen(false);
}, [location]);
  const toggleDropdown = () => {
    setRotated(!rotated);
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed md:top-[26px] top-4 left-1/2 transform -translate-x-1/2 z-40 bg-white p-[16px]  rounded-[50px] shadow-[0px_2px_20px_0px_rgba(65,65,65,0.10)] border-[1px] border-[#E8E8E8] w-[calc(100%-64px)] max-w-[850px]">
      {/* Outer Flex Container */}
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/">
        <div className="shrink-0">
          <img className='h-[28px] lg:h-[32px]'  src="/images/header-logo.svg" alt="logo" />
        </div>
</Link>
        {/* Menu icon for small screen */}
        <img className="lg:hidden cursor-pointer" src="/images/menu-lines.svg" onClick={toggleMobileMenu} alt="menu" />

        {/* Nav Links + Buttons Container */}
        <div className={`lg:flex ${mobileMenuOpen ? 'flex flex-col items-start mt-[6px] left-1/2 transform -translate-x-1/2 w-[calc(100%-54px)] bg-white rounded-bl-xl rounded-br-xl shadow-xl p-4' : 'hidden'} lg:mt-0 lg:bg-transparent lg:shadow-none lg:rounded-none absolute lg:relative lg:top-auto top-[52px] lg:gap-10`}>

          {/* Nav Links */}
          <ul className="lg:flex lg:space-x-4 items-start lg:items-center space-y-3 lg:space-y-0">
            <li>
              <NavLink

                to="/"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-[#3F3F3F]'} hover:text-[#F05A29] lg:text-[16px] text-[14px]`
                }
              >
                Home
              </NavLink>
            </li>

            {/* Features with dropdown */}
            <li onClick={toggleDropdown} className="relative group cursor-pointer">
              <span
  className={`flex items-center justify-between w-full ${dropdownVisible ? 'text-[#F05A29]' : 'text-[#3F3F3F]'} hover:text-[#F05A29] lg:text-[16px] text-[14px]`}
>
  Features

  {/* SVG for large screens only (rotates) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="20"
    height="20"
    className={`hidden lg:block fill-[#3F3F3F] group-hover:fill-[#F05A29] transition-all duration-300 ${rotated ? 'rotate-0' : 'rotate-180'}`}
  >
    <path d="m280-400 200-200 200 200H280Z" />
  </svg>

  {/* Static arrow image for mobile only (no rotation) */}
  <img
    src="/images/arrow-right.svg"
    alt="arrow"
    className="block lg:hidden w-[16px] h-[16px]"
  />
</span>



              {/* Dropdown Menu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropdownVisible ? ' opacity-100' : ' opacity-0'} w-full lg:absolute lg:top-10 lg:left-[-16px] lg:w-[388px] lg:rounded-2xl lg:bg-white lg:p-4 lg:shadow-[0px_4px_20px_0px_rgba(65,65,65,0.15)] lg:border lg:border-[#E8E8E8]`}>
                <ul className="lg:space-y-4 space-y-3 px-1 pt-3 lg:px-4 lg:py-4">
                  {[
                    {
                      path: "/cart-editor",
                      icon: "/images/dropdown1.svg",
                      title: "Cart Editor",
                      desc: "Customize and control your customers' cart effortlessly.",
                    },
                    {
                      path: "/sticky-cart",
                      icon: "/images/dropdown2.svg",
                      title: "Sticky Cart",
                      desc: "Keep carts visible and boost conversions seamlessly.",
                    },
                    {
                      path: "/abandoned-cart",
                      icon: "/images/dropdown3.svg",
                      title: "Abandoned Cart Recovery",
                      desc: "Recover lost sales with smart cart reminders.",
                    },
                    {
                      path: "/",
                      icon: "/images/dropdown4.svg",
                      title: "Cart Templates",
                      desc: "Recover lost sales with smart cart reminders.",
                    },
                  ].map(({ path, icon, title, desc }, idx) => (
                    <li key={idx}>
                      <Link to={path}>
                        <div className="flex items-center gap-2">
                          <img className="w-4 h-4 lg:w-[22px] lg:h-[22px]" src={icon} alt="" />
                          <p className="font-semibold text-black text-[12px] lg:text-[16px] hover:text-sec-orange">{title}</p>
                        </div>
                        <p className="text-[#3F3F3F] text-[12px] lg:text-sm font-[400] leading-snug pt-1">{desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

         <li>
    <a
      href="https://documentation.speedcart.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-[#3F3F3F] hover:text-[#F05A29] lg:text-[16px] text-[14px]"
    >
      Doc
    </a>
  </li>
         <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-[#3F3F3F]'} hover:text-[#F05A29] lg:text-[16px] text-[14px]`
                }
              >
                About
              </NavLink>
            </li>
         <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-[#3F3F3F]'} hover:text-[#F05A29] lg:text-[16px] text-[14px]`
                }
              >
                Contact
              </NavLink>
            </li>
             <li>
    <a
      href="https://blog.speedcart.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-[#3F3F3F] hover:text-[#F05A29] lg:text-[16px] text-[14px]"
    >
      Blog
    </a>
  </li>
          </ul>

          {/* Buttons Section */}
        <div className="flex lg:gap-2 gap-0 mt-4 lg:mt-0">
            <HoverButton text="View Demo" background="bg-white" color="text-black" width="w-25" link="/" />
            <OrangeHover text="Try Free" width="w-20" link="/" />
          </div>


        </div>
      </div>
    </div>
  );
}
