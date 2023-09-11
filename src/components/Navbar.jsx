import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { close, MTRIPI, menu, user as icon } from "../assets";
import { navLinks } from "../constants";
import React, { useEffect } from "react";
import AuthUser from "./auth/AuthUser";
const Navbar = () => {
  const { token, user, http, setUser, logout } = AuthUser();
  const [userdetail, setUserdetaild] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const LogUser = () => {
    if (token != undefined) {
      logout();
    }
  };

  useEffect(() => {
    fetchUserDetail();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchUserDetail = () => {
    http.post("/me").then((res) => {
      setUserdetaild(res.data);
      setUserFirstName(res.data.fName);
      setUserLastName(res.data.lName);
    });
  };
  const [IconClicked, setIconClicked] = useState(false);

  const userInfoRef = useRef(null);

  const handleClickOutside = (event) => {
    if (userInfoRef.current && !userInfoRef.current.contains(event.target)) {
      setIconClicked(false);
    }
  };

  const handleUserActions = () => {
    setIconClicked(!IconClicked);
  };

  function renderElement() {
    if (!userdetail) {
      return (
        <>
          {" "}
          <div
            className="userInfo flex items-center select-none cursor-pointer"
            onClick={handleUserActions}
            ref={userInfoRef}
          >
            <img src={user} />
            <p className="text-white ml-2 font-bold text-xl">
              {" "}
              {userdetail.name}
            <img src={icon} className="h-9" />
            <p className="text-white ml-2 font-bold text-lg flex flex-col">
              {userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1)}{" "}
              <span
                className="text-green-200 font-medium text-sm"
                style={{ marginTop: "-5px" }}
              >
                @
                {userFirstName.toLowerCase() + "_" + userLastName.toLowerCase()}
              </span>
            </p>
          </div>
          <div
            className={`userActions ${
              IconClicked ? "block" : "hidden"
            } absolute left-3/4 top-10 bg-emerald-600 p-4 rounded-xl z-10`}
          >
            <button className="primaryBtn Profile">
              <Link to="/Profile">Profile</Link>
            </button>
            <button className="primaryBtn Profile">
              <Link to="/Settings">Settings</Link>
            </button>
            <button className="secondaryBtn" onClick={LogUser}>
              log out
            </button>
          </div>
        </>
      );
    } else {
      return (
        <button className="text-white rounded-3xl bg-emerald-600 p-3 xs:hidden lg:block ">
          <Link to="/login"> Get Started </Link>
        </button>
      )
    }
  }

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={MTRIPI} alt="mtripilogo" className="w-[124px] h-[32px]" />
      </Link>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      {renderElement()}
      <div
        className="sm:hidden flex flex-1 justify-end items-center"
        onClick={() => setIconClicked(false)} // hide userActions on click outside
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
