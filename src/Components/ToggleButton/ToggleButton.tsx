import React, { useState, useEffect, useRef } from "react";
import { BiSun } from "react-icons/bi";
import { CiSun } from "react-icons/ci";
import { TbMoon } from "react-icons/tb";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(
    localStorage.getItem("toggle") === "true"
  );
  const prevToggleRef = useRef(toggle);
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 200);
  };

  const handleToggle = () => {
    const newToggle = !toggle;
    prevToggleRef.current = toggle;
    setToggle(newToggle);
    localStorage.setItem("toggle", `${newToggle}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={() => {
        handleThemeToggle();
        handleToggle();
      }}
      className="cursor-pointer w-[3.3rem] h-[2.5rem] flex flex-row md:justify-end md:items-center justify-start items-center">
      {theme === "dark" ? (
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <BiSun size={25} />
        </span>
      ) : (
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <TbMoon size={25} />
        </span>
      )}
    </div>
  );
};

export default ToggleButton;
