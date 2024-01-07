import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Banner = () => {
  const wrapper = useRef();
  const wall = useRef();
  const overlay = useRef();

  useEffect(() => {
    const scrollTrigger = {
      trigger: wrapper.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    };

    const layers = document.querySelectorAll(".banner-layer");

    layers.forEach((layer, index) => {
      gsap.from(layer, {
        scrollTrigger,
        yPercent: () => -6 * (layers.length - index),
      });
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
      className="w-full h-screen flex relative overflow-hidden z-0 bg-[rgb(245,240,240)]"
    >
      <div
        ref={overlay}
        className="absolute inset-0 bg-blueCharcoal z-10"
      ></div>
      <img
        src="/banner-clouds.png"
        alt="..."
        className="object-cover w-full absolute top-0 z-0 banner-layer"
      />
      <img
        src="/banner-heading.png"
        alt="..."
        className="object-cover w-2/3 absolute left-1/2 -translate-x-1/2 top-[5%] z-[1] banner-layer"
      />
      <img
        src="/banner-eagle.webp"
        alt="..."
        className="object-cover w-full h-full absolute z-[2] banner-layer"
      />
      <img
        src="/banner-stop-sign.png"
        alt="..."
        className="object-cover w-[80%] absolute right-[10%] -top-[6%] z-[3] banner-layer"
      />
      <img
        src="/banner-car.png"
        alt="..."
        className="object-cover w-[75%] absolute left-1/2 -translate-x-1/2 z-[4] banner-layer"
      />
      <img
        src="/banner-broken-ting.png"
        alt="..."
        className="object-cover w-[70%] left-[18%] -bottom-[15%] h-full absolute z-[5] banner-layer"
      />
      <img
        ref={wall}
        src="/banner-wall.png"
        alt="..."
        style={{ translate: "-50% -50%" }}
        className="object-cover min-w-[101%] absolute left-1/2 top-1/2 z-[6]"
      />
    </div>
  );
};

export default Banner;
