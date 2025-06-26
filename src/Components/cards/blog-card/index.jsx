import React from 'react';

export default function BlogCard() {
  return (
    <div className="relative rounded-2xl group overflow-hidden border-[1px] border-gray-300">

      {/* Black Overlay - grows from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black  group-hover:h-full ease-linear  transition-all duration-400 z-0" />

      {/* Blog Image */}
      <div className="relative z-10">
        <img
          className="rounded-tl-2xl rounded-tr-2xl w-full"
          src="/images/blog-image.jpg"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-4 select-none">
        <p className="font-[400] text-gray-700 text-[14px] group-hover:text-white transition-all duration-400">
          22 May, 2025
        </p>
        <p className="font-[500] text-[20px] group-hover:text-white transition-all duration-600 line-clamp-3 ">
          We have accumulated the whole idea of how you calculate your budget throughout the overall....
        </p>
        <p className="font-[400] text-gray-700 text-[14px] group-hover:text-white transition-all duration-600">
          Read more...
        </p>
      </div>

    </div>
  );
}
