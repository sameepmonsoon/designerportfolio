//@ts-nocheck

import { useState, useEffect } from "react";
import Logo from "../../../Components/LogoContainer/Logo";
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";
import { RiMenuLine, IoCloseSharp } from "react-icons/all";
import { Link as ScrollLink } from "react-scroll";
type NavLinks = {
  LinkName: Array<any>;
  scrollToSkills: () => void;
};
const Navbar = (props: NavLinks) => {
  const { LinkName } = props;
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos, visible]);

  return (
    <div
      className={` z-[10] border-b-[0px] font-sans dark:border-b-white/20 bg-white/90 fixed h-[80px] backdrop-blur-sm w-[100vw] flex flex-row px-[2rem] items-center justify-center ${
        !visible
          ? "-translate-y-[102%]  transition-transform ease-in-out duration-[300ms] z-[10]"
          : "translate-y-0  transition-transform ease-in-out duration-[500ms] z-[10]"
      }`}>
      <Logo />
      <div className="relative flex h-[100%] z-1 flex-row flex-1 justify-end items-center gap-0 text-[17px] text-deep-blue font-[600] font-fanstasy">
        <div className="hidden relative capitalize md:flex  justify-center items-center gap-1">
          {LinkName.map((name, index) => (
            <ScrollLink
              smooth={true}
              duration={500}
              key={index}
              to={name.link}
              className={`group px-4 relative cursor-pointer
              hover:text-deep-blue h-[2rem] flex justify-center items-center rounded-[4px]   hover:rounded-none border-b-[2px] border-b-transparent
`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                props.scrollToSkills;
              }}>
              {name.label}
              <span
                className={`absolute bg-transparent w-0 group-hover:w-[70%] h-full transition:all duration-200 group-hover:border-b-[2px] border-b-[black] border-b-[2px] z-10`}>
                &nbsp;
              </span>
            </ScrollLink>
          ))}
        </div>
        {/* <ToggleButton /> */}
      </div>
      <div className="flex relative md:hidden text-deep-blue cursor-pointer items-center justify-center select-none z-[3]">
        <span onClick={handleNav}>
          {nav ? <IoCloseSharp size={27} /> : <RiMenuLine size={27} />}
        </span>
      </div>
      <div
        className={
          nav
            ? `fixed  md:hidden py-2 left-0 top-[3.6rem] opacity-1 transition-all ease-in-out duration-[400ms] z-[5] flex flex-col justify-start items-center border-b-[0px] border-b-white/20 min-w-full h-[15rem] bg-white dark:bg-deep-blue text-deep-blue  dark:text-white pl-5 pt-1 gap-3 uppercase overflow-hidden ${
                !visible
                  ? "-translate-y-[100%]  transition-transform ease-in-out duration-[500ms] z-[5]"
                  : "translate-y-0  transition-all ease-in-out duration-[200ms] z-[5]"
              }`
            : "fixed md:hidden left-0 top-[-30rem] transition-all ease-in-out duration-[400ms] z-[5] flex flex-col justify-start items-center  min-w-full h-[20rem] bg-white dark:bg-deep-blue text-deep-blue  dark:text-white pl-5 pt-1 gap-3 uppercase overflow-hidden"
        }>
        {LinkName.map((name, index) => (
          <ScrollLink
            smooth={true}
            duration={500}
            key={index}
            to={name.link}
            className={`pt-[0px] relative cursor-pointer font-[400] w-[50%] h-[4rem] flex flex-row justify-center z-[] items-center border-b-[rgba(255,255,255,0.9)] text-[17px]  pl-1 hover:bg-dark-grey/20 rounded-[1px] `}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}>
            {name.label}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
