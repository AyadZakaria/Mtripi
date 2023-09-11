import React from "react";
import styles from "../../style";

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { user as icon } from "../../assets";

const SinglePost = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const post = state && state.post;

  return (
    <>
      <section className="text-dimWhite w-[100%]">
        <div className="shadow-2xl w-[100%] top-0 px-20 h-fit bg-gradient-to-r from-slate-900 to-transparent fixed z-10">
          <Navbar />
        </div>
        <div className="SinglePostMain mt-[14vh]">
          <div className="left p-8 h-[90%]">
            <img
              className="PostPic rounded-xl"
              src={`/${meta.env.IMAGES_PATH}/posts/${post.image_path}`}
              alt="post image"
            />
          </div>
          <div className="right  p-10 h-[90%] w-[70%]">
            <div className="childOne mb-8">
              <div
                className="postHolderInfo mb-6 cursor-pointer flex items-center"
                onClick={() => {
                  navigate(`/Profile/${post.user.id}`);
                }}
              >
                <img src={icon} alt="userIcon" />
                <h1 className="ml-2">{post.user.fName}</h1>
              </div>
              <h1 className="text-bold mt-3 mb-3 text-2xl">{post.title}</h1>
              <p>{post.description}</p>
            </div>
            <div className="secondChild">
              <p className="flex items-center mt-3 mb-3">
                {" "}
                <FaRegMoneyBillAlt className="mr-2 text-green-300" /> Spent
                Budget : {post.budget} $
              </p>
              <p className="flex items-center mt-3 mb-3">
                <MdDateRange className="mr-2 text-green-300" />{" "}
                {post.start_date}
              </p>
              <div className="location mt-2 mb-2 w-[30%] text-green-300 ">
                <h2>
                  <span>
                    <SlLocationPin />
                  </span>
                  {post.destination}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="secondSection mt-8">
          <div className="right p-8 m-2 w-[70%]">
            <h1 className="text-green-300 text-xl font-bold mt-4 mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              blanditiis ea unde! Maiores asperiores doloribus nisi impedit
              aspernatur sint in?
            </p>
            <Link
              to={`/Profile/${post.user.id}`}
              className="text-green-300 underline"
            >
              {" "}
              See More From {post.user.fName}
            </Link>
          </div>
          <iframe
            className="p-6 m-2 w-[90%] h-[55vh]"
            style={{ borderRadius: "3em" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52186.53517521842!2d-2.978885332571989!3d35.16513797578932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a7f62be6e41b%3A0x6f1a80a88febeae!2sNador!5e0!3m2!1sen!2sma!4v1684006279510!5m2!1sen!2sma"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className={`bg-[#0F1014] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
