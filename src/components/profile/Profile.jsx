import React from "react";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import AuthUser from ".././auth/AuthUser";
import { user } from "../../assets";

const Profile = () => {
  const { http } = AuthUser();
  const [activeLink, setActiveLink] = useState("Edit");
  const [userdetail, setUserdetail] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = () => {
    http.post("/me").then((res) => {
      setUserdetail(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
    });
  };
  const [dateTime, setDateTime] = useState(new Date());
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="bg-[#0F1014] p-3 overflow-hidden h-screen">
      <Navbar />
      <div className="text-dimWhite text-center h-[20vh] w-9/12 m-auto rounded-lg pt-[6vh]  bg-slate-800 ">
        <p>{dateTime.toLocaleDateString("en-US", options)}</p>
        <h2 className="text-3xl">
          Welcome back, {userdetail && `${userdetail.name}`}
        </h2>
      </div>
      <div className="links m-3 cursor-pointer p-4 h-[10vh] text-dimWhite text-xl flex justify-center">
        <ul className="flex space-x-4 ">
          <li className={`${activeLink == 'Edit' && " text-stone-600" }`}>
            {" "}
            <a
              onClick={() => {
                setActiveLink("Edit");
              }}
            >
              Edit Profile
            </a>{" "}
          </li>{" "}
          <p>/</p>
          <li className={`${activeLink == 'Create' && "text-stone-600" }`}>
            <a
              onClick={() => {
                setActiveLink("Create");
              }}
            >
              Add Destination{" "}
            </a>
          </li>
        </ul>
      </div>
      {activeLink == "Edit" ? (
        <div className="text-dimWhite w-1/2 m-auto">
          <form className="flex flex-col items-center">
            <img src={user} alt="Avatar" className="w-[10%]" />
            <label className="text-l font-bold m-1" htmlFor="Email">
              Your Full Name
            </label>
            <input
              className="p-2 text-neutral-800 outline-none rounded-xl w-[70%] m-2"
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* full name input ends here */}

            <label className="text-l font-bold m-1" htmlFor="Email">
              Your Email
            </label>
            <input
              className="p-2 text-neutral-800 outline-none rounded-xl w-[70%] m-2"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* email input ends / pass input starts here */}

            <label className="text-l font-bold m-1" htmlFor="password">
              Enter Your Password
            </label>
            <input
              className="p-2 text-neutral-800 outline-none rounded-xl w-[70%] m-2"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button className="primaryBtn" type="button">
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <div className="text-dimWhite w-1/2 m-auto">
          <form className="flex flex-col items-center">
            <label className="text-l font-bold m-1" htmlFor="pic">
              {" "}
              Picture{" "}
            </label>
            <input
              className="p-2 text-neutral-800 outline-none rounded-xl w-[70%] m-2"
              name="pic"
              id="pic"
              type="file"
            />
            <label className="text-l font-bold m-1" htmlFor="desc">
              {" "}
              Place Description{" "}
            </label>
            <input
              className="p-2 text-neutral-800 outline-none rounded-xl w-[70%] m-2"
              type="text"
              name="desc"
              id="desc"
              placeholder="Merzouga Moroccan Desert ... "
            />
            <button className="primaryBtn"> Share Destination</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
