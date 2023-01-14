import React, { useState } from "react";
import RowContainer from "./RowContainer/RowContainer";
import Keyboard from "./Keyboard/Keyboard";
import { IoMdCloudyNight } from "react-icons/io";

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="m-0 h-screen from-[#141E30] to-[#243B55] dark:bg-gradient-to-b">
        <button
          onClick={toggleTheme}
          class="focus:shadow-outline absolute right-5  top-2 mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-800 bg-gray-700 text-white  transition-colors dark:bg-indigo-100 dark:text-black"
        >
          <IoMdCloudyNight />
        </button>
        <h1 className="m-4 text-5xl font-extrabold text-[#5691c8] dark:text-white">
          WORDLE
        </h1>
        <RowContainer />
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;
