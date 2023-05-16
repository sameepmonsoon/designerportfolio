import React from "react";
import { TbHexagonLetterU, TbSquareLetterM } from "react-icons/tb";
import { Link } from "react-router-dom";
import image from "/src/assets/portfolio.png";
const Logo = (props: { otherSection?: boolean }) => {
  const { otherSection } = props;
  return (
    <Link
      to="/"
      className={`h-[55px] w-[60px] bg-contain flex flex-row justify-start items-center text-deep-blue ${
        otherSection && "dark:text-white"
      } `}>
      <span className="text-[34px] font-[800] flex justify-start items-center">
        <span>Cr</span>
        <span className="text-yellow">
          <TbHexagonLetterU size={34} />
        </span>
      </span>
    </Link>
  );
};

export default Logo;
