import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const roadmapData = [
  {
    key: "Communications Established",
    value: "Website Is Live",
    status: {
      value: "released",
      styles: { backgroundColor: "#f74a53", color: "white" },
    },
  },
  {
    key: "Build The Rebellion",
    value: "Join The Enlisted",
    status: {
      value: "in progress",
      styles: {
        backgroundColor: "transparent",
        color: "#f74a53",
        borderColor: "#f84a5350",
      },
    },
  },
  { key: "Meet the Rejects", value: "Mars Rejects Collection Launch" },
  { key: "Communications Established", value: "Newsletter Updates Deployed" },
  {
    key: " Calling In Reinforcements",
    value: "Creators Pass Airdrop To Holders",
  },
  { key: "Tactical Development", value: "Voting Mechanics Enabled" },
  { key: "Progress Revealed", value: "First Chapter Digital Release" },
  { key: "Something To Take Home", value: "Merchandise and Physical Art" },
  { key: "mission success", value: "Graphic Novel Distribution" },
  { key: "PHASE TWO", value: "Martian Living" },
];

const Roadmap = () => {
  const wrapper = useRef();

  useEffect(() => {
    const previousSection = document.querySelector(".about-art-section");

    gsap.fromTo(
      wrapper.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top center",
          toggleActions: "play none none reverse",
          onEnter: () => {
            document.body.classList.remove("bg-[#F5F0F0]");
            previousSection.classList.add("opacity-0");
          },
          onLeaveBack: () => {
            document.body.classList.add("bg-[#F5F0F0]");
            previousSection.classList.remove("opacity-0");
          },
        },
        opacity: 1,
        duration: 0.3,
      }
    );
  }, []);

  return (
    <div
      ref={wrapper}
      id='roadmap'
      className="flex flex-col items-center mt-[100px] sm:mt-[200px] roadmap-section"
    >
      <div className="text-lightRed w-full max-w-[1100px] flex flex-col items-center gap-6 sm:gap-8">
        <span className="text-xl xs:text-2xl font-druk leading-[0.8em]">
          ROADMAP
        </span>

        <div className="h-[1px] max-w-[130px] bg-current w-full"></div>

        <h2 className="text-[34px] xs:text-[38px] sm:text-[48px] md:text-[58px] lg:text-[76px] xl:text-[88px] font-druk leading-[0.82em] xs:leading-[0.8em] mt-2 text-center w-[90%] max-w-[9em] xs:max-w-none">
          BE PART OF THE JOURNEY
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 xs:gap-5 lg:gap-8 max-w-[950px] w-[90%]">
          <p className="xs:text-lg sm:text-xl !leading-[1.5] font-inter font-medium -mt-2">
            We are here to create and inspire through art and storytelling. Our
            generative art collection is just the beginning - we believe in
            experimenting with all forms of expression, digital or physical.
          </p>

          <p className="xs:text-lg sm:text-xl !leading-[1.5] font-inter font-medium -mt-2">
            As NFTs evolve with Web3, we're excited to explore and embrace new
            ideas. Collaboration is at the heart of our approach, and we're
            eager to team up with others on innovative projects.
          </p>
        </div>
      </div>

      <ul className="w-full md:w-[90%] max-w-[950px] mt-[30px] xs:mt-[50px] lg:mt-[90px]">
        {roadmapData.map((item, index) => (
          <li
            key={index}
            className={`font-drukMedium text-white flex justify-between items-center px-4 sm:px-6 md:px-8 h-[100px] gap-5 ${
              item.status?.value === "released"
                ? "border-lightRed bg-opacity-5 bg-lightRed border-b-2"
                : "border-white border-opacity-10 border-b"
            }`}
          >
            <div className="flex items-start gap-2 xs:gap-3">
              <span className="opacity-40 text-[9px] xs:text-[10px]">
                {index.toString().padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <span className="opacity-40 text-[9px] xs:text-[10px] uppercase">
                  {item.key}
                </span>
                <span
                  className={`leading-[1.2em] text-sm xs:text-base ${
                    item.status?.value ? "" : "opacity-40"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            </div>

            {item.status && (
              <div
                style={item.status.styles}
                className="border border-lightRed text-[10px] w-9 xs:w-10 md:w-[140px] h-9 xs:h-10 flex items-center justify-center gap-2.5 rounded-lg"
              >
                <span className="hidden md:inline"> {item.status.value}</span>

                {item.status.value === "in progress" && <InProgressIcon />}
                {item.status.value === "released" && <ReleasedIcon />}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;

const InProgressIcon = () => {
  return (
    <div className="flex gap-[2.5px] xs:gap-[3px]">
      <div className="w-[2.5px] xs:w-[3px] aspect-square bg-lightRed rounded-full in-progress-animation"></div>
      <div className="w-[2.5px] xs:w-[3px] aspect-square bg-lightRed rounded-full in-progress-animation"></div>
      <div className="w-[2.5px] xs:w-[3px] aspect-square bg-lightRed rounded-full in-progress-animation"></div>
    </div>
  );
};

const ReleasedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 14 10.706"
      id="svg2570827119"
      className="w-3 xs:w-[13px]"
    >
      <path
        d="M 13.158 0.839 C 12.675 0.357 11.893 0.357 11.411 0.839 L 4.94 7.31 L 2.169 4.539 C 1.687 4.057 0.904 4.057 0.422 4.539 C -0.06 5.022 -0.06 5.804 0.422 6.286 L 3.955 9.82 C 4.224 10.089 4.587 10.208 4.939 10.177 C 5.291 10.208 5.654 10.09 5.924 9.82 L 13.158 2.586 C 13.64 2.104 13.64 1.322 13.158 0.839 Z"
        fill='var(--token-1c8dc1db-9e40-4deb-bb34-c67ba1a80b43, rgb(245, 240, 240)) /* {"name":"off white"} */'
      ></path>
    </svg>
  );
};
