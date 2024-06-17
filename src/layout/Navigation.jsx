import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const linkBackgroundHover = useRef();

  const handleHover = (e) => {
    linkBackgroundHover.current.style.left = `${e.target.offsetLeft}px`;
    linkBackgroundHover.current.style.width = `${
      e.target.getBoundingClientRect().width
    }px`;
  };

  return (
    <div className="h-[78px] w-[0px] fixed bottom-[6vh] left-1/2 -translate-x-1/2 flex z-20 isolate overflow-y-clip">
      <div
        style={{
          transition:
            "background-color 200ms, transform cubic-bezier(.23,.6,.3,.87) 350ms, left cubic-bezier(.23,.6,.3,.87) 350ms, bottom cubic-bezier(.23,.6,.3,.87) 350ms, opacity cubic-bezier(.23,.6,.3,.87) 350ms",
        }}
        className={`absolute w-[54px] h-[54px] grid place-items-center cursor-pointer bg-[rgba(2,17,32,0.5)] backdrop-blur-[5px] rounded-full hover:bg-[#f74a53] ${
          isExpanded
            ? "left-1/2 -translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "left-0 translate-x-[calc(-200%-20px-39px)] bottom-[50%] translate-y-[50%] opacity-100"
        }`}
      >
        <img src="/mail.svg" alt="mail" className="w-6" />
      </div>
      <div
        style={{
          transition:
            "background-color 200ms, transform cubic-bezier(.23,.6,.3,.87) 350ms, left cubic-bezier(.23,.6,.3,.87) 350ms, bottom cubic-bezier(.23,.6,.3,.87) 350ms, opacity cubic-bezier(.23,.6,.3,.87) 350ms",
        }}
        className={`absolute w-[54px] h-[54px] grid place-items-center cursor-pointer bg-[rgba(2,17,32,0.5)] backdrop-blur-[5px] rounded-full hover:bg-[#f74a53] transition-colors duration-200 ${
          isExpanded
            ? "left-1/2 -translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "left-0 translate-x-[calc(-100%-10px-39px)] bottom-[50%] translate-y-[50%]"
        }`}
      >
        <img src="/instagram.svg" alt="instagram" className="w-6" />
      </div>

      <div
        style={{ transitionTimingFunction: "cubic-bezier(.23,.6,.3,.87)" }}
        className={`left-1/2 -translate-x-1/2 absolute group h-full transition-all duration-[350ms] hover:duration-[600ms] cursor-pointer bg-[rgba(2,17,32,0.5)] backdrop-blur-[5px] rounded-full border-[10px] border-transparent overflow-hidden z-20 ${
          isExpanded ? "min-w-[583px]" : "min-w-[78px]"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* without hover */}

        <div
          className={`absolute w-full h-full bg-[#f74a53] rounded-full flex justify-center items-center gap-0.5 transition-opacity duration-[350ms] group-hover:duration-[200ms] ${
            isExpanded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-1 h-1 bg-[rgb(132,19,30)] rounded-full"></div>
          <div className="w-1 h-1 bg-[rgb(132,19,30)] rounded-full"></div>
          <div className="w-1 h-1 bg-[rgb(132,19,30)] rounded-full"></div>
        </div>

        {/* with hover */}
        <div
          className={`absolute h-full flex text-sm font-inter font-extrabold uppercase text-white isolate transition-opacity duration-[300ms] group-hover:duration-[0ms] ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            style={{ width: "83.0833px", left: "0px" }}
            ref={linkBackgroundHover}
            className="absolute h-full bg-[#f74a53] rounded-full -z-10 transition-all duration-300"
          ></div>

          <a
            href="#home"
            className="flex items-center px-5 hover:text-[rgb(132,19,30)] rounded-full transition-colors duration-300"
            onMouseEnter={handleHover}
          >
            Home
          </a>
          <a
            href="#story"
            className="flex items-center px-5 hover:text-[rgb(132,19,30)] rounded-full transition-colors duration-300"
            onMouseEnter={handleHover}
          >
            Story
          </a>
          <a
            href="#collection"
            className="flex items-center px-5 hover:text-[rgb(132,19,30)] rounded-full transition-colors duration-300"
            onMouseEnter={handleHover}
          >
            Collection
          </a>
          <a
            href="#roadmap"
            className="flex items-center px-5 hover:text-[rgb(132,19,30)] rounded-full transition-colors duration-300"
            onMouseEnter={handleHover}
          >
            Roadmap
          </a>
          <a
            href="#team"
            className="flex items-center px-5 hover:text-[rgb(132,19,30)] rounded-full transition-colors duration-300"
            onMouseEnter={handleHover}
          >
            Team
          </a>
          <a
            href="#faq"
            className="flex items-center px-5 hover:text-[rgb(132,19,30)] rounded-full transition-colors duration-300"
            onMouseEnter={handleHover}
          >
            FAQ
          </a>
        </div>
      </div>

      <div
        style={{
          transition:
            "background-color 200ms, transform cubic-bezier(.23,.6,.3,.87) 350ms, right cubic-bezier(.23,.6,.3,.87) 350ms, bottom cubic-bezier(.23,.6,.3,.87) 350ms, opacity cubic-bezier(.23,.6,.3,.87) 350ms",
        }}
        className={`absolute w-[54px] h-[54px] grid place-items-center cursor-pointer bg-[rgba(2,17,32,0.5)] backdrop-blur-[5px] rounded-full hover:bg-[rgb(29,155,240)] transition-colors duration-200 ${
          isExpanded
            ? "right-1/2 translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "right-0 translate-x-[calc(200%+20px+39px)] bottom-[50%] translate-y-[50%]"
        }`}
      >
        <FontAwesomeIcon icon={faTwitter} className="text-white text-[23px]" />
      </div>
      <div
        style={{
          transition:
            "background-color 200ms, transform cubic-bezier(.23,.6,.3,.87) 350ms, right cubic-bezier(.23,.6,.3,.87) 350ms, bottom cubic-bezier(.23,.6,.3,.87) 350ms, opacity cubic-bezier(.23,.6,.3,.87) 350ms",
        }}
        className={`absolute w-[54px] h-[54px] grid place-items-center cursor-pointer bg-[rgba(2,17,32,0.5)] backdrop-blur-[5px] rounded-full hover:bg-[#f74a53] transition-colors duration-200 ${
          isExpanded
            ? "right-1/2 translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "right-0 translate-x-[calc(100%+10px+39px)] bottom-[50%] translate-y-[50%]"
        }`}
      >
        <img src="/tiktok.svg" alt="tiktok" className="w-6" />
      </div>
    </div>
  );
};

export default Navigation;
