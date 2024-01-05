import React, { useState } from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaBasketball } from "react-icons/fa6";
import { PiFacebookLogoFill } from "react-icons/pi";
import Intro from './Intro';
import AboutMe from './AboutMe';
import Kendrit from '../assets/kp1.png'
import Works from './Works';
import { useRef } from 'react';
import FramerMagnetic from '../Components/FramerMagnetic';
const Body = () => {

  const links = [
    {
      url: "https://www.instagram.com/kendritpoudel/",
      icon: <PiInstagramLogoFill />,
    },
    {
      url: "",
      icon:     <PiLinkedinLogoFill />,
      
    },
    {
      url: "",
      icon: <FaBasketball />,
    },
    {
      url: "https://www.facebook.com/kendrit.poudel",
      icon:     <PiFacebookLogoFill />,

    },
  ];


  return (
    <>
      <div className=" bg-bg-dark h-auto text-txtprimary font-poppins flex justify-end ">
       
        <div className="w-2/12  h-full flex justify-center items-center fixed left-0 ">
          {/* make it float fixed on the position */}
          <div className="h-5/6 w-7/12  flex flex-col justify-between   ">
            <div className="font-Poppins font-bold z-50">
              <img src={Kendrit} alt=""  className='h-12'/> 
            </div>
            <div className="flex flex-col gap-10  text-xl  ">
              {links.map((items) => {
                return (
                  <FramerMagnetic>
                  <a href={items?.url} target="_blank">
                    {" "}
                    <div
                    
                    className="cursor-pointer h-10 w-10 hover:bg-txtsecondary hover:text-black transition-all rounded-full flex justify-center items-center">
                      {items?.icon}
                    </div>
                  </a>
                  </FramerMagnetic>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" sm:w-8/12 w-10/12 flex flex-col sm:gap-5 gap-20 z-10">
          <Intro />
          <AboutMe />
          <Works />

        </div>
        <div className="sm:w-2/12 w-[2%]"></div>
      </div>
    </>
  );
}

export default Body