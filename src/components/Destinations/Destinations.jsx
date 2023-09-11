import styles from "../../style";
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HomeDestinations } from "../../constants";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import "./style.css";
import { useState } from "react";

const Destinations = () => {
  const [Like, setLike] = useState(false);
  const [CardIndex, setCardIndex] = useState(null);

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
                    setLike(!Like);
                    setCardIndex(index + 1);
                  }}
                >
                  {Like && CardIndex == elem.id ? (
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
              <img src={elem.img} alt="image" />
            </div>
          );
        })}
        <div className="Last_card">
          <div className="content">
            <h1>See All Posts</h1>
            <Link className="primaryBtn" to="/Posts">
              All Destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Destinations;
