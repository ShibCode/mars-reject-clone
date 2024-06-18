import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div ref={wrapper} id="team" className="mt-[80px] md:mt-[120px]">
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

        <div className="flex gap-6">
          <Member />
          <Member />
          <Member />
        </div>
      </div>
    </div>
  );
};

export default Team;

const Member = () => {
  return (
    <div className="relative flex flex-col w-full max-w-[270px]">
      <div className="relative">
        <img src="/team/bg-sky.avif" alt="bg" />

        <div className="absolute top-0 w-[85%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center h-full -space-y-[4%]">
          <img src="/team/pepe-torrado/name.avif" alt="pepe torrado" />
          <img src="/team/pepe-torrado/face.png" alt="face" />
        </div>
      </div>

      <div className="bg-blueCharcoal h-10 flex items-center justify-center">
        <p className="uppercase text-white font-drukMedium text-[12px] tracking-[-0.5px]">
          PFP Art & Visual Design
        </p>
      </div>

      <div className="h-20 flex pb-[5px] px-[5px] relative z-10">
        <div className="h-full py-2.5 px-2 border-r-[5px] border-blueCharcoal">
          <img
            src="/team/comic.svg"
            alt="approved by the comics code authority"
            className="h-full"
          />
        </div>

        <div className="flex items-center justify-center flex-1 gap-2">
          <a
            href="#"
            className="isolate relative w-12 h-12 grid place-items-center rounded-full bg-blueCharcoal before:absolute before:inset-0 before:rounded-full before:-z-10 before:bg-[radial-gradient(126.963%_126.963%_at_6.4719%_97.8093%,rgb(250,143,33)_9%,rgb(216,45,126)_78%)] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
          >
            <img src="/instagram.svg" alt="instagram" className="w-6" />
          </a>
          <a
            href="#"
            className="isolate relative w-12 h-12 grid place-items-center rounded-full bg-blueCharcoal before:absolute before:inset-0 before:rounded-full before:-z-10 before:bg-[#1d9bf0] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-white text-[23px]"
            />
          </a>
          <a
            href="#"
            className="isolate relative w-12 h-12 grid place-items-center rounded-full bg-blueCharcoal before:absolute before:inset-0 before:rounded-full before:-z-10 before:bg-[#f74a53] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
          >
            <img src="/web.svg" alt="web" className="w-6" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 border-[5px] border-blueCharcoal pointer-events-non"></div>

      <img
        src="/team/bg-scratches.png"
        alt="bg"
        className="absolute top-0 left-0 pointer-events-non"
      />
    </div>
  );
};
