import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { duplicate } from "../../utils/duplicate";

const firstSlideShow = [
  "/first-slideshow-1.webp",
  "/first-slideshow-2.webp",
  "/first-slideshow-3.webp",
  "/first-slideshow-4.webp",
  "/first-slideshow-5.webp",
];

const secondSlideShow = [
  "/second-slideshow-1.webp",
  "/second-slideshow-2.webp",
  "/second-slideshow-3.webp",
  "/second-slideshow-4.webp",
  "/second-slideshow-5.webp",
];

const stats = [
  { key: "Year of Release", value: "2023" },
  { key: "Characters", value: "10K" },
  { key: "Attributes", value: "500+" },
  { key: "Traits", value: "20+" },
];

const Collections = () => {
  const wrapper = useRef();
  const slideshow1 = useRef();
  const slideshow2 = useRef();

  useEffect(() => {
    gsap.to(wrapper.current, {
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top bottom",
        onEnter: () => document.body.classList.add("bg-white"),
        onLeaveBack: () => document.body.classList.remove("bg-white"),
      },
    });

    gsap.to(slideshow1.current, {
      scrollTrigger: {
        trigger: slideshow1.current,
        toggleActions: "play pause resume pause",
      },
      xPercent: -100,
      duration: firstSlideShow.length * 12,
      repeat: Infinity,
      ease: "none",
    });

    gsap.fromTo(
      slideshow2.current,
      { xPercent: -100 },
      {
        scrollTrigger: {
          trigger: slideshow2.current,
          toggleActions: "play pause resume pause",
        },
        xPercent: 0,
        duration: secondSlideShow.length * 15,
        repeat: Infinity,
        ease: "none",
      }
    );
  }, []);

  return (
    <div
      ref={wrapper}
      className="text-lightRed my-[125px] flex flex-col gap-14"
    >
      <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col gap-10 items-start">
        <span className="text-2xl font-druk leading-[0.8em]">collection</span>

        <div className="h-[1px] bg-current w-full"></div>

        <h2 className="text-[88px] font-druk leading-[0.8em] mt-2 max-w-[900px]">
          JOIN THE REJECTS
        </h2>

        <p className="text-xl !leading-[1.5] font-interTight font-medium max-w-[580px] -mt-2">
          Introducing The Mars Rejects, our debut collection for this universe,
          slated for release in 2023. Stay up-to-date by joining our newsletter,
          all official updates will be delivered straight to your inbox.
        </p>

        <button className="h-12 px-8 border border-current font-drukMedium text-[11px] rounded-full hover:bg-lightRed hover:text-white transition-colors duration-300">
          Get early access
        </button>
      </div>

      <ul ref={slideshow1} className="w-[100vw] max-w-[2000px] flex">
        {duplicate(firstSlideShow, 4).map((img, i) => (
          <img key={i} src={img} alt="..." className="min-w-[20%] px-2" />
        ))}
      </ul>

      <div className="flex justify-between w-[90%] max-w-[1200px] mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="uppercase flex flex-col items-center">
            <span className="font-druk text-blueCharcoal text-[50px] leading-[90%]">
              {stat.value}
            </span>
            <span className="font-drukMedium text-blueCharcoal text-[11px] opacity-50">
              {stat.key}
            </span>
          </div>
        ))}
      </div>

      <ul ref={slideshow2} className="w-[100vw] max-w-[2000px] flex">
        {duplicate(secondSlideShow, 4).map((img, i) => (
          <img key={i} src={img} alt="..." className="min-w-[20%] px-2" />
        ))}
      </ul>
    </div>
  );
};

export default Collections;
