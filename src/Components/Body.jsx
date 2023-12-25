import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaBasketball } from "react-icons/fa6";
import { PiFacebookLogoFill } from "react-icons/pi";

const Body = () => {
  return (
    <div className=" bg-bg-dark h-auto text-txtprimary font-poppins flex justify-end">
      <div className="w-2/12  h-full flex justify-center items-center fixed left-0 ">

        {/* make it float fixed on the position */}
        <div className="h-5/6 w-7/12  flex flex-col justify-between  ">
          <div className="font-Poppins font-bold">KENDRIT</div>
          <div className="flex flex-col gap-10  text-xl ">
            <PiInstagramLogoFill className="cursor-pointer" />
            <PiLinkedinLogoFill className="cursor-pointer" />
            <FaBasketball className="cursor-pointer" />
            <PiFacebookLogoFill className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="pt-48 w-8/12 flex flex-col gap-52">
        <div className='flex flex-col'>
        <div className="tracking-[0.2em] font-semibold">ABOUT ME</div>
        <div className="flex flex-wrap text-7xl font-[750] pt-5 tracking-tight">
          <p>
            I'm a{" "}
            <span className="text-txtsecondary">passionate architect </span>{" "}
            with strong focus, expertly weaving dreams into vibrant, sustainable
            spaces of timeless elegance.
          </p>
        </div>
        </div>
        <div className='flex flex-col'>
        <div className="tracking-[0.2em] font-semibold">ABOUT ME</div>
        <div className="flex flex-wrap text-7xl font-[750] pt-5 tracking-tight">
          <p>
            I'm a{" "}
            <span className="text-txtsecondary">passionate architect </span>{" "}
            with strong focus, expertly weaving dreams into vibrant, sustainable
            spaces of timeless elegance.
          </p>
        </div>
        </div>
      
      </div>
      <div className="w-2/12"></div>
    </div>

  );
}

export default Body