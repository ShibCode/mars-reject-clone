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
      styles: { backgroundColor: "transparent", color: "#f74a53" },
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
            document.body.classList.remove("bg-white");
            previousSection.classList.add("opacity-0");
          },
          onLeaveBack: () => {
            document.body.classList.add("bg-white");
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
      className="flex flex-col items-center mt-[200px] roadmap-section"
    >
      <div className="text-lightRed w-full max-w-[1100px] flex flex-col items-center gap-8">
        <span className="text-2xl font-druk leading-[0.8em]">ROADMAP</span>

        <div className="h-[1px] max-w-[130px] bg-current w-full"></div>

        <h2 className="text-[88px] font-druk leading-[0.8em] mt-2 text-center">
          BE PART OF THE JOURNEY
        </h2>

        <div className="flex gap-8 max-w-[950px]">
          <p className="text-xl !leading-[1.5] font-inter font-medium -mt-2">
            We are here to create and inspire through art and storytelling. Our
            generative art collection is just the beginning - we believe in
            experimenting with all forms of expression, digital or physical.
          </p>

          <p className="text-xl !leading-[1.5] font-inter font-medium -mt-2">
            As NFTs evolve with Web3, we're excited to explore and embrace new
            ideas. Collaboration is at the heart of our approach, and we're
            eager to team up with others on innovative projects.
          </p>
        </div>
      </div>

      <ul className="w-full max-w-[950px] mt-[90px]">
        {roadmapData.map((item, index) => (
          <li
            key={index}
            className={`font-drukMedium text-white flex justify-between items-center px-5 h-[100px] ${
              item.status?.value === "released"
                ? "border-lightRed bg-opacity-5 bg-lightRed border-b-2"
                : "border-white border-opacity-10 border-b"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="opacity-40 text-[10px]">
                {index.toString().padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <span className="opacity-40 text-[10px] uppercase">
                  {item.key}
                </span>
                <span className={item.status?.value ? "" : "opacity-40"}>
                  {item.value}
                </span>
              </div>
            </div>

            {item.status && (
              <div
                style={item.status.styles}
                className="border border-lightRed text-[10px] w-[140px] h-10 grid place-items-center rounded-lg"
              >
                {item.status.value}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
