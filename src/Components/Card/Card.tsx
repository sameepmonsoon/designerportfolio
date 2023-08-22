import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLinkOutline } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import { AiFillDribbbleCircle, AiOutlineLink } from "react-icons/ai";
import { RiDribbbleFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
type CardTypes = {
  otherSection?: boolean;
  cardTitle: string | any;
  cardDescription: string | any;
  cardImage: string;
  cardLinks?: any;
};
const Card = (props: CardTypes) => {
  const { cardTitle, cardDescription, cardImage, cardLinks, otherSection } =
    props;
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      <section
        className={
          otherSection
            ? `bg-white dark:bg-deep-blue h-[30rem] w-[22rem] md:h-[35rem] md:w-[35rem] border-[1px] rounded-[10px] overflow-hidden border-gray-100 dark:border-white/30 dark:hover:border-white/40 hover:border-gray-300 flex flex-col  relative cursor-pointer justify-start items-center`
            : `bg-white dark:bg-deep-blue  h-[16rem] w-[22rem] sm:h-[20rem] sm:w-[32rem] customSm:h-[25rem] customSm:w-[40rem] customMd:h-[30rem] customMd:w-[50rem] bigmd:h-[22rem] bigmd:w-[35rem] lg:h-[24rem] lg:w-[34.5rem] border-[1px] rounded-[10px] overflow-hidden border-gray-200  dark:border-white/30 dark:hover:border-white/40 hover:border-gray-300 flex flex-col md:flex-row relative cursor-pointer justify-start items-center `
        }
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        <div
          className={
            otherSection
              ? `hidden`
              : `siderDiv cursor-pointer bg-white z-10 absolute opacity-0 overflow-hidden flex flex-row justify-center items-center rounded-[5px] ${
                  mouseOver && "opacity-[1]"
                } h-[100%] w-[100%] transition-all ease-in-out duration-300 z-10 bg-white/30 backdrop-blur-sm`
          }>
          <div className="font-[roboto] h-[50%] w-[100%] absolute bottom-0 p-4 z-[0] bg-white/30 backdrop-blur-sm  text-deep-blue ">
            <div className="overflow-hidden m-0 w-full text-center md:px-0 min-h-[50%]">
              {cardDescription}
            </div>
          </div>
          <span className="absolute top-[70px] z-[10] flex flex-row gap-10  text-deep-blue bg-clip-text h-10">
            {cardLinks &&
              cardLinks.props.children &&
              cardLinks.props.children.map(
                (link: React.ReactNode, index: number) => (
                  <span
                    key={index}
                    className="group hover:text-gray-500 flex justify-center">
                    <span className="absolute rounded-full h-[2.8rem] w-[2.8rem] text-red group-hover:text-red z-[-1] md:bottom-[0] left-[100rem] bottom-[0]"></span>
                    {link}
                  </span>
                )
              )}
          </span>
        </div>
        <motion.div
          className={
            otherSection
              ? `order-1 py-2 m-0 md:w-full md:h-[50%] h-[10rem] w-[40%] hover:scale-100 `
              : `order-1  m-0 w-full h-full`
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 1 }}
          transition={{ type: "spring", bounce: 0.8, duration: 3 }}
          variants={{
            hidden: {
              y: -20,
            },
            visible: {
              y: 0,
            },
          }}>
          <img
            src={cardImage}
            alt="image"
            className="order-1 h-full rounded-[5px] w-full overflow-hidden mt-5"
          />
        </motion.div>
        {/* <div
          className={
            otherSection
              ? `order-2 flex justify-start items-center gap-3 flex-col relative w-[100%] h-[100%] text-deep-blue gap-y-2 dark:text-white bg-white dark:bg-deep-blue rounded-[5px] overflow-hidden`
              : `order-2 p-2 relative md:w-[100%] md:h-[100%] h-[90%] w-[100%] text-deep-blue dark:text-white flex flex-col gap-y-2 bg-white dark:bg-deep-blue rounded-[5px] overflow-hidden`
          }>
          <div className="overflow-hidden m-0 px-3 w-full text-center md:px-0">
            {cardDescription}
          </div>
        </div> */}
      </section>
      <p className="font-semibold text-black/70 text-[16px] m-0 p-1 text-start w-full overflow-hidden flex justify-start items-center gap-2">
        {cardTitle}
        <CgFigma size={18} className="text-pink-600 cursor-pointer " />
      </p>
    </div>
  );
};

export default Card;
