import styles from "../../style";
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HomeDestinations } from "../../constants";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import "./style.css";
import { useState } from "react";

const Destinations = () => {
  const [like, setLike] = useState(false);
  const [cardIndex, setCardIndex] = useState(null);

  const handleLike = (event) => {
    event.preventDefault();
    setLike(!like);
  };
  return (
    <section className={"mainDesContainer text-dimWhite"} id="destination">
      <div className="header">
        <h1>
          Bangers Of The Week{" "}
          <span>
            <BsFire />
          </span>
        </h1>
      </div>
      <div className="main">
        {HomeDestinations.map((elem, index) => {
          return (
            <div className={`card ${elem.id}`} key={index}>
              <div className="Card_header">
                <div className="location">
                  <h2>
                    <span>
                      <SlLocationPin />
                    </span>
                    {elem.destination}
                  </h2>
                </div>
                <div
                  className="love cursor-pointer"
                  onClick={() => {
                    setLike(!like);
                    setCardIndex(index + 1);
                    console.log(cardIndex);
                  }}
                >
                  {like && cardIndex == elem.id ? (
                    <AiFillHeart />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </div>
              </div>
              <div className="infos">
                <h1>{elem.title}</h1>
                <p>{elem.description}</p>
              </div>
              <img src={elem.img} />
            </div>
          );
        })}
        <div className="Last_card">
          <div className="content">
            <h1>See All Posts</h1>
            <div>
              <Link className="primaryBtn" to="/Posts">
                All Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Destinations;
