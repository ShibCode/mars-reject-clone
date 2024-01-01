import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const cards = [
  "justify-start",
  "justify-end",
  "justify-center",
  "justify-start",
  "justify-end",
  "justify-center",
  "justify-start",
];

const Poster = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const poster = gsap.timeline();

    for (let i = 2; i <= 11; i++) poster.to(`.p-${i}`, { opacity: 1 });

    ScrollTrigger.create({
      animation: poster,
      trigger: ".poster-wrapper",
      start: "top 20px",
      scrub: 1,
    });

    gsap.to("body", {
      backgroundColor: "#021120",
      duration: 0.3,
      scrollTrigger: {
        trigger: ".poster-wrapper",
        toggleActions: "play reverse play reverse",
        start: "top 40%",
        end: "bottom 80%",
      },
    });

    gsap.fromTo(
      ".poster",
      { rotateZ: -5, rotateX: -30 },
      {
        rotateZ: 0,
        rotateX: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".poster",
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    gsap.to(".poster", {
      scale: 1.05,
      scrollTrigger: {
        trigger: ".poster-wrapper",
        start: "top 20px",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  // [perspective:500px] [transform-style:preserve-3d]

  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <div className="h-[100vh] w-full"></div>
      <div className="h-[50vh] w-full"></div>
      <div className="relative poster-wrapper w-full flex flex-col items-center h-[1000vh]">
        <div className="absolute w-[1200px] z-10 h-[1000vh] py-[400px] flex flex-col justify-between">
          {cards.map((card, index) => (
            <div key={index} className={`w-full flex ${card}`}>
              <p className="bg-white max-w-[350px] py-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, quo provident. Pariatur blanditiis ea quia quaerat
                necessitatibus nobis sit error iste deleniti, quis sed aliquam
                mollitia tempora! Aut, neque debitis.
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[400px] sticky top-[20px] poster">
          <img src="/poster-1.jpg" alt="..." />
          <img
            src="/poster-2.png"
            alt="..."
            className="p-2 absolute top-0 opacity-0"
          />
          <img
            src="/poster-3.png"
            alt="..."
            className="p-3 absolute top-0 opacity-0"
          />
          <img
            src="/poster-4.webp"
            alt="..."
            className="p-4 absolute top-0 opacity-0"
          />
          <img
            src="/poster-5.png"
            alt="..."
            className="p-5 absolute top-0 opacity-0"
          />
          <img
            src="/poster-6.png"
            alt="..."
            className="p-6 absolute top-0 opacity-0"
          />
          <img
            src="/poster-7.webp"
            alt="..."
            className="p-7 absolute top-0 opacity-0"
          />
          <img
            src="/poster-8.webp"
            alt="..."
            className="p-8 absolute top-0 opacity-0"
          />
          <img
            src="/poster-9.png"
            alt="..."
            className="p-9 absolute top-0 opacity-0"
          />
          <img
            src="/poster-10.png"
            alt="..."
            className="p-10 absolute top-0 opacity-0"
          />
          <img
            src="/poster-11.png"
            alt="..."
            className="p-11 absolute top-0 opacity-0"
          />
        </div>
      </div>
      <div className="h-[50vh] w-full"></div>
      <div className="h-[100vh] w-full"></div>
    </div>
  );
};

export default Poster;
