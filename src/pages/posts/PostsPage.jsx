import React, { useState, useEffect } from "react";
import AuthUser from "../../auth/AuthUser";
import { SlLocationPin } from "react-icons/sl";
import "./PostsStyle.css";
import { useNavigate } from "react-router";
import { Navbar } from "../../components";
import { Triangle } from "react-loader-spinner";
import { user as icon } from "../../assets";

const PostsPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { http } = AuthUser();
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    http.get("/posts").then((res) => {
      setposts(res.data);
      setIsLoading(false);
      console.log(res.data);
      console.log(posts);
    });
  };

  const handlePostDetails = (postid) => {
    navigate(`/Post/${postid}`);
  };

  const LoadingRender = () => {
    if (isLoading) {
      return (
        <div className="loader mt-40 ml-[45%] text-dimWhite">
          <Triangle
            height="180"
            width="180"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      );
    } else if (!isLoading && posts.length <= 0) {
      return <p>No Posts For Now..</p>;
    }
  };
  return (
    <>
      <section className="text-dimWhite w-[100%]">
        <div className="shadow-2xl w-[100%] top-0 px-20 h-fit bg-gradient-to-r from-slate-900 to-transparent fixed z-10">
          <Navbar />
        </div>
        {posts.length > 0 ? (
          <div className="Posts_main mt-[12vh]">
            {posts.map((elem, index) => {
              return (
                <div
                  className={`  cursor-pointer card ${elem.id}`}
                  onClick={() => {
                    navigate(`/Post/${elem.id}`, { state: { post: elem } });
                  }}
                  key={index}
                >
                  <div className="Card_header">
                    <div className="location">
                      <h2>
                        <span>
                          <SlLocationPin />
                        </span>
                        {elem.destination}
                      </h2>
                    </div>
                    <div className="user_container">
                      <h2>
                        <a href={`/profile/${elem.user.id}`}>
                          {elem.user.fName}
                        </a>
                      </h2>
                      <img src={icon} />
                    </div>
                  </div>
                  <div className="infos">
                    <h1>{elem.title}</h1>
                    <p>{elem.description}</p>
                  </div>
                  <img
                    src={`${meta.env.IMAGES_PATH}/posts/${elem.image_path}`}
                    alt="image"
                    className="postImage"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          LoadingRender()
        )}
      </section>
    </>
  );
};

export default PostsPage;
