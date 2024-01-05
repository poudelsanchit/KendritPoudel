import React from 'react';
import Graph from '../assets/blob.svg';
import KendritImage from '../assets/kendrit.png';

const Intro = ({ scrollToAboutMe }) => {
  const handleReadMoreClick = () => {
    // Call the prop function to scroll to the AboutMe section
    scrollToAboutMe();
  };

  return (
    <div className="flex lg:flex-row flex-col  h-auto sm:min-h-screen  gap-10">
      <div className="flex flex-col sm:w-full pt-48 gap-1">
        <div className="tracking-[0.2em] font-bold text-2xl">
          kendrit Poudel
        </div>
        <div className="flex flex-wrap text-7xl font-[750] pt-2 tracking-tight ">
          <p>
            <span className="text-txtsecondary text-5xl sm:text-7xl">ARCHITECT</span>{" "}
          </p>
        </div>
        <div className="flex flex-wrap text-xl  pt-2 font-normal  ">
          <p>
            <span className="text-txtprimary">
              I am a junior architect based in Nepal. After my Bachelor’s
              studies at Institute of Engineering, Pulchowk Campus, I started
              as an intern in Nepal. Architecture is my passion and my goal is
              to contribute to the skyline of my beloved city.
            </span>
          </p>
        </div>
        <div className="flex flex-wrap text-xl  pt-10 font-normal   ">
          {/* Button to trigger smooth scroll to AboutMe */}
          <div
            className="h-12 w-32 rounded-md bg-txtsecondary text-white flex justify-center items-center font-Poppins text-base cursor-pointer"
            onClick={handleReadMoreClick}
          >
            Read More
          </div>
        </div>
      </div>
      <div className="sm:w-2/3  sm:mt-28  flex justify-center">
        <img
          src={KendritImage}
          className="shape sm:w-[25rem] sm:h-[25rem] w-96 h-80  object-contain bg-txtsecondary "
        />
      </div>
    </div>
  );
};

export default Intro;
