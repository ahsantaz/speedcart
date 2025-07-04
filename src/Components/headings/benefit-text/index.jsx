import React from 'react'

export default function Benefit({ text }) {
  return (
    <div className='flex gap-3 items-center'>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
          <path d="M26 14.5C26 7.87258 20.6274 2.5 14 2.5C7.37258 2.5 2 7.87258 2 14.5C2 21.1274 7.37258 26.5 14 26.5C20.6274 26.5 26 21.1274 26 14.5Z" fill="url(#paint0_linear_2253_1592)" />
          <path d="M12.5388 16.4214L13.642 14.8068C14.7575 13.1705 15.8734 11.5382 16.9897 9.91C17.3211 9.42864 17.7629 9.36455 18.2416 9.68637C18.4202 9.80773 18.6016 9.92227 18.7775 10.0464C19.2166 10.3573 19.3066 10.8127 19.0025 11.2586C17.8106 13.0095 16.6161 14.7591 15.4188 16.5073C14.8361 17.3573 14.257 18.2077 13.6816 19.0586C13.3434 19.5605 12.9056 19.6573 12.4079 19.3068C11.3416 18.5568 10.2811 17.7982 9.22656 17.0309C8.75338 16.6886 8.69747 16.2468 9.03838 15.7723C9.17474 15.5868 9.30156 15.3986 9.43928 15.2159C9.72292 14.8423 10.1497 14.7482 10.5438 15.0073C11.0034 15.31 11.4452 15.6414 11.8952 15.9618L12.5388 16.4214Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_2253_1592" x1="5.51409" y1="6.01409" x2="22.4859" y2="22.9859" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDC80E" />
              <stop offset="1" stopColor="#EB513B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className='text-gray-900 font-[400] lg:text-[20px] text-[16px]'>{text}</p>
    </div>
  )
}
