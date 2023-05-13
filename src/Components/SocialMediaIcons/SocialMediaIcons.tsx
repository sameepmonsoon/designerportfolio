import React from "react";

import { Link } from "react-router-dom";

const SocialMediaIcons = (props: {
  socialMediaLinks: React.ReactElement;
  title: string;
}) => {
  const { socialMediaLinks, title } = props;
  return (
    <div className="flex flex-col gap-0 justify-start items-start">
      <h3 className="text-white font-[700] text-[18px] border-b-2 w-full pb-2">
        {title}
      </h3>
      <div className="flex justify-center items-start md:justify-start my-10 gap-7 min-w-[20rem] bg-white bg-clip-text">
        {socialMediaLinks &&
          socialMediaLinks?.props &&
          socialMediaLinks?.props?.children &&
          socialMediaLinks?.props?.children?.map(
            (Link: React.ReactElement, index: number) => (
              <span key={index} className="group flex justify-center">
                {Link}
              </span>
            )
          )}
      </div>
    </div>
  );
};

export default SocialMediaIcons;
