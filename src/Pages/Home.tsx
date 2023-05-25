import image from "/src/assets/uddhab.jpg";
import Hero from "../Page Component/Hero/Hero";
import About from "../Page Component/About/About";
import HomeLayout from "../Layout/HomeLayout";
import Skills from "../Page Component/SkillsPage/SkillsPage";
import SpecialButton from "../Components/SpecialButton/SpecialButton";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Projects from "./Projects";
import Marquee from "react-fast-marquee";
import image1 from "../assets/figma1.jpg";
import image2 from "../assets/figma2.jpg";
import image3 from "../assets/figma3.jpg";
import image4 from "../assets/bank.png";
import image5 from "../assets/figma3.png";
import image6 from "../assets/figma4.jpg";
import image7 from "../assets/figma6.jpg";
import image8 from "../assets/figma5.png";
const Home = () => {
  return (
    <HomeLayout
      Children={
        <div className="snap-mandatory snap-y overflow-hidden" id="home">
          <Hero
            userImage={image}
            resumeButton={
              <a href="https://drive.google.com/" target="_blank">
                <SpecialButton
                  itemOne={"Resume"}
                  itemTwo={<HiOutlineClipboardDocumentList size={25} />}
                />
              </a>
            }
            optionalButton={" Say Hello"}
            optionalButtonPath={"contact"}
            userName={"Designing"}
            homeBgName={"Purpose"}
            userIntroduction={
              "Dedication and commitment towards the work is my key to success as well as my goal.\
            "
            }
          />
          <About />
          <Skills />
          <div className="min-h-[35rem] flex flex-col justify-evenly gap-1">
            <Marquee
              direction="right"
              speed={100}
              className="text-black text-[5rem] text-black/50 uppercase "
              pauseOnHover={true}>
              <div className="flex gap-10 justify-center items-center">
                <span>Ui & ux design</span>
                <span>Html</span>
                <span>Css</span>
                <span>Javascript</span>
              </div>
            </Marquee>
            <Marquee
              speed={80}
              className="h-[15rem] overflow-hidden flex gap-3"
              pauseOnHover={true}>
              <div className="h-full flex gap-3">
                <img
                  src={image1}
                  className="h-[15rem] object-cover rounded-md"
                />
                <img
                  src={image2}
                  className="h-[15rem] object-cover rounded-md"
                />
                <img
                  src={image3}
                  className="h-[15rem] object-cover rounded-md"
                />
                <img
                  src={image4}
                  className="h-[15rem] object-cover rounded-md"
                />
                <img
                  src={image5}
                  className="h-[15rem] object-cover rounded-md"
                />
                <img
                  src={image6}
                  className="h-[15rem] object-cover rounded-md"
                />
                <img
                  src={image7}
                  className="h-[15rem] object-cover rounded-md"
                />
              </div>
            </Marquee>
          </div>
          <Projects />
        </div>
      }
    />
  );
};

export default Home;
