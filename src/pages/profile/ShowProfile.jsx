import React, { useState, useEffect, useRef } from "react";
import styles from "../../style";
import { Navbar } from "../../components";
import { mountains } from "../../assets";
import "./style.css";
import AuthUser from "../../auth/AuthUser";
import { user as icon } from "../../assets";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import PostsContainer from "./PostsContainer";

const ShowProfile = () => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const { user } = AuthUser();
  const [userFirstName, setUserFirstName] = useState(user.fName);
  const [userLastName, setUserLastName] = useState(user.lName);
  const [userInstagram, setUserInstagram] = useState(user.instagram);
  const [userEmail, setUseremail] = useState(user.email);
  const [userMembership, setUserMembership] = useState(
    new Date(user.created_at)
  );
  return (
    <div className=" bg-[#0F1014] max-h-fit">
      <div className="relative bg-[#0F1014]">
        <div
          style={{
            height: "45vh",
            backgroundImage: `url(${mountains})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="shadow-2xl w-[100%] px-20 h-fit bg-gradient-to-r from-slate-900 to-transparent fixed z-10">
            <Navbar />
          </div>
        </div>
        <div className="subnav cursor-pointer">
          <ul>
            <li>
              <span className="text-green-300 underline">Posts</span>{" "}
            </li>
          </ul>
        </div>
        <div className="bg-[#0F1014] p-3 h-[100vh]">
          {/* new user info section */}
          <section className="text-dimWhite">
            <div className="userdetails">
              <img src={icon} alt="Avatar" />
              <div className="info">
                <h1>
                  {userFirstName.charAt(0).toUpperCase() +
                    userFirstName.slice(1)}{" "}
                  {userLastName.charAt(0).toUpperCase() + userLastName.slice(1)}{" "}
                </h1>
                <span className="username">
                  @
                  {userFirstName.toLowerCase() +
                    "_" +
                    userLastName.toLowerCase()}
                </span>
                <p className="flex items-center">
                  <MdAttachEmail className="Element-icon" />
                  {userEmail}
                </p>
                <p className="flex items-center">
                  <AiOutlineInstagram className="Element-icon" />
                  {userInstagram}
                </p>
                <p className="flex items-center">
                  <MdLocationOn className="Element-icon" />
                  Casablanca, Morocco
                </p>

                <p className="flex items-center">
                  <MdCardMembership className="Element-icon" />
                  <span>
                    {" "}
                    Since :{" "}
                    {userMembership.toLocaleDateString("en-US", options)}
                  </span>
                </p>
              </div>
            </div>
          </section>
          <PostsContainer />
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
