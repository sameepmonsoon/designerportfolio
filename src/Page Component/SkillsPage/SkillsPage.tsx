import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="relative flex flex-col justify-center items-center gap-5">
      <div className=" absolute min-w-full space-x-10 top-[-10%] sm:top-[-10%] md:top-[-15%] lg:top-[-35%] z-[-10] text-[2rem] sm:text-[2.5rem] md:text-[3.8rem] lg:text-[5rem] h-auto sm:h-[10rem] p-1 md:h-[22rem] text-[#1b1b1b] font-[400] text-center flex justify-center  md:text-start capitalize overflow-hidden">
        making the complicated simple and finding beauty in truth.{" "}
      </div>
      <p
        style={{
          backgroundColor: backgroundColor,

          color: `${backgroundColor === "black" ? "grey" : "black"}`,
        }}
        className=" w-full relative flex flex-col justify-center items-center px-2 lg:top-5 top-14 h-40 sm:h-20 text-deep-blue dark:text-white ">
        <span className="capitalize text-xl font-[600] text-start w-full border-t-[1px] border-t-black py-5">
          What i <span>do?</span>
        </span>
        <span
          style={{
            color: `${backgroundColor === "black" ? "white" : "black"}`,
          }}
          className="w-full px-10 text-[18px] font-[500]">
          I am interested in the field of Software Development Life Cycle
          SDLC.These are some of my abilities and experiences.
        </span>
      </p>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className="flex flex-col justify-start items-center px-0 md:px-10 sm:flex-col sm:pl-[0rem] md:py-10  w-full min-h-screen py-10 overflow-hidden">
        <motion.div
          className="text-[40px] capitalize flex flex-col gap-5 w-full justify-center items-center"
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
          <div className="flex flex-row justify-center lg:justify-center items-center gap-x-[3.3rem] gap-y-[2.5rem] flex-wrap min-w-full p-2  h-full">
            <motion.div
              className="w-full"
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
                className={`text-black  border-[1px] min-h-[15rem] min-w-full flex flex-col justify-start items-start  ${
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
                <p className="text-[22px] w-full">
                  I specialize in creating visually appealing, engaging, and
                  useful digital experiences.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row justify-center lg:justify-center items-center gap-x-[3.3rem] gap-y-[2.5rem]  flex-wrap w-full p-2 sm:min-w-[70%] md:min-w-full h-full">
            <motion.div
              className="w-full"
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
                className={`text-black border-[1px]  flex min-h-[15rem] min-w-full flex-col justify-start items-start  ${
                  backgroundColor === "black"
                    ? " border-gray-100/10"
                    : "border-gray-00 "
                } p-3 rounded-md`}>
                <div
                  style={{
                    color: `${backgroundColor === "black" ? "white" : "black"}`,
                  }}
                  className={`text-black border-[2px] h-[4rem] min-w-[4rem] max-w-[14rem] flex justify-center items-center ${
                    backgroundColor === "black"
                      ? " border-gray-100/10"
                      : "border-gray-00 "
                  } p-2 rounded-lg`}>
                  QA
                </div>
                <div
                  style={{
                    color: `${backgroundColor === "black" ? "white" : "black"}`,
                  }}
                  className={`text-black border-[0px] h-[4rem] min-w-full text-[38px] flex justify-start items-center ${
                    backgroundColor === "black"
                      ? " border-gray-100/10"
                      : "border-gray-00 "
                  } p-0 rounded-lg`}>
                  Quality Assurance
                </div>
                <p className="text-[22px] w-full">
                  As a Quality Assurance (QA) professional, I recognize the
                  significance of providing high-quality products and services
                  that meet the needs of customers.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row justify-center lg:justify-center items-center gap-x-[3.3rem] gap-y-[2.5rem]  flex-wrap w-full p-2 sm:min-w-[70%] md:min-w-full h-full">
            <motion.div
              className="w-full"
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
                className={`text-black border-[1px] min-h-[15rem] min-w-full flex flex-col justify-start items-start  ${
                  backgroundColor === "black"
                    ? " border-gray-100/10"
                    : "border-gray-00 "
                } p-3 rounded-md`}>
                <div
                  style={{
                    color: `${backgroundColor === "black" ? "white" : "black"}`,
                  }}
                  className={`text-black border-[2px] h-[4rem] minw-[4rem] max-w-[15rem] flex justify-center items-center ${
                    backgroundColor === "black"
                      ? " border-gray-100/10"
                      : "border-gray-00 "
                  } p-2 rounded-lg`}>
                  Frontend
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
                  Html & Css
                </div>
                <p className="text-[22px] w-full">
                  I am passionate about developing stunning and useful user
                  interfaces that offer an exceptional user experience as a
                  Frontend Developer with a focus on HTML and CSS.
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
