import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Team = () => {
  const wrapper = useRef();

  useEffect(() => {
    const previousSection = document.querySelector(".roadmap-section");

    gsap.fromTo(
      wrapper.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top center",
          toggleActions: "play none none reverse",
          onEnter: () => {
            document.body.classList.add("bg-[#F5F0F0]");

            gsap.to(previousSection, { opacity: 0, duration: 0.3 });
          },
          onLeaveBack: () => {
            document.body.classList.remove("bg-[#F5F0F0]");
            gsap.to(previousSection, { opacity: 1, duration: 0.3 });
          },
        },
        opacity: 1,
        duration: 0.3,
      }
    );
  }, []);

  return (
    <div ref={wrapper} className="mt-[80px] md:mt-[120px]">
      <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col gap-6 xs:gap-8 md:gap-10 items-start text-lightRed">
        <span className="text-2xl font-druk leading-[0.8em]">team</span>

        <div className="h-[1px] bg-current w-full"></div>

        <h2 className="heading-primary font-druk leading-[0.82em] sm:leading-[0.8em] mt-2 max-w-[900px]">
          MEET THE SQUAD
        </h2>

        <p className="xs:text-lg sm:text-xl !leading-[1.5] font-interTight font-medium -mt-2">
          If you're interested in collaborating or partnering with us, feel free
          to drop us a line.
        </p>

        <button className="h-10 sm:h-12 px-6 sm:px-8 border border-current font-drukMedium text-[11px] rounded-full hover:bg-lightRed hover:text-white transition-colors duration-300">
          Join forces with us!
        </button>
      </div>
    </div>
  );
};

export default Team;
