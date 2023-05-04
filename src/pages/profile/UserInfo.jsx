import React from "react";
import { useState } from "react";
import AuthUser from "../../auth/AuthUser";
import { user as icon } from "../../assets";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import "./style.css";

const UserInfo = () => {
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
    <section className="text-dimWhite">
      <div className="userdetails">
        <img src={icon} alt="Avatar" />
        <div className="info">
          <h1>
            {userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1)}{" "}
            {userLastName.charAt(0).toUpperCase() + userLastName.slice(1)}{" "}
          </h1>
          <span className="username">
            @{userFirstName.toLowerCase() + "_" + userLastName.toLowerCase()}
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
            Since : {" "}
            <span> {userMembership.toLocaleDateString("en-US", options)}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
