import { useRef, useState } from "react";

export default function FaqAccordion({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full mx-auto lg:px-[26px] px-[16px] lg:py-[16px] py-2" id="accordion">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="bg-[#F6F6F6]  overflow-hidden rounded-[12px] lg:my-[28px] my-[16px] ">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left lg:p-4 p-3 bg-[#F6F6F6] cursor-pointer   transition rounded-[12px]"
            >
              <p className="font-[400] lg:text-[20px] text-[16px] text-gray-900">{item.question}</p>
              <div>
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2167_3610)">
                    <path d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5136 20 10C20 4.48645 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.66 1.54918 10C1.54918 5.34004 5.34082 1.54918 10 1.54918C14.6592 1.54918 18.4508 5.34004 18.4508 10C18.4508 14.66 14.66 18.4508 10 18.4508Z" fill="#1A1A1A" />
                    <path d="M13.8721 9.15617H6.12617C5.69781 9.15617 5.35156 9.5032 5.35156 9.93078C5.35156 10.3584 5.69781 10.7054 6.12617 10.7054H13.8721C14.3005 10.7054 14.6467 10.3584 14.6467 9.93078C14.6467 9.5032 14.3005 9.15617 13.8721 9.15617Z" fill="#1A1A1A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2167_3610">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_2167_3610)">
                      <path d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5136 20 10C20 4.48645 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.66 1.54918 10C1.54918 5.34004 5.34082 1.54918 10 1.54918C14.6592 1.54918 18.4508 5.34004 18.4508 10C18.4508 14.66 14.66 18.4508 10 18.4508Z" fill="#1A1A1A" />
                      <path d="M13.8721 9.15617H10.7737V6.05781C10.7737 5.63023 10.4275 5.2832 9.99914 5.2832C9.57078 5.2832 9.22453 5.63023 9.22453 6.05781V9.15617H6.12617C5.69781 9.15617 5.35156 9.5032 5.35156 9.93078C5.35156 10.3584 5.69781 10.7054 6.12617 10.7054H9.22453V13.8038C9.22453 14.2313 9.57078 14.5784 9.99914 14.5784C10.4275 14.5784 10.7737 14.2313 10.7737 13.8038V10.7054H13.8721C14.3005 10.7054 14.6467 10.3584 14.6467 9.93078C14.6467 9.5032 14.3005 9.15617 13.8721 9.15617Z" fill="#1A1A1A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2167_3610">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              </div>

            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[#F6F6F6] px-4 will-change-[max-height]`}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              }}
            >

              <div className="pb-2 text-gray-700 lg:text-[16px] text-[14px] font-normal">
                {item.answer.split("\n").map((line, idx) => (
                  <p key={idx} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
