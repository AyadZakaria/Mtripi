import React, { useState, useEffect, useRef } from "react";
import styles from "../../style";
import { Navbar } from "../../components";
import UserInfo from "./UserInfo";
import { mountains } from "../../assets";
import Popupbtn from "./AddPostBtn";
import "./style.css";
import AuthUser from "../../auth/AuthUser";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();
  const { http } = AuthUser();
  const [posts, setposts]= useState();
  useEffect(() => {
    fetchPostDetail();
  }, []);

  const fetchPostDetail = () => {
    http.get("/Profile").then((res) => {
      setposts(res);
      
      console.log(res.data)
    });
  };

  return (
    <>
      <div className="relative">
        <div
          style={{
            height: "45vh",
            backgroundImage: `url(${mountains})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="shadow-2xl w-[100%] px-20 h-fit bg-gradient-to-r from-green-300 to-transparent fixed z-10">
            <Navbar />
          </div>
        </div>
        <div className="subnav">
          <ul>
            <li>
              <span className="text-green-300 underline">Posts</span>{" "}
            </li>
            <li>
              <Popupbtn />
            </li>
          </ul>
        </div>
        <div className={`${styles.containerHeight} bg-[#0F1014] p-3`}>
          <UserInfo />
        </div>
      </div>
    </>
  );
};

export default Profile;
