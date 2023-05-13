import { MdPhone } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { VscLocation } from "react-icons/vsc";
import Form from "../../Components/Form/Form";
import LocationContainer from "../../Components/LocationContainer/LocationContainer";
import { motion } from "framer-motion";
import image from "../../assets/figma1.jpg";
import image1 from "../../assets/figma2.jpg";
import image2 from "../../assets/figma6.jpg";
const GetIntouch = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center md:gap-[5rem] py-0 h-screen bg-red">
      <div className="flex flex-row justify-start items-start bg-red h-full w-full">
        <div className="flex flex-col justify-start items-start h-full w-full">
          <img
            src={image}
            alt="Image 1"
            className="h-[30rem] flex-1"
          />
          <img
            src={image1}
            alt="Image 1"
            className="h-[30rem]  flex-4"
          />
        </div>
        <img
          src={image2}
          alt="Image 1"
          className="h-[30rem] flex-1"
        />
      </div>
    </section>
  );
};

export default GetIntouch;
