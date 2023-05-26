import React, { useEffect, useRef, useState } from "react";
import defaulUserImage from "../../assets/userImage.svg";
import { motion, AnimatePresence } from "framer-motion";
import image2 from "../../assets/uddhab-2.jpg";
import { TypeAnimation } from "react-type-animation";
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

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const styles = {
    background: 'url("/path/to/image.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const texts = ["esign", "ream", "eliver"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      id="hero"
      className="myDiv font-sans snap-start min-h-screen gap-[10rem] flex flex-col items-center md:items-start relative md:top-0 justify-center dark:bg-deep-blue">
      <div className="relative w-screen h-screen text-black flex flex-col gap-2 justify-start items-start px-1">
        <div className="para w-full min-h-screen sm:h-[50%] flex flex-col sm:flex-row justify-start items-center overflow-hidden ">
          <div className="flex flex-col min-w-[62%] justify-start items-start order-2 sm:order-1">
            <p className="w-auto p-[1rem] order-0 text-[20px] flex justify-center items-center h-10 sm:text-[22px] font-[600] text-gray-500">
              <span> {userIntroduction}</span>
            </p>
            <div className="group relative top-[3rem] md:top-[-2rem] text-[5rem] sm:text-[6rem] sm:text-center md:text-[12rem] lg:text-[14rem]  min-w-[75%] h-auto sm:h-[10rem] p-1 md:h-[19rem] text-[#1b1b1b] font-[fantasy,sans] font-[900] z-[-10] text-center flex justify-center  md:text-start whitespace-rap  overflow-hidden">
              <span className="relative left-0 flex justify-end  min-w-40  h-full">
                D
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[currentIndex]}
                  className="Uppercase text-yellow flex-1 flex justify-start"
                  initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -400 }}
                  transition={{
                    type: "spring",
                    damping: 50,
                    stiffness: 500, // Increase the stiffness for a stronger spring effect
                    duration: 0.7,
                  }}>
                  {texts[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <div className=" absolute top-[75%] sm:top-[75%] md:top-[60%] md:left-[10%] z-[-10] text-[9rem] sm:text-start md:text-[12rem] lg:text-[14rem] sm:min-w-[75%] h-auto sm:h-[10rem] p-1 md:h-[19rem] object-cover   text-[#1b1b1b]/30 font-[fantasy,sans] font-[700] text-center flex justify-center  md:text-start whitespace-rap capitalize overflow-hidden">
            with
          </div>
          <motion.div
            className="relative order-1 md:order-2 w-full min-h-[50%] sm:h-[50%] min-w-[60%] px-10 sm:min-w-[40%] right-[-2.4rem] sm:right-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -100,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 70,
                },
              },
            }}>
            <img
              src={userImage ? userImage : defaulUserImage}
              alt={""}
              className="absolute opacity-[0.95] w-[20rem] h-[17rem] sm:w-[25rem] midmd:w-[22rem] md:w-[18rem] bigmd:max-w-[90%] bigmd:w-[88%] lg:w-[32rem] top-10 sm:top-[-10rem] left-[0px] sm:left-0 lg:left-auto sm:min-h-[40rem] p-[2px] rounded-lg object-cover sm:object-contain lg:object-cover"
            />
          </motion.div>
        </div>
        <div className="para w-full z-[-1] relative top-0 md:top-[-8rem] lg:top-[-18rem] min-h-screen sm:h-[50%] flex flex-col sm:flex-row justify-start items-center overflow-hidden">
          <div className="flex flex-col justify-start items-start order-1 sm:order-2">
            <div className="text-[5rem]  sm:text-[6rem] sm:text-center md:text-[10rem] lg:text-[13.5rem] sm:min-w-[75%] h-auto sm:h-[10rem] p-1 md:h-[19rem] text-[#1b1b1b]/60 font-[fantasy,sans] font-[700] z-[-10] text-center flex justify-center  md:text-start whitespace-rap capitalize overflow-hidden">
              {homeBgName}
            </div>
            <p className="w-auto p-2 order-3 text-[17px] sm:text-[18px] font-[600]">
              Everything is designed. Few things are designed well.
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
                y: -100,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                },
              },
            }}>
            <img
              src={image2 ? image2 : defaulUserImage}
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
