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
      <a
        href="#"
        style={{ transition: "all cubic-bezier(.23,.6,.3,.87) 350ms" }}
        className={`absolute w-[54px] h-[54px] grid place-items-center rounded-full bg-[#02112080] before:absolute before:inset-0 before:rounded-full before:-z-10 before:bg-[#f74a53] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200 ${
          isExpanded
            ? "left-1/2 -translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "left-0 translate-x-[calc(-200%-20px-39px)] bottom-[50%] translate-y-[50%] opacity-100"
        }`}
      >
        <img src="/mail.svg" alt="mail" className="w-6" />
      </a>
      <a
        href="#"
        style={{ transition: "all cubic-bezier(.23,.6,.3,.87) 350ms" }}
        className={`absolute w-[54px] h-[54px] grid place-items-center rounded-full bg-[#02112080] before:absolute before:inset-0 before:rounded-full before:-z-10 before:bg-[radial-gradient(126.963%_126.963%_at_6.4719%_97.8093%,rgb(250,143,33)_9%,rgb(216,45,126)_78%)] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200 ${
          isExpanded
            ? "left-1/2 -translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "left-0 translate-x-[calc(-100%-10px-39px)] bottom-[50%] translate-y-[50%]"
        }`}
      >
        <img src="/instagram.svg" alt="instagram" className="w-6" />
      </a>

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
            href="#top"
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

      <a
        href="#"
        style={{ transition: "all cubic-bezier(.23,.6,.3,.87) 350ms" }}
        className={`group absolute w-[54px] h-[54px] grid place-items-center rounded-full bg-[#02112080] before:absolute before:inset-0 before:rounded-full before:-z-10 before:bg-white before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200 ${
          isExpanded
            ? "right-1/2 translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "right-0 translate-x-[calc(200%+20px+39px)] bottom-[50%] translate-y-[50%]"
        }`}
      >
        <img
          src="/tiktok.svg"
          alt="tiktok"
          className="transition-opacity duration-200 w-6 absolute group-hover:opacity-0"
        />
        <img
          src="/tiktok-colorful.svg"
          alt="tiktok"
          className="transition-opacity duration-200 w-6 absolute opacity-0 group-hover:opacity-100"
        />
      </a>
      <a
        href="#"
        style={{ transition: "all cubic-bezier(.23,.6,.3,.87) 350ms" }}
        className={`absolute w-[54px] h-[54px] grid place-items-center rounded-full bg-[#02112080] before:absolute before:inset-0 before:rounded-full before:-z-10 before:bg-[#1d9bf0] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200 ${
          isExpanded
            ? "right-1/2 translate-x-[50%] bottom-[0%] translate-y-[100%] opacity-0"
            : "right-0 translate-x-[calc(100%+10px+39px)] bottom-[50%] translate-y-[50%]"
        }`}
      >
        <FontAwesomeIcon icon={faTwitter} className="text-white text-[23px]" />
      </a>
    </div>
  );
};

export default Navigation;
