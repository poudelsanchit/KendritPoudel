import React from 'react'
import Body from './Components/Body';
import BottomNavBar from './Components/BottomNavBar';
import {motion} from 'framer-motion'
import useMousePosition from './utils/useMousePosition';
import Career from './Components/Career';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
const App = () => {
  const {x,y}= useMousePosition();

  const variants ={
    default:{
      x:x-20,
      y:y-20
    }
  }

  return (
    <> 
      <div>
      <motion.div
          className=" h-10 w-10  bg-txtsecondary rounded-full fixed top-0 left-0 hidden sm:block " 
          variants={variants}
          animate="default"
          transition={{ type: "tween", ease: "backOut" }}
          style={{ zIndex: 0 }}
        />
        <Body />
        <Career/>
        <Projects/>
        <Contact/>

        <BottomNavBar />
      </div>
    </>
  );
}

export default App