import styles from "../../style";
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HomeDestinations } from "../../constants";
import "./style.css";

const Destinations = () => (
  <section className={"mainDesContainer text-dimWhite"} id="destination">
    <div className="header">
      <h1>
        Bangers Of The Week{" "}
        <span>
          <BsFire />
        </span>
      </h1>
      <div>
        <Link className="primaryBtn" to="/Posts">
          All Destinations
        </Link>
      </div>
    </div>
    <div className="main">
      {HomeDestinations.map((elem) => {
        return (
          <div className={`card ${elem.id}`} key={elem.id}>
            <h1>{elem.title}</h1>
            <h1>{elem.description}</h1>
          </div>
        );
      })}
      <div className="card">
        <h1>See All Posts</h1>
        <button>See More</button>
      </div>
    </div>
  </section>
);

export default Destinations;
