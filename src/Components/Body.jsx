import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaBasketball } from "react-icons/fa6";
import { PiFacebookLogoFill } from "react-icons/pi";
import Intro from './Intro';
import AboutMe from './AboutMe';

const Body = () => {
  const links = [<PiInstagramLogoFill />,<PiLinkedinLogoFill />,<FaBasketball />, <PiFacebookLogoFill />];
  return (
    <>
      <div className=" bg-bg-dark h-auto text-txtprimary font-poppins flex justify-end">
        <div className="w-2/12  h-full flex justify-center items-center fixed left-0 ">
          {/* make it float fixed on the position */}
          <div className="h-5/6 w-7/12  flex flex-col justify-between  ">
            <div className="font-Poppins font-bold">KENDRIT</div>
            <div className="flex flex-col gap-10  text-xl ">
              {links.map((items) => {
                return (
                  <div className="cursor-pointer h-10 w-10 hover:bg-txtsecondary hover:text-black transition-all rounded-full flex justify-center items-center">
                    {items}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" sm:w-8/12 w-10/12 flex flex-col gap-5">
          <Intro />
          <AboutMe />
        </div>
        <div className="sm:w-2/12 w-[2%]"></div>
      </div>
    </>
  );
}

export default Body