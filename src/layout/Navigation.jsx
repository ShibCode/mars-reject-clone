import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const pageNavigationLinks = [
  { name: "Home", href: "#top" },
  { name: "Story", href: "#story" },
  { name: "Collection", href: "#collection" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

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
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 z-[49]"
          onClick={() => setIsExpanded(false)}
        ></div>
      )}

      <div
        style={{
          transition: "all cubic-bezier(.23,.6,.3,.87) 600ms",
          overflowClipMargin: "10px",
        }}
        className={`h-[58px] rounded-full fixed left-1/2 -translate-x-1/2 bottom-[5vh] z-50 isolate before:absolute before:-inset-2.5 before:bg-blueCharcoal before:bg-opacity-60 before:backdrop-blur-[5px] before:-z-10 before:rounded-full overflow-clip ${
          isExpanded
            ? "w-[90vw] xs:w-[427.6px] sm:w-[569.5px]"
            : "w-[58px] before:pointer-events-none !duration-[400ms]"
        }`}
        onTouchStart={() => setIsExpanded(true)}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* without hover */}
        <div
          style={{ transition: "all cubic-bezier(.23,.6,.3,.87) 400ms" }}
          className={`bg-[#f74a53] rounded-full flex gap-0.5 justify-center items-center h-full absolute ${
            isExpanded
              ? "w-[90vw] xs:w-[427.6px] sm:w-[569.5px] opacity-0 pointer-events-none !duration-300"
              : "w-[58px] opacity-100"
          }`}
        >
          <div className="w-1 h-1 bg-[rgb(132,19,30)] rounded-full"></div>
          <div className="w-1 h-1 bg-[rgb(132,19,30)] rounded-full"></div>
          <div className="w-1 h-1 bg-[rgb(132,19,30)] rounded-full"></div>
        </div>

        {/* with hover */}
        <div
          style={{ transition: "all cubic-bezier(.23,.6,.3,.87) 600ms" }}
          className={`text-white h-full absolute flex overflow-y-auto max-w-[90vw] xs:max-w-none  ${
            isExpanded
              ? "opacity-100"
              : "opacity-0 pointer-events-none !duration-[400ms] touch-none"
          }`}
        >
          <div
            style={{
              left: "0px",
              transition: "all cubic-bezier(.23,.6,.3,.87) 500ms",
            }}
            ref={linkBackgroundHover}
            className="absolute h-full bg-[#f74a53] rounded-full -z-10"
          ></div>

          {pageNavigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onMouseEnter={handleHover}
              style={{ transition: "all cubic-bezier(.23,.6,.3,.87) 500ms" }}
              className="flex items-center px-2.5 sm:px-5 hover:text-[rgb(132,19,30)] text-sm sm:text-[15px] font-inter uppercase font-black tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="fixed bottom-[5vh] translate-y-2.5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 xs:gap-4 overflow-hidden">
        <LinkButton
          className={"before:bg-[#f74a53]"}
          index={-2}
          isExpanded={isExpanded}
        >
          <img src="/mail.svg" alt="mail" className="w-6" />
        </LinkButton>

        <LinkButton
          className={
            "before:bg-[radial-gradient(126.963%_126.963%_at_6.4719%_97.8093%,rgb(250,143,33)_9%,rgb(216,45,126)_78%)]"
          }
          index={-1}
          isExpanded={isExpanded}
        >
          <img src="/instagram.svg" alt="instagram" className="w-6" />
        </LinkButton>

        <div className="size-[78px]"></div>

        <LinkButton
          className={"before:bg-[#1d9bf0]"}
          index={1}
          isExpanded={isExpanded}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white text-[23px]"
          />
        </LinkButton>

        <LinkButton
          className="before:bg-white group"
          index={2}
          isExpanded={isExpanded}
        >
          <img
            src="/tiktok.svg"
            alt="tiktok"
            className="w-6 absolute group-hover:opacity-0 transition-all duration-300"
          />
          <img
            src="/tiktok-colorful.svg"
            alt="tiktok"
            className="w-6 absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </LinkButton>
      </div>
    </>
  );
};

export default Navigation;

const LinkButton = ({ children, className, isExpanded, index }) => {
  const convertNumber = (num) => (num > 0 ? 1 : -1);

  return (
    <a
      href="#"
      style={{
        transition: `all cubic-bezier(.23,.6,.3,.87) ${
          isExpanded ? "600ms" : "400ms"
        }`,
        translate: isExpanded
          ? `${
              -16 * index - // 16 is gap
              54 * index - // 54 is own width
              39 * convertNumber(index) + // 39 is width of center button / 2
              27 * convertNumber(index) // 27 is own width / 2
            }px calc(100% + 10px)`
          : "0px 0px",
      }}
      className={`size-[54px] rounded-full flex justify-center items-center bg-blueCharcoal bg-opacity-60 isolate overflow-hidden relative before:absolute before:inset-0 before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 backdrop-blur-[5px] ${className}`}
    >
      {children}
    </a>
  );
};
