import { forwardRef } from "react"
import React from 'react';
import { BiSolidRightArrow } from "react-icons/bi";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-20 gap-4 " ref={ref}>
        <div className="tracking-[0.4em] font-semibold flex items-center">
          ABOUT ME
        </div>
        <div className="flex flex-wrap sm:text-7xl text-4xl  font-[750] tracking-tight">
          <p>
            I'm a{" "}
            <span className="text-txtsecondary">passionate architect </span>{" "}
            with strong focus, expertly weaving dreams into vibrant, sustainable
            spaces of timeless elegance.
          </p>
        </div>
      </div>
    </>
  );

   
}
)

export default AboutMe;
