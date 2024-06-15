import React from "react";

const benefits = [
  { icon: "/check-over-hand.svg", text: "Key role in shaping the story" },
  { icon: "/alert.svg", text: "Free digital copy of 1st graphic novel" },
  { icon: "/money-bag.svg", text: "Savings on items in our online store" },
  { icon: "/rocket.svg", text: "Early access to new launches" },
  { icon: "/lock.svg", text: "Unlock roadmap activations" },
];

const AboutArt = () => {
  return (
    <div className="flex justify-center text-lightRed about-art-section transition-all duration-300 -mt-6 xs:-mt-3 sm:-mt-8 lg:-mt-4">
      <div className="max-w-[645px] w-[90%] flex flex-col gap-16 xs:gap-20">
        <div className="flex flex-col gap-5 sm:gap-10">
          <div className="h-[1px] bg-current mb-4 sm:mb-0"></div>

          <span className="text-xl xs:text-2xl font-druk leading-[0.8em]">
            about the art
          </span>

          <p className="xs:text-lg sm:text-xl !leading-[1.5] font-interTight font-medium flex flex-col gap-2.5 xs:gap-4 sm:gap-7">
            <span>
              The Mars Rejects collection aims to showcase the symbiotic
              relationship between art, technology, and design. Hand-crafted in
              a comic book style, each character is meticulously curated, with
              up to 24 intricate attributes generated algorithmically.
            </span>
            <span>
              We will breathe life into these characters by providing them with
              storylines within the Mars Rejects universe, representing a
              diverse range of factions around the globe.
            </span>
            <span>
              With over 500 unique hand-drawn traits, each item in the
              collection is a testament to our deep respect for the craft. The
              pieces are currently being created without any deadline
              constraints, and we are committed to only launching art that we
              would be proud to display on our own walls.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6 xs:gap-8">
          <span className="text-xl xs:text-2xl font-druk leading-[0.8em]">
            benefits for holders
          </span>

          <ul>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="h-[70px] xs:h-[80px] flex items-center gap-4 xs:gap-6 border-t border-lightRed border-opacity-30 last:border-b"
              >
                <img src={benefit.icon} alt="..." className="w-7 xs:w-8" />
                <span className="xs:text-lg sm:text-xl font-medium font-inter">
                  {benefit.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutArt;
