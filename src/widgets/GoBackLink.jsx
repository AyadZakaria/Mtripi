import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const GoBackLink = () => {
  return (
    <div className=" absolute font-bold text-lg cursor-pointer flex items-center left-6 top-8 justify-around w-[7%] text-dimWhite ">
      <Link to="/">
        <BsFillArrowLeftCircleFill />
      </Link>{" "}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default GoBackLink;
