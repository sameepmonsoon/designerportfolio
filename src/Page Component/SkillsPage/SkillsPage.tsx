import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HoverCard from "../../Components/HoverCard/HoverCard";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
const SkillsPage = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const [textColor, setTextColor] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 1400 && scrollPosition < 2200) {
      setBackgroundColor("black");
      setTextColor("black");
    } else {
      setBackgroundColor("transparent");
      setTextColor("black");
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className=" absolute min-w-full space-x-10 top-[-20%] sm:top-[-10%] md:top-[-20%] lg:top-[-40%] z-[-10] text-[18px] sm:text-[2rem] lg:text-[5rem] h-auto sm:h-[10rem] p-1 md:h-[22rem] text-[#1b1b1b] font-[400] text-center flex justify-start  md:text-start capitalize overflow-hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, alias
        dolor! Quo maiores laudantium reiciendis in similique commodi
        repudiandae excepturi, libero obcaecati ad quos quasi magnam? Laborum
        dignissimos facere rerum!
      </div>
      <p
        style={{
          backgroundColor: backgroundColor,

          color: `${backgroundColor === "black" ? "white" : "black"}`,
        }}
        className="h-20 w-full relative flex justify-center items-center px-2 lg:top-5 top-14  text-deep-blue dark:text-white ">
        <span className="capitalize text-xl font-[600] text-start w-full border-t-[1px] border-t-black py-5">
          What i <span>do?</span>
        </span>
      </p>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className="flex flex-col justify-start items-center px-0 md:px-10 sm:flex-col sm:pl-[0rem] md:py-10  w-full min-h-screen py-10 overflow-hidden">
        <motion.div
          className="text-[40px] capitalize"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: {
              opacity: 0.9,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}>
          <div className="flex flex-row justify-center lg:justify-start items-center gap-x-[3.3rem] gap-y-[2.5rem]  flex-wrap w-full p-2 sm:min-w-[70%] md:w-full h-full mt-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: {
                  opacity: 0.9,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}>
              <div
                style={{
                  color: `${backgroundColor === "black" ? "white" : "black"}`,
                }}
                className={`text-black border-[1px]  flex flex-col justify-start items-start  ${
                  backgroundColor === "black"
                    ? " border-gray-100/10"
                    : "border-gray-00 "
                } p-3 rounded-md`}>
                <div
                  style={{
                    color: `${backgroundColor === "black" ? "white" : "black"}`,
                  }}
                  className={`text-black border-[2px] h-[4rem] w-[4rem] flex justify-center items-center ${
                    backgroundColor === "black"
                      ? " border-gray-100/10"
                      : "border-gray-00 "
                  } p-2 rounded-lg`}>
                  Ui
                </div>
                <div
                  style={{
                    color: `${backgroundColor === "black" ? "white" : "black"}`,
                  }}
                  className={`text-black border-[0px] h-[4rem] w-full flex justify-start items-center ${
                    backgroundColor === "black"
                      ? " border-gray-100/10"
                      : "border-gray-00 "
                  } p-0 rounded-lg`}>
                  Ui & ux design
                </div>
                <p className="text-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur commodi fugit eaque eveniet atque impedit labore
                  itaque repellendus delectus molestiae soluta quis
                  perspiciatis, et aliquam voluptatibus earum ex quibusdam at!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
