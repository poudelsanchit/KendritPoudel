import { PiInstagramLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaBasketball } from "react-icons/fa6";
import { PiFacebookLogoFill } from "react-icons/pi";
import Intro from './Intro';
import AboutMe from './AboutMe';
import Kendrit from '../assets/kp1.png'
import { useRef } from 'react';
import FramerMagnetic from '../Components/FramerMagnetic';
import Career from "./Career";
const Body = () => {
  const aboutMeRef = useRef(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
  
const linkItems = ["ABOUT", "JOURNEY", "PROJECTS", "CONTACT"];


  return (
    <>
      <div className=" bg-bg-dark h-auto text-txtprimary font-poppins flex justify-end ">
        <div className="w-2/12  h-full flex justify-center items-center fixed right-0 top-0  ">
          {/* make it float fixed on the position */}
          <div className="h-5/6 w-6/12  flex flex-col items-end    ">
            <div className="font-Poppins text-sm font-medium z-50 flex flex-col tracking-wider gap-1">
              {linkItems.map((item, index) => (
                <div key={index} className={index===0? "flex justify-end cursor-pointer": "flex justify-end cursor-pointer text-txttertiary
                "}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/12  h-full flex justify-center items-center fixed left-0 top-0 ">
          {/* make it float fixed on the position */}
          <div className="h-5/6 w-7/12  flex flex-col justify-between   ">
            <div className="font-Poppins font-bold z-50">
              <img src={Kendrit} alt="" className="h-12 cursor-pointer" />
            </div>
            <div className="flex flex-col gap-10  text-xl  ">
              {links.map((items) => {
                return (
                  <FramerMagnetic>
                    <a href={items?.url} target="_blank">
                      {" "}
                      <div className="cursor-pointer h-10 w-10 hover:bg-txtsecondary hover:text-black transition-all rounded-full flex justify-center items-center">
                        {items?.icon}
                      </div>
                    </a>
                  </FramerMagnetic>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" sm:w-8/12 w-10/12 flex flex-col sm:gap-5 gap-20 z-10 ">
          <Intro scrollToAboutMe={scrollToAboutMe} />
          <AboutMe ref={aboutMeRef} />
          {/* <Career /> */}
        </div>
        <div className="sm:w-2/12 w-[2%]"></div>
      </div>
    </>
  );
}

export default Body