import React from "react";
import CircleDoubleLineThrough from "../../svg/CircleDoubleLineThrough";

const Story = () => {
  return (
    <div className="text-lightRed flex flex-col gap-10">
      <span className="text-2xl font-druk leading-[0.8em]">story</span>

      <div className="w-[100px] h-[1px] bg-current"></div>

      <h2 className="text-[88px] font-druk leading-[0.8em] mt-2">
        THE BEGINNING OF THE END
      </h2>

      <div className="flex gap-2 my-4">
        <div className="w-[32px]">
          <CircleDoubleLineThrough />
        </div>

        <div className="w-[32px] aspect-square bg-current rounded-full"></div>
      </div>

      <p className="text-lg !leading-[1.3] font-crime font-bold">
        <span>
          The Doomsday Clock has moved too close to midnight to turn back the
          hands of time.
        </span>
        <span>
          Earth is ALMOST beyond repair and the damage has been officially
          considered irreversible.
        </span>
        <span>
          The most influential people develop Project Beyond, a mission to
          inhabit Mars and relocate the world’s population...
        </span>
      </p>
    </div>
  );
};

export default Story;
