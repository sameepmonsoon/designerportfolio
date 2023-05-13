//@ts-nocheck
import React, { useEffect, useState } from "react";
import defaulUserImage from "../../assets/userImage.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../../Components/SocialMediaIcons/SocialMediaIcons";
import {
  AiFillGithub,
  GrLinkedinOption,
  AiOutlineInstagram,
  BsFacebook,
  ImTwitter,
} from "react-icons/all";
import { Link as ScrollLink } from "react-scroll";
const Hero = (props: {
  userName: string | any;
  userIntroduction: string | any;
  resumeButton?: React.ReactElement;
  optionalButton?: string;
  optionalButtonPath?: string;
  userImage: string;
  homeBgName: string;
}) => {
  const {
    userName,
    userIntroduction,
    resumeButton,
    optionalButton,
    optionalButtonPath,
    homeBgName,
    userImage,
  } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const styles = {
    background: 'url("/path/to/image.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <section
      onMouseMove={handleMouseMove}
      id="hero"
      className="myDiv snap-start min-h-screen gap-[10rem]  flex flex-col items-center md:items-start relative md:top-0 justify-center dark:bg-deep-blue ">
      <div className="w-screen h-screen text-black flex flex-col gap-2 justify-start items-start">
        <div className="para w-full min-h-screen sm:h-[50%] flex flex-col sm:flex-row justify-start items-center overflow-hidden">
          <div className="flex flex-col justify-start items-start  order-2 sm:order-1">
            <div className="text-[3rem]  sm:text-[6rem] sm:text-center md:text-[10rem] lg:text-[14rem] sm:min-w-[75%] h-auto sm:h-[10rem] p-1 md:h-[19rem] text-[#1b1b1b] font-[fantasy,sans] font-[900] z-[-10] text-center flex justify-center  md:text-start whitespace-rap capitalize overflow-hidden">
              {userName}
            </div>
            <p className="w-auto p-1 order-3 text-[13px] sm:text-[16px] font-[600] text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              tenetur ipsa ad at corporis minus architecto illum odit corrupti
              eos? Sint cumque aperiam impedit repellat facilis laudantium qui
              fugit reprehenderit.
            </p>
          </div>
          <div className=" absolute  top-[60%] left-[10%] z-[-10] text-[9rem] sm:text-start md:text-[10rem] lg:text-[14rem] sm:min-w-[75%] h-auto sm:h-[10rem] p-1 md:h-[19rem] text-[#1b1b1b]/10 font-[fantasy,sans] font-[700] text-center flex justify-center  md:text-start whitespace-rap capitalize overflow-hidden">
            with
          </div>
          <motion.div
            className="order-1 md:order-2 h-[50%] sm:h-[50%] min-w-[60%] px-10 sm:min-w-[40%] relative right-[-2.4rem] sm:right-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0,
                x: 100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <img
              src={userImage ? userImage : defaulUserImage}
              alt={""}
              className=" w-full h-full p-[2px] rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="para w-full z-[-1] relative top-0 md:top-[-8rem] lg:top-[-18rem] min-h-screen sm:h-[50%] flex flex-col sm:flex-row justify-start items-center overflow-hidden">
          <div className="flex flex-col justify-start items-start order-2">
            <div className="text-[3rem]  sm:text-[6rem] sm:text-center  md:text-[10rem] lg:text-[14rem] sm:min-w-[75%] h-auto sm:h-[10rem] p-1 md:h-[19rem] text-[#1b1b1b]/50 font-[fantasy,sans] font-[700] z-[-10] text-center flex justify-center  md:text-start whitespace-rap capitalize overflow-hidden">
              {homeBgName}
            </div>
            <p className="w-auto p-1 order-3 text-[13px] sm:text-[16px] font-[600]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              tenetur ipsa ad at corporis minus architecto illum odit corrupti
              eos? Sint cumque aperiam impedit repellat facilis laudantium qui
              fugit reprehenderit.
            </p>
          </div>
          <motion.div
            className="order-1 h-[50%] sm:h-[70%] min-w-[60%] px-10 sm:min-w-[40%] relative left-[-2.4rem] sm:left-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <img
              src={userImage ? userImage : defaulUserImage}
              alt={""}
              className=" w-full h-full p-[2px] rounded-lg object-cover sm:object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
