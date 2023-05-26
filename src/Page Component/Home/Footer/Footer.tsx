import React from "react";
import SocialMediaIcons from "../../../Components/SocialMediaIcons/SocialMediaIcons";

import { Link } from "react-router-dom";
import image from "../../../assets/uddhab-3.jpg";
import Logo from "../../../Components/LogoContainer/Logo";
type FooterProps = {
  footerText: String;
};
const Footer = (props: FooterProps) => {
  const { footerText } = props;
  return (
    <div
      id="about"
      className="about flex flex-col justify-start items-start w-full h-full min-h-screen  md:min-h-[70vh]">
      <div className="flex flex-col lg:flex-row gap-10 border-t-[1px] border-t-gray-200 min-h-screen  md:min-h-[70vh] bg-black  w-full justify-center p-4 items-center text-[16px] text-deep-blue dark:text-white ">
        <div className="flex flex-col gap-0 order-2 lg:order-1 flex-1">
          <SocialMediaIcons
            // @ts-ignore
            className="order-1"
            title={"Contact"}
            socialMediaLinks={
              <>
                <Link
                  to="tel: +977 9860817413"
                  target="_blank"
                  className="relative flex justify-start items-center text-white font-[700]">
                  <span
                    className={`absolute bg-transparent w-0 group-hover:w-[100%] h-full transition:all duration-200 group-hover:border-b-[2px] border-b-white border-b-[2px] z-10`}>
                    &nbsp;
                  </span>
                  +977 9860817413
                </Link>
                <Link
                  to="mailto: uddhab8848@gmail.com"
                  target="_blank"
                  className="relative flex justify-start items-center text-white  font-[700]">
                  <span
                    className={`absolute bg-transparent w-0 group-hover:w-[100%] h-full transition:all duration-200 group-hover:border-b-[2px] border-b-white border-b-[2px] z-10`}>
                    &nbsp;
                  </span>
                  uddhab8848@gmail.com
                </Link>
              </>
            }
          />
          <SocialMediaIcons
            // @ts-ignore
            className="order-2"
            title="Socials"
            socialMediaLinks={
              <>
                <Link
                  to="https://github.com/uddhab7"
                  target="_blank"
                  className="relative flex justify-start items-center text-white  font-[700]">
                  <span
                    className={`absolute bg-transparent w-0 group-hover:w-[100%] h-full transition:all duration-200 group-hover:border-b-[2px] border-b-white border-b-[2px] z-10`}>
                    &nbsp;
                  </span>
                  GitHub
                </Link>
                <Link
                  to="https://www.linkedin.com/in/uddhab-kunwar-0223171b3"
                  target="_blank"
                  className="relative  flex justify-start items-center text-white  font-[700]">
                  {" "}
                  <span
                    className={`absolute bg-transparent w-0 group-hover:w-[100%] h-full transition:all duration-200 group-hover:border-b-[2px] border-b-white border-b-[2px] z-10`}>
                    &nbsp;
                  </span>
                  {/* <GrLinkedinOption size={25} /> */}
                  Linkedin
                </Link>
              </>
            }
          />
        </div>
        <div className="text-white order-1 lg:order-2 flex flex-col justify-start items-start h-full gap-5 flex-1">
          <p className="text-[18px] text-white/40 flex lg:justify-start justify-center items-center w-full">
            <span>About me</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start w-auto h-full ">
            <div className="w-auto text-[20px] order-2 sm:order-1">
              Hi, I am Uddhab Kunwar.I am a UI/UX designer with 1.5 years of
              experience in designing, and in that time I've had the chance to
              work on a variety of projects, including web applications and
              mobile apps. <br />
              <br /> I have a strong understanding of high-quality designs that
              satisfy the needs of users and stakeholders alike because I
              specialize in Ui/UX design and QA. I'm always trying to get better
              at what I do and stay current with the newest design trends and
              best practices.
            </div>{" "}
            <img
              src={image}
              alt=""
              className="h-[12rem] min-w-[12rem] rounded-full object-cover order-1 sm:order-2"
            />
          </div>
        </div>
      </div>
      <p className="bg-black flex justify-center items-center px-5 py-2 w-full text-center gap-3">
        <Logo /> <span> {footerText}</span>
      </p>
    </div>
  );
};

export default Footer;
