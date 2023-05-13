import React from "react";
import SocialMediaIcons from "../../../Components/SocialMediaIcons/SocialMediaIcons";
import {
  AiFillGithub,
  GrLinkedinOption,
  AiOutlineInstagram,
  BsFacebook,
  ImTwitter,
} from "react-icons/all";
import { Link } from "react-router-dom";
type FooterProps = {
  footerText: String;
};
const Footer = (props: FooterProps) => {
  const { footerText } = props;
  return (
    <div className="flex flex-col gap-10 border-t-[1px] border-t-gray-200 dark:border-t-white/20 h-[70vh] bg-black  w-full justify-start p-4 items-start text-[16px] text-deep-blue dark:text-white ">
      <SocialMediaIcons
        // @ts-ignore
        className="order-1"
        title={"Contact"}
        socialMediaLinks={
          <>
            <Link
              to="https://github.com/sameeprana"
              target="_blank"
              className="flex justify-start items-center text-white hover:text-gray-800  font-[700]">
              {/* <AiFillGithub className=" transition duration-200 " size={28} /> */}
              +977 981818181
            </Link>
            <Link
              to="https://github.com/sameeprana"
              target="_blank"
              className="flex justify-start items-center text-white hover:text-gray-800  font-[700]">
              {/* <AiFillGithub className=" transition duration-200 " size={28} /> */}
              h1@gmail.com
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
              to="https://github.com/sameeprana"
              target="_blank"
              className="flex justify-start items-center text-white hover:text-gray-800  font-[700]">
              {/* <AiFillGithub className=" transition duration-200 " size={28} /> */}
              GitHub
            </Link>
            <Link
              to="https://www.linkedin.com/in/monsoon-rana-92040a206/"
              target="_blank"
              className="flex justify-start items-center text-white  font-[700]">
              {/* <GrLinkedinOption size={25} /> */}
              Linkedin
            </Link>
            <Link
              to="https://github.com/sameeprana"
              target="_blank"
              className="flex justify-start items-center text-white font-[700]">
              {/* <AiFillGithub className=" transition duration-200 " size={28} /> */}
              Instagram
            </Link>
            <Link
              to="https://www.linkedin.com/in/monsoon-rana-92040a206/"
              target="_blank"
              className="flex justify-start items-center text-white font-[700]">
              {/* <GrLinkedinOption size={25} /> */}
              Facebook
            </Link>
          </>
        }
      />
      <span className="order-2 font-[500]">{}</span>
    </div>
  );
};

export default Footer;
