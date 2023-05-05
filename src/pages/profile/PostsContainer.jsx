import React, { useState, useEffect, useRef } from "react";
import AuthUser from "../../auth/AuthUser";
import { MdLocationOn } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

const PostsContainer = () => {
  const { http } = AuthUser();
  const [posts, setposts] = useState([]);
  let postsReverse = [...posts].reverse();
  useEffect(() => {
    fetchPostDetail();
  }, []);

  const fetchPostDetail = () => {
    http.get("/Profile").then((res) => {
      setposts(res.data);
      console.log(posts);
      console.log(postsReverse);
    });
  };
  return (
    <section className="postsContainer  text-dimWhite">
      {posts.length > 0 ? (
        postsReverse.map((elem, index) => {
            let title = elem.title;
          return (
            <div key={index} className="post shadow-2xl">
              <div className="childOne">
                <img
                  className="w-[35vh] rounded-lg"
                  src={`${meta.env.IMAGES_PATH}/posts/${elem.image_path}`}
                  alt="Post Image"
                />
                <h2>{title}</h2>
              </div>
              <div className="childTwo">
                <h2>{elem.description}</h2>
                <p className="flex items-center">
                  {" "}
                  <FaRegMoneyBillAlt className="mr-2 text-green-300" /> Spent Budget :{" "}
                  {elem.budget} $
                </p>
                <p className="flex items-center">
                  <MdLocationOn className="mr-2 text-green-300" /> Morroco
                </p>
                <p className="flex items-center">
                  <MdDateRange className="mr-2 text-green-300" /> {elem.start_date}
                </p>
                <p className="link text-green-300 underline">
                  <Link to={`/post/${elem.user_id}/${elem.id}`}>See More</Link>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Loading Your Posts ...</h1>
      )}
    </section>
  );
};

export default PostsContainer;