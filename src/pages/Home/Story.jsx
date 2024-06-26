import React, { useEffect, useRef } from "react";
import CircleDoubleLineThrough from "../../svg/CircleDoubleLineThrough";
import Poster from "../../components/Poster";
import gsap from "gsap";

const Story = () => {
  const para = useRef();

  useEffect(() => {
    const spans = document.querySelectorAll(".para-span");
    const step = 1 / spans.length;

    gsap.to(para.current, {
      scrollTrigger: {
        trigger: para.current,
        start: "top 95%",
        end: "bottom 5%",
        onUpdate: ({ progress }) => {
          spans.forEach((span, i) => {
            gsap.to(span, {
              duration: 0.25,
              opacity: () =>
                progress > i * step && progress < (i + 1) * step ? 1 : 0.25,
            });
          });
        },
      },
    });
  }, []);

  return (
    <div
      id="story"
      className="text-lightRed flex flex-col gap-7 sm:gap-8 lg:gap-10 items-center text-center min-h-screen -mt-[250px] bg-purpleRadial w-full"
    >
      <span className="text-xl xs:text-2xl font-druk leading-[0.8em]">
        story
      </span>

      <div className="w-[100px] h-[1px] bg-current"></div>

      <h2 className="heading-primary font-druk leading-[0.8em] mt-2 max-w-[11.25em] w-[90%]">
        THE BEGINNING OF THE END
      </h2>

      <div className="flex gap-3 my-2 sm:my-4">
        <div className="w-[32px] sm:w-[36px] lg:w-[42px]">
          <CircleDoubleLineThrough />
        </div>

        <div className="w-[32px] sm:w-[36px] lg:w-[42px] aspect-square bg-current rounded-full"></div>
      </div>

      <p
        ref={para}
        className="sm:text-lg !leading-[1.5] font-crime font-bold max-w-[610px] w-[90%]"
      >
        <span className="para-span">
          The Doomsday Clock has moved too close to midnight to turn back the
          hands of time.
        </span>{" "}
        <span className="para-span">
          Earth is ALMOST beyond repair and the damage has been officially
          considered irreversible.
        </span>{" "}
        <span className="para-span">
          The most influential people develop Project Beyond, a mission to
          inhabit Mars and relocate the world’s population...
        </span>
      </p>

      <Poster />
    </div>
  );
};

export default Story;
