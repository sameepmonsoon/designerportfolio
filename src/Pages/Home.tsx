import image from "/src/assets/uddhab.jpg";
import Hero from "../Page Component/Hero/Hero";
import About from "../Page Component/About/About";
import HomeLayout from "../Layout/HomeLayout";
import Skills from "../Page Component/SkillsPage/SkillsPage";
import SpecialButton from "../Components/SpecialButton/SpecialButton";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Projects from "./Projects";

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
          <Projects />
          {/* <AboutPage /> */}
          {/* <GetIntouch /> */}
        </div>
      }
    />
  );
};

export default Home;
