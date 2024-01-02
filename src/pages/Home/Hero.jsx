import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { duplicate } from "../../utils/duplicate";
import { ScrollTrigger } from "gsap/all";
import Web from "../../svg/Web";
import CircleLineThrough from "../../svg/CircleLineThrough";
import CircleDoubleLineThrough from "../../svg/CircleDoubleLineThrough";
import MatrixCode from "../../svg/MatrixCode";

const frontCharacters = [
  "/hero-character-front-1.webp",
  "/hero-character-front-2.png",
  "/hero-character-front-3.png",
  "/hero-character-front-4.png",
];

const backCharacters = [
  "/hero-character-1.webp",
  "/hero-character-2.png",
  "/hero-character-3.png",
  "/hero-character-4.png",
  "/hero-character-5.png",
  "/hero-character-6.webp",
  "/hero-character-7.png",
  "/hero-character-8.png",
];

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const wrapper = useRef();
  const contentWrapper = useRef();
  const characterSlideShow = useRef();
  const para = useRef();
  const signature = useRef();

  useEffect(() => {
    gsap.to(".hero-character-front", {
      xPercent: frontCharacters.length * -100,
      ease: "none",
      duration: 10 * frontCharacters.length,
      repeat: Infinity,
    });

    gsap.to(".hero-character-back", {
      xPercent: backCharacters.length * -100,
      ease: "none",
      duration: 11 * backCharacters.length,
      repeat: Infinity,
    });

    gsap.to(wrapper.current, {
      scrollTrigger: {
        trigger: wrapper.current,
        end: "+=1200",
        pin: true,
      },
    });

    const heroTrigger = {
      trigger: contentWrapper.current,
      start: "50 top",
      end: "+=100",
      scrub: 1,
    };

    gsap.to([, para.current, signature.current], {
      scrollTrigger: {
        ...heroTrigger,
        scrub: false,
        toggleActions: "play none none reverse",
      },
      opacity: 1,
    });

    gsap.to(wrapper.current, {
      scrollTrigger: {
        ...heroTrigger,
        scrub: false,
        toggleActions: "play none none reverse",
      },

      color: "#021120",
      backgroundColor: "#f74a53",
    });

    gsap.to(contentWrapper.current, {
      scrollTrigger: heroTrigger,
      scale: 1.1,
    });

    gsap.to(characterSlideShow.current, {
      scrollTrigger: heroTrigger,
      opacity: 0,
    });

    gsap.to(wrapper.current, {
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top top",
        end: "+20",
        scrub: 1,
      },
      opacity: 0,
      yPercent: -15,
    });
  }, []);

  return (
    <div ref={wrapper} className="h-screen relative z-0 flex text-lightRed">
      <div
        ref={contentWrapper}
        className="w-full flex flex-col items-center text-center justify-center gap-2.5 sm:gap-4 md:gap-6"
      >
        <div className="relative w-[min(20vw,100px)] sm:w-[130px] grid place-items-center">
          <video
            src="/skull-rotating.mp4"
            autoPlay
            loop
            className="absolute w-[34%] -z-10"
          ></video>
          <Web />
        </div>

        <h1 className="text-[min(8vw,52px)] sm:text-[60px] md:text-[80px] lg:text-[105px] xl:text-[140px] leading-[0.8em] font-druk mt-4">
          MARS <br /> REJECTS
        </h1>

        <p
          ref={para}
          className="sm:text-lg md:text-xl font-semibold font-interTight max-w-[600px] w-[63%] sm:w-[70%] !leading-[1.2] opacity-0"
        >
          A unique collection of 10,000 characters brought to life as NFTs.
          Created by Pepe Torrado, The Mars Rejects live in a universe crafted
          by their own community.
        </p>

        <img
          ref={signature}
          src="/hero-signature.svg"
          alt="signature"
          className="w-[80px] sm:w-[110px] mt-2 sm:mt-4 opacity-0"
        />
      </div>

      <div className="absolute inset-0 bg-redRadial opacity-25"></div>

      <div className="absolute inset-4 sm:inset-6 md:inset-10 z-20">
        <div className="w-[16px] absolute top-0 left-0 h-[16px] border border-current rounded-full"></div>

        <div className="w-[17px] absolute top-0 right-0">
          <CircleLineThrough />
        </div>

        <div className="w-[17px] absolute bottom-0 left-0">
          <CircleDoubleLineThrough />
        </div>

        <div className="w-[16px] absolute bottom-0 right-0 h-[16px] bg-current rounded-full"></div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px]">
          <MatrixCode />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[6px] rotate-180">
          <MatrixCode />
        </div>
      </div>

      <div ref={characterSlideShow} className="absolute inset-0">
        <div className="flex items-end absolute bottom-0 z-10">
          {duplicate(frontCharacters, 4).map((character, index) => (
            <img
              key={index}
              src={character}
              alt="..."
              className="min-w-[clamp(300px,40%,580px)] h-fit object-contain hero-character-front"
            />
          ))}
        </div>

        <div className="flex items-end absolute bottom-0">
          {duplicate(backCharacters, 4).map((character, index) => (
            <img
              key={index}
              src={character}
              alt="..."
              style={{ translate: "-100px 0" }}
              className="min-w-[clamp(220px,30%,440px)] h-fit object-contain hero-character-back"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
