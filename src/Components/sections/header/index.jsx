import React, { useState } from 'react';
import HoverButton from '../../buttons/HoverButton';
import OrangeHover from '../../buttons/OrangeHover';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [rotated, setRotated] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setRotated(!rotated);
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed md:top-[26px] top-4 left-1/2 transform -translate-x-1/2 z-40 bg-white p-[12px] md:p-[16px] rounded-[50px] shadow-lg w-[calc(100%-40px)] max-w-[850px]">
      {/* Outer Flex Container */}
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="shrink-0">
          <img src="/images/header-logo.svg" alt="logo" />
        </div>

        {/* Menu icon for small screen */}
        <img className="lg:hidden cursor-pointer" src="/images/menu-lines.svg" onClick={toggleMobileMenu} alt="menu" />

        {/* Nav Links + Buttons Container */}
        <div className={`lg:flex ${mobileMenuOpen ? 'flex flex-col items-start mt-[6px] left-1/2 transform -translate-x-1/2 w-[calc(100%-40px)] bg-white rounded-xl shadow-xl p-4' : 'hidden'} lg:mt-0 lg:bg-transparent lg:shadow-none lg:rounded-none absolute lg:relative lg:top-auto top-[50px] lg:gap-10`}>
          
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
              <span className={`flex items-center gap-[1px] ${dropdownVisible ? 'text-[#F05A29]' : 'text-[#3F3F3F]'} hover:text-[#F05A29] lg:text-[16px] text-[14px]`}>
                Features
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20" height="20"
                  className={`fill-[#3F3F3F] group-hover:fill-[#F05A29] transition-all duration-300 ${rotated ? 'rotate-0' : 'rotate-180'}`}>
                  <path d="m280-400 200-200 200 200H280Z" />
                </svg>
              </span>

              {/* Dropdown Menu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropdownVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} w-full lg:absolute lg:top-10 lg:left-[-16px] lg:w-[360px] lg:rounded-2xl lg:bg-white lg:p-4 lg:shadow-[0px_4px_20px_0px_rgba(65,65,65,0.15)] lg:border lg:border-[#E8E8E8]`}>
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

            {/* Other links */}
            {['doc', 'about', 'contact', 'blog'].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-[#3F3F3F]'} hover:text-[#F05A29] lg:text-[16px] text-[14px]`
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Buttons Section */}
          <div className="flex gap-2 mt-4 lg:mt-0">
            <HoverButton text="View Demo" background="bg-white" color="text-black" width="w-25"  link="/"/>
            <OrangeHover text="Try Free" width="w-20"  link="/"/>
          </div>
        </div>
      </div>
    </div>
  );
}
