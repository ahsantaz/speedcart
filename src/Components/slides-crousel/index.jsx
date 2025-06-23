import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CustomCarousel() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const cards =  
  [
    { client: "Mia", text: "Saw a sales boost on day one. Speed Cart made it easy to customize and launch without any developer help!", work :"Store Owner" },
    { client: "Raj", text: "A must-have app for any Shopify merchant looking to convert more and recover carts automatically—super effective!", work :"E-commerce Consultant" },
    { client: "Clara", text: "Loved the clean UI and smooth setup. It took minutes to release a totally custom cart that matched my brand.", work :"Fashion Brand Founder" },
    { client: "Mia", text: "Saw a sales boost on day one. Speed Cart made it easy to customize and launch without any developer help!", work :"Store Owner" },
    { client: "Mia", text: "Saw a sales boost on day one. Speed Cart made it easy to customize and launch without any developer help!", work :"Store Owner" },
    { client: "Mia", text: "Saw a sales boost on day one. Speed Cart made it easy to customize and launch without any developer help!", work :"Store Owner" },
   
];

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        onSwiper={onSwiperInit}
        onSlideChange={handleSlideChange}
         breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
      >
         {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#F6F6F6]  rounded-xl p-6">
            <p className='text-gray-500 font-[400]'>{card.text}</p>
            <h4 className='text-gray-900 font-[600]'>{card.client}</h4>
            <p className='text-gray-500 text-[14px] font-[400]'>{card.work}</p>
            </div>
          </SwiperSlide>
        ))}
       
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="flex justify-center mt-6 gap-4 ">
        {/* Prev Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className={`p-2 rounded-full group hover:border-sec-orange border-2 transition flex items-center justify-center
            ${
              isBeginning
                ? ' border-gray-400 cursor-auto'
                : 'bg-white border-black hover:border-[#F05A29] cursor-pointer'
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`w-4 h-4 transition ${
              isBeginning ? 'fill-gray-500' : 'fill-black group-hover:fill-[#F05A29]'
            }`}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>

        {/* Next Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className={`p-2  group rounded-full border-2 transition flex items-center justify-center hover:border-sec-orange
            ${
              isEnd
                ? ' border-gray-500 cursor-auto'
                : 'bg-white border-black hover:border-[#F05A29] cursor-pointer'
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`w-4 h-4 transition ${
              isEnd ? 'fill-gray-400' : 'fill-black group-hover:fill-[#F05A29]'
            }`}
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
