import React, { useState } from 'react';
import HoverButton from '../buttons/HoverButton';
import OrangeHover from '../buttons/OrangeHover';
import { NavLink } from 'react-router-dom';

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
    <>
      <div className="fixed md:top-7 top-4 left-1/2 transform -translate-x-1/2 z-40 
  bg-white p-[12px] md:p-[16px] rounded-[50px] shadow-lg 
  w-[calc(100%-40px)] max-w-[850px] flex justify-between items-center">
        <div className='cursor-pointer '>
          <img src="/images/header-logo.svg" alt="logo" />
         
        </div>
 <img className='lg:hidden' src="/images/menu-lines.svg" onClick={toggleMobileMenu} alt="" />
         <div className={`lg:flex ${mobileMenuOpen ? 'flex flex-col items-start mt-4 w-[calc(100%-50px)] bg-white rounded-xl shadow-xl p-4' : 'hidden'} lg:mt-0 lg:bg-transparent lg:shadow-none lg:rounded-none absolute lg:relative lg:top-auto top-[50px] lg:gap-7`}> 
          <ul className="lg:flex lg:space-x-6 items-start lg:items-center space-y-3 lg:space-y-0 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-gray-500'} hover:text-[#F05A29]`
                }
              >
                Home
              </NavLink>
            </li>

            <li onClick={toggleDropdown} className="relative group cursor-pointer">
               <span className={`cursor-pointer ${dropdownVisible ? 'text-[#F05A29]' : 'text-gray-500'}  group-hover:text-[#F05A29] flex flex-row items-center gap-1`}>
                Feature
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  width="20"
                  height="20"
                  className={`fill-[#3F3F3F] group-hover:fill-[#F05A29] transition-all duration-300 ${rotated ? 'rotate-0' : 'rotate-180'}`}
                >
                  <path d="m280-400 200-200 200 200H280Z" />
                </svg>
              </span>

              {dropdownVisible && (
                <div className="absolute top-full left-0 mt-2 bg-white w-[350px]  rounded-xl p-4 z-50 shadow-[0px_4px_20px_0px_rgba(65,65,65,0.15)] border-1 border-[#E8E8E8]">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                     <img className='mt-1' src="/images/dropdown1.svg" alt="" />
                      <div>
                        <p className="font-semibold text-black">Cart Editor</p>
                        <p className="text-gray-500 text-sm leading-snug">Customize and control your customers' cart effortlessly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                     <img className='mt-1' src="/images/dropdown2.svg" alt="" />
                      <div>
                        <p className="font-semibold text-black">Sticky Cart</p>
                        <p className="text-gray-500 text-sm leading-snug">Keep carts visible and boost conversions seamlessly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                     <img className='mt-1' src="/images/dropdown3.svg" alt="" />
                      <div>
                        <p className="font-semibold text-black">Abandoned Cart Recovery</p>
                        <p className="text-gray-500 text-sm leading-snug">Recover lost sales with smart cart reminders.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                     <img className='mt-1' src="/images/dropdown4.svg" alt="" />
                      <div>
                        <p className="font-semibold text-black">Cart Templates</p>
                        <p className="text-gray-500 text-sm leading-snug">Recover lost sales with smart cart reminders.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/doc"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-gray-500'} hover:text-[#F05A29]`
                }
              >
                Doc
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-gray-500'} hover:text-[#F05A29]`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-gray-500'} hover:text-[#F05A29]`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? 'text-[#F05A29]' : 'text-gray-500'} hover:text-[#F05A29]`
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        

        <div className='flex gap-1 mt-4 lg:mt-0'>
          <HoverButton text="View Demo" background="bg-white" color="text-black" width="w-25" />
          <OrangeHover text="Try Free" width="w-20" />
        </div>
      </div>
      </div>
    </>
  );
}