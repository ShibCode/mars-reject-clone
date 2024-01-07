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
      <div className="max-w-[1200px] mx-auto">
        <div
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex justify-between py-6 cursor-pointer select-none"
        >
          <p className="font-drukMedium font-[15px]">{question}</p>

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
            <p className="pb-7 font-interTight font-medium">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
