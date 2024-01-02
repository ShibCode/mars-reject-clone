import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const cards = [
  {
    align: "justify-start",
    content: [
      {
        weight: 400,
        value: "After numerous expeditions, project beyond reveals that mars' ",
      },
      {
        weight: 700,
        value: "Lack of resources ",
      },
      {
        weight: 400,
        value: "Means Earth must primarily provide for its red neighbor.",
      },
    ],
  },
  {
    align: "justify-end",
    content: [
      {
        weight: 400,
        value: "Fueled by the promise of a new home, earth undergoes an ",
      },
      {
        weight: 700,
        value: "Industrial revolution ",
      },
      {
        weight: 400,
        value: "To prepare mars for human life.",
      },
    ],
  },
  {
    align: "justify-center",
    content: [
      {
        weight: 400,
        value:
          "A band of rebels ventures to mars, only to be confronted with a ",
      },
      {
        weight: 700,
        value: "Brutal Reality...",
      },
    ],
  },
  {
    align: "justify-start",
    content: [
      {
        weight: 400,
        value: "The 0.1% elite have been ",
      },
      {
        weight: 700,
        value: "Hand-Picked ",
      },
      {
        weight: 400,
        value:
          "By private interests to live on mars, leaving the rest of humanity behind.",
      },
    ],
  },
  {
    align: "justify-end",
    content: [
      {
        weight: 400,
        value:
          "No plans of relocation in sight, but the privileged few are living ",
      },
      {
        weight: 700,
        value: "The high life ",
      },
      {
        weight: 400,
        value: "on the back of earth's labor",
      },
    ],
  },
  {
    align: "justify-center",
    content: [
      {
        weight: 400,
        value:
          "The deceit is broadcast back to earth and from the shadows emerges a unified force, known as ",
      },
      {
        weight: 700,
        value: "Mars rejects",
      },
    ],
  },
];

const Poster = () => {
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
      { rotateZ: -5, rotateX: -30, y: 50 },
      {
        rotateZ: 0,
        rotateX: 0,
        y: -10,
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
      scale: 1.025,
      scrollTrigger: {
        trigger: ".poster-wrapper",
        start: "top 20px",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative poster-wrapper w-full flex flex-col items-center h-[560vh]">
        <div className="absolute w-[1100px] z-10 h-[560vh] py-[110vh] flex flex-col justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-full flex text-[22px] font-tightSpot italic text-blueCharcoal leading-[1.05] ${
                card.align
              } ${
                card.align === "justify-center" ? "text-center" : "text-start"
              }`}
            >
              <p className="bg-white max-w-[280px] rounded-md pt-4 pb-6 px-6">
                {card.content.map((content, index) => (
                  <span key={index} style={{ fontWeight: content.weight }}>
                    {content.value}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[450px] sticky top-0 h-screen flex items-center poster">
          <div className="relative">
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
      </div>
    </div>
  );
};

export default Poster;
