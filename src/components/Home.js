import React, { useState } from "react";
import RowContainer from "./RowContainer/RowContainer";
import Keyboard from "./Keyboard/Keyboard";
import {IoMdCloudyNight} from "react-icons/io"

const Home = () => {
  const [darkTheme,setDarkTheme] = useState(false);
  const toggleTheme = () =>{
    setDarkTheme(!darkTheme)
  }
  console.log(darkTheme)
  return (
    <div className={darkTheme ? 'dark' :'' }>
      <div className="h-screen dark:bg-gradient-to-b from-[#141E30] to-[#243B55] m-0">
      <button onClick={toggleTheme} class="absolute right-5 top-5  inline-flex items-center justify-center w-10 h-10 mr-2 dark:text-black text-white transition-colors dark:bg-indigo-100 bg-gray-700 rounded-full  focus:shadow-outline border border-indigo-800">
      <IoMdCloudyNight/>
      </button>
      <h1 className="text-[#5691c8] dark:text-white m-4 text-5xl font-extrabold">WORDLE</h1>
      
    
      <RowContainer />
      <Keyboard />
      </div>
      
    </div>
  );
};

export default Home;
