import React, { useState } from 'react';
import HoverButton from '../buttons/HoverButton';
import OrangeHover from '../buttons/OrangeHover';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [rotated, setRotated] = useState(false);

  return (
    <>
      <div className='bg-white p-[16px] rounded-[50px] max-w-[850px] mx-auto flex justify-between items-center mb-7 z-40'>

        <div className='cursor-pointer'>
          <img src="/images/header-logo.svg" alt="logo" />
        </div>

        <div>
          <ul className="flex space-x-6 items-center">
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

            <li onClick={() => setRotated(!rotated)} className="group cursor-pointer">
              <span className="cursor-pointer text-gray-500 group-hover:text-[#F05A29] flex flex-row items-center gap-1">
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
        </div>

        <div className='flex gap-1'>
          <HoverButton text="View Demo" background="bg-white" color="text-black" width="w-25" />
          <OrangeHover text="Try Free" width="w-20" />
        </div>

      </div>
    </>
  );
}
