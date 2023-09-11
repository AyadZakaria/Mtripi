import React, { useState, useEffect, useRef } from "react";
import styles from "../../style";
import { Navbar } from "../../components";
import { mountains } from "../../assets";
import "./style.css";
import AuthUser from "../../auth/AuthUser";
import { user as icon } from "../../assets";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import { Triangle } from "react-loader-spinner";
import { MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { FaRegMoneyBillAlt } from "react-icons/fa";



const ShowProfile = () => {
  const {http} = AuthUser();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const post = state && state.post;
  useEffect(() => {
    fetchProfileDetails();
  }, []);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const { user } = AuthUser();
  const [userposts, setuserposts] = useState([]);
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userInstagram, setUserInstagram] = useState();
  const [userEmail, setUseremail] = useState();
  const [userMembership, setUserMembership] = useState(
    new Date(user.created_at)
  );
  console.log(post.user_id);
  
  const fetchProfileDetails = () => {
    http.get(`/profile/${post.user_id}`).then((res) => {
      setuserposts(res.data[0].posts);
      setUserFirstName(res.data[0].fName);
      setUserInstagram(res.data[0].instagram);
      setUserLastName(res.data[0].lName);
      setUseremail(res.data[0].email);
      setUserMembership(new Date(res.data[0].created_at));
      console.log(res.data);
      setIsLoading(false);
      
    });
  };
console.log(userFirstName);
const LoadingRender = () => {
  if (isLoading) {
    return (
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  } else if (!isLoading && posts.length <= 0) {
    return <p>You Have no posts Yet..</p>;
  }
};
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
                  {userFirstName +" "+ userLastName}
                </h1>
                <span className="username">
                  @
                  {userFirstName}
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
          {/* posts section */}
          <section className="postsContainer  text-dimWhite">
      <ToastContainer />
      {userposts.length > 0
        ? userposts.map((elem, index) => {
            return (
              <div key={index} className="post shadow-2xl ">
                <div className="childOne">
                  <img
                    className="w-[35vh] rounded-lg"
                    src={`/back-laraveld/storage/app/public/images/posts/${elem.image_path}`}
                    alt="Post Image"
                  />
                  <h2>{elem.title}</h2>
                </div>
                <div className="childTwo relative">
                  <h2>{elem.description}</h2>
                  <p className="flex items-center">
                    {" "}
                    <FaRegMoneyBillAlt className="mr-2 text-green-300" /> Spent
                    Budget : {elem.budget} $
                  </p>
                  <p className="flex items-center">
                    <MdLocationOn className="mr-2 text-green-300" /> Morroco
                  </p>
                  <p className="flex items-center">
                    <MdDateRange className="mr-2 text-green-300" />{" "}
                    {elem.start_date}
                  </p>
                  <p className="link flex justify-between w-[9em] absolute right-2 bottom-2 text-green-300 font-light text-xs underline">
                    <p
                      onClick={() => {
                        navigate(`/Post/${elem.id}`, {
                          state: {
                            post: {
                              id: elem.id,
                              title: elem.title,
                              description: elem.description,
                              destination: elem.destination,
                              budget: elem.budget,
                              start_date: elem.start_date,
                              image_path: elem.image_path,
                              user: {
                                id: elem.user_id,
                                fName: user.fName || "x",
                              },
                            },
                          },
                        });
                      }}
                    >
                      See More
                    </p>
                    
                  </p>

                  
                </div>
              </div>
            );
          })
        : LoadingRender()}
    </section>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
