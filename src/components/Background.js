import React from "react";

const Background = ({ center = false }) => {
  return (
    <div
      className={`w-full h-full absolute z-[-1] left-0 ${center ? "-top-9" : ""}`}
    >
      <div
        className={`absolute w-full h-full bg-black/80 ${center ? "top-9" : ""}`}
      />
      <div className="flex flex-col space-y-2 overflow-hidden justify-center">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                alt={`bgImage-${rowIndex * 4 + i + 1}`}
                src={`/assets/a${rowIndex * 4 + i + 1}.png`}
                className="h-[125px]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
