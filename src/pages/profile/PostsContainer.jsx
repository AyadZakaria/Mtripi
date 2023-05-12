import React, { useState, useEffect, useRef } from "react";
import AuthUser from "../../auth/AuthUser";
import { MdLocationOn } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { Triangle } from "react-loader-spinner";


const PostsContainer = () => {
  const { http } = AuthUser();
  const navigate = useNavigate();
  const [posts, setposts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  let postsReverse = [...posts].reverse();
  useEffect(() => {
    fetchPostDetail();
    
  }, []);

  const deletepost = (iduser) => {
    http.delete(`/destroypost/${iduser}`).then((res) => {
      console.log(res);
      navigate('/profile')
    });
       
  };

  const fetchPostDetail = () => {
    http.get("/Profile").then((res) => {
      setposts(res.data);
      setIsLoading(false);
      console.log(posts);
      console.log(postsReverse);
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
      {posts.length > 0
        ? postsReverse.map((elem, index) => {
            let title = elem.title;
            let iduser = elem.id;
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
                  <p className="link text-green-300 underline">
                    <Link to={`/post/${elem.user_id}/${elem.id}`}>
                      See More
                    </Link>
                  </p>
                  
                    <button onClick={()=>deletepost(iduser)}>
                      Delete post 
                    </button>
                  
                  <p className="link text-green-300 underline">
                    <Link to={`/post/${elem.user_id}/${elem.id}`}>
                      Edit post
                    </Link>
                  </p>
                </div>
              </div>
            );
          })
        : LoadingRender()}
    </section>
  );
};

export default PostsContainer;
