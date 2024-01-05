import { forwardRef } from "react"
import React from 'react';

const AboutMe = React.forwardRef((props, ref) => {
  return (

    <>
     <div className='flex flex-col min-h-screen pt-20 ' ref={ref}>
    <div className="tracking-[0.2em] font-semibold">ABOUT ME</div>
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
  )

   
}
)

export default AboutMe;
