import Sun from "./Sun";
import Moon from "./Moon";
import { useState } from "react";
import "./DarkMode.css";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const handleOnClik = (e) => {
    const switchWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const isLeftHalf = clickX <= switchWidth / 2;
    setDarkMode(isLeftHalf);
  };

  if (darkMode) {
    window.document.documentElement.classList.add("dark");
  } else {
    window.document.documentElement.classList.remove("dark");
  }

  return (
    <div
      onClick={(e) => handleOnClik(e)}
      className="w-24 relative flex justify-between items-center bg-orange-200 dark:bg-indigo-800 hover:cursor-pointer hover:brightness-105 rounded-full p-2.5"
    >
      <div
        className={`w-8 h-8 bg-white rounded-full opacity-30 absolute  ${
          !darkMode ? "moveR" : "moveL"
        }`}
      ></div>
      <Moon
        color="text-yellow-500"
        fill={darkMode && "yellow"}
        classes={darkMode && "transform scale-125"}
      />
      <Sun
        color="text-yellow-500"
        fill={!darkMode && "yellow"}
        classes={!darkMode && "transform scale-125"}
      />
    </div>
  );
}

export default DarkMode;
