import { useState } from "react";
import { Link } from "react-router-dom";
import { close, MTRIPI, menu, user } from "../assets";
import { navLinks } from "../constants";
import React, { useEffect } from "react";
import AuthUser from "./auth/AuthUser";
const Navbar = () => {
  const { token, logout } = AuthUser();
  const LogUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  const { http } = AuthUser();
  const [userdetail, setUserdetail] = useState();

  const [IconClicked, setIconClicked] = useState(false);

  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = () => {
    http.post("/me").then((res) => {
      setUserdetail(res.data);
    });
  };

  const handleUserActions = () => {
    setIconClicked(!IconClicked);
  };

  function renderElement() {
    if (userdetail) {
      return (
        <>
          {" "}
          <div
            className="userInfo flex select-none cursor-pointer"
            onClick={handleUserActions}
          >
            <img src={user} />
            <p className="text-white ml-2 font-bold text-xl">
              {" "}
              {userdetail.name}
            </p>
          </div>
          <div
            className={`userActions ${
              IconClicked ? "block" : "hidden"
            } absolute left-3/4 top-10 bg-emerald-600 p-4 rounded-xl z-10`}
          >
            <button className="primaryBtn Profile">
              <Link to="Profile">Profile</Link>
            </button>
            <button className="secondaryBtn" onClick={LogUser}>
              log out
            </button>
          </div>
        </>
      );
    } else {
      return "";
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
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {!userdetail && (
        <button className="text-white bg-emerald-600 p-3 xs:hidden lg:block ">
          {" "}
          <Link to="/login"> Get Started </Link>{" "}
        </button>
      )}

      {renderElement()}

      <div className="sm:hidden flex flex-1 justify-end items-center">
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
                onClick={() => setActive(nav.title)}
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
