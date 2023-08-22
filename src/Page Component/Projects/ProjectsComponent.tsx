import React, { useEffect, useState } from "react";

const ProjectsComponent = (props: {
  projectContent: React.ReactElement;
  projectComponentTitle: String;
}) => {
  const { projectContent, projectComponentTitle } = props;

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
    if (scrollPosition > 1200 && scrollPosition < 2000) {
      setBackgroundColor("white");
      setTextColor("black");
    } else {
      setBackgroundColor("transparent");
      setTextColor("black");
    }
  };

  return (
    <div
      style={{
        background: backgroundColor,
        transition: "background 1s ease-in-out",
      }}
      id="projects"
      className="md:w-screen md:min-h-[100vh] pt-10 gap-20 lg:gap-10  sm:gap-x-20 pb-10 md:px-5 flex-col flex flex-wrap  md:flex-row justify-center lg:justify-around items-center overflow-hidden">
      <p
        style={{ color: textColor }}
        className="h-20 w-full py-[5rem] md:py-0 relative flex flex-col md:flex-row justify-center lg:justify-start items-center lg:top-5 top-14 capitalize text-xl font-[600] gap-[7px] dark:text-white">
        {/* <span className="W-auto "></span>
        <span></span> */}
        <span className="w-auto">{projectComponentTitle}</span>
      </p>
      {projectContent}
    </div>
  );
};

export default ProjectsComponent;
