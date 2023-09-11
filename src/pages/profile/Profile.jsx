import React, { useState, useEffect, useRef } from "react";
import styles from "../../style";
import { Navbar } from "../../components";
import UserInfo from "./UserInfo";
import { mountains } from "../../assets";
import Popupbtn from "../../widgets/AddPostBtn";

import "./style.css";

import PostsContainer from "./PostsContainer";

const Profile = () => {
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
            <li>
              <Popupbtn label="Add Post" />
            </li>
          </ul>
        </div>
        <div className="bg-[#0F1014] p-3 h-[100vh]">
          <UserInfo />
          <PostsContainer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
