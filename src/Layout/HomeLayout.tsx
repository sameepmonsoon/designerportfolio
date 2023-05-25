import React, { useEffect, useState } from "react";
import Footer from "../Page Component/Home/Footer/Footer";
import Navbar from "../Page Component/Home/Navbar/Navbar";
type HomeTypes = {
  Children: React.ReactElement;
};
const HomeLayout = (props: HomeTypes) => {
  const { Children } = props;
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const NavLinkNames = [
    { label: "Home", link: "home" },
    // { label: "skills", link: " skill" },

    { label: "projects", link: "projects" },
    { label: "About", link: "about" },
    // { label: "contact", link: "contact" },
  ];
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTopBtn: HTMLElement = document.getElementById(
    "scroll-to-top"
  ) as HTMLElement;

  window.addEventListener("scroll", () => {
    if (scrollToTopBtn !== null) {
      if (window.pageYOffset > 400) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  });

  return (
    <div
      className="flex flex-col overflow-hidden dark:bg-deep-blue bg-white  snap-proximity scroll-smooth font-playfair"
      id="home">
      <div className="order-1 z-[10]">
        <Navbar LinkName={NavLinkNames} scrollToSkills={scrollToSkills} />
      </div>
      <div className="order-2 z-[0] mt-[4rem] snap-start overflow-hidden">
        {Children}
      </div>
      <div className="order-3 snap-start">
        <Footer footerText={"@2023 By Uddhab with ❤"} />
      </div>
    </div>
  );
};

export default HomeLayout;
