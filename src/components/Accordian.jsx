import React, { useState } from "react";

const Accordian = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`border-b last:border-none transition-colors duration-300 ${
        isExpanded
          ? "bg-lightRed text-white border-white"
          : "bg-white text-lightRed border-lightRed border-opacity-25"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-[5vw]">
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex justify-between py-4 xs:py-6 cursor-pointer select-none gap-4"
        >
          <p className="font-drukMedium text-xs xs:text-[13px] sm:text-[15px]">
            {question}
          </p>

          <div className="w-4 aspect-square relative grid place-items-center">
            <div className="absolute w-full h-[2px] bg-current"></div>
            <div
              className={`absolute w-full h-[2px] bg-current transition-all duration-300 ${
                isExpanded ? "rotate-0" : "-rotate-90"
              }`}
            ></div>
          </div>
        </div>

        <div
          className={`grid transition-all duration-300 ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-xs xs:text-sm sm:text-base pb-4 sm:pb-7 font-interTight font-medium">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
