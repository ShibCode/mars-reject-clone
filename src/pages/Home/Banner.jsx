import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Banner = () => {
  const wrapper = useRef();
  const wall = useRef();
  const overlay = useRef();

  const clouds = useRef();
  const heading = useRef();
  const eagle = useRef();
  const stopSign = useRef();
  const car = useRef();
  const brokenThing = useRef();

  useEffect(() => {
    const scrollTrigger = {
      trigger: wrapper.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    };

    gsap.from(clouds.current, { yPercent: -50, scrollTrigger });
    gsap.from(heading.current, { scale: 0.9, yPercent: -38, scrollTrigger });
    gsap.from(car.current, { scale: 0.8, yPercent: -30, scrollTrigger });
    gsap.from(stopSign.current, { scale: 0.8, yPercent: -26, scrollTrigger });
    gsap.from(eagle.current, {
      scale: 0.8,
      xPercent: -6,
      yPercent: -43,
      scrollTrigger,
    });
    gsap.from(brokenThing.current, {
      scale: 0.5,
      scrollTrigger,
    });

    gsap.to(wall.current, {
      scrollTrigger,
      minWidth: "140%",
    });

    gsap.to(overlay.current, {
      scrollTrigger,
      opacity: 0,
    });
  }, []);

  return (
    <div
      ref={wrapper}
      className="sm:w-full min-h-[400px] sm:min-h-0 aspect-[1536/703] flex relative overflow-hidden z-0 bg-[rgb(245,240,240)] left-[50%] -translate-x-1/2"
    >
      <div
        ref={overlay}
        className="absolute inset-0 bg-blueCharcoal z-10"
      ></div>
      <img
        ref={clouds}
        src="/banner-clouds.png"
        alt="..."
        className="object-cover w-full absolute top-0 z-0"
      />
      <img
        ref={heading}
        src="/banner-heading.png"
        alt="..."
        className="object-cover w-2/3 absolute left-1/2 -translate-x-1/2 top-[5%] z-[1]"
      />
      <img
        ref={eagle}
        src="/banner-eagle.webp"
        alt="..."
        className="object-cover w-[78%] absolute z-[2] right-[11%] top-[0%]"
      />
      <img
        ref={stopSign}
        src="/banner-stop-sign.png"
        alt="..."
        className="object-cover w-[87%] absolute right-[7.5%] -top-[8%] z-[3]"
      />
      <img
        ref={car}
        src="/banner-car.png"
        alt="..."
        className="object-cover w-[80%] absolute left-1/2 -translate-x-1/2 z-[4] top-[-5%]"
      />
      <img
        ref={brokenThing}
        src="/banner-broken-ting.png"
        alt="..."
        className="object-cover w-[100%] left-[5%] -bottom-[12%] h-full absolute z-[5]"
      />
      <img
        ref={wall}
        src="/banner-wall.png"
        alt="..."
        style={{ translate: "-50% -50%" }}
        className="object-cover min-w-[100%] absolute left-1/2 top-1/2 z-[6]"
      />
    </div>
  );
};

export default Banner;
