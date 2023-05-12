import React, { useState, useEffect, useRef } from "react";
import AuthUser from "../../auth/AuthUser";
import { MdLocationOn } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { Triangle } from "react-loader-spinner";
import { BsTrash } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditPostBtn from "../../widgets/EditPostBtn";

const PostsContainer = () => {
  const { http } = AuthUser();
  const navigate = useNavigate();
  const [posts, setposts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [OptionsClicked, setOptionsClicked] = useState(true);
  const [ElemIndex, setIndex] = useState(null);

  let postsReverse = [...posts].reverse();
  useEffect(() => {
    fetchPostDetail();
  }, []);
  const notify = () => {
    toast.success("Post deleted successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnHover: false,
    });
  };
  const handleDeteteSub = (idpost) => {
    toast.warn("Are you sure you want to delete this item?", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      closeButton: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            className="StandardBtn"
            onClick={() => {
              deletepost(idpost);
              toast.dismiss();
              notify();
            }}
          >
            DELETE
          </button>
          <button className="StandardBtn" onClick={() => toast.dismiss()}>
            CANCEL
          </button>
        </div>
      ),
      style: {
        margin: "0",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      progress: undefined,
    });
  };
  const deletepost = (iduser) => {
    http.delete(`/destroypost/${iduser}`).then((res) => {
      fetchPostDetail();
    });
  };

  const fetchPostDetail = () => {
    http.get("/Profile").then((res) => {
      setposts(res.data);
      setIsLoading(false);
    });
  };

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
    <section className="postsContainer  text-dimWhite">
      <ToastContainer />
      {posts.length > 0
        ? postsReverse.map((elem, index) => {
            return (
              <div key={index} className="post shadow-2xl">
                <div className="childOne">
                  <img
                    className="w-[35vh] rounded-lg"
                    src={`${meta.env.IMAGES_PATH}/posts/${elem.image_path}`}
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
                    <Link to={`/post/${elem.user_id}/${elem.id}`}>
                      See More
                    </Link>{" "}
                    ,
                    <EditPostBtn post={elem} label={"Edit Post"} />
                  </p>

                  <div
                    className="options flex  "
                    onClick={() => {
                      setOptionsClicked(!OptionsClicked);
                      setIndex(elem.id);
                    }}
                  >
                    <BsTrash className="right-2 top-2 text-green-300 text-2xl absolute" />
                    <div
                      className={`${
                        OptionsClicked && ElemIndex == elem.id
                          ? "scale-100"
                          : "scale-0"
                      } optionsBtns duration-200  bg-emerald-600 right-10 top-4 p-2 rounded-xl absolute `}
                    >
                      <button
                        className="StandardBtn"
                        onClick={() => handleDeteteSub(elem.id)}
                      >
                        Delete post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : LoadingRender()}
    </section>
  );
};

export default PostsContainer;
