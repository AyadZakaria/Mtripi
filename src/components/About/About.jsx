import { service, teem } from "../../assets";
import "./about.css";

const About = () => (
  <section id="About">
    {/* why us first part  */}
    <div className="main">
      <div className="main-head">
        <h2>About us</h2>
        <p>
          We Are Trying Our Best To Find The Best Locations For Your Next Hiking
          Adventure Join The Comunity Now{" "}
        </p>
      </div>
      <div className="main-body">
        <img src={teem} alt="About" />
        <div className="about-desc ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quis
            enim saepe adipisci suscipit eveniet reprehenderit animi officia
            consectetur omnis, quo ad assumenda hic iure. Aut vero enim cum
            ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi nisi iste perspiciatis! Dignissimos praesentium voluptatum
            fuga similique maiores molestiae? Dolorum labore sequi voluptatum
            magnam doloribus incidunt laudantium tenetur fugit quas dolorem,
            reiciendis eaque eligendi vitae at, deleniti omnis voluptatibus
            voluptates suscipit eveniet maxime? Vero commodi illo, pariatur
            nobis minima debitis.
          </p>
          <button className="about-desc-button secondaryBtn">
            {" "}
            Get in touch
          </button>
        </div>
      </div>
    </div>
    {/* why us part  */}
    <div className="why-us">
      <div className="why-head">
        <h2>Why Choose Us</h2>
        <p>
          Thank You For Considering us as your guide, We Believe that our
          experience, skills, and dedication set us apart and make us the ideal
          choice for you.
        </p>
      </div>
      <div className="why-body">
        <div className="cart">
          <img src={service} alt="icon" />
          <h3>Expertise</h3>
          <p>
            We have extensive experience in choosing best places in morocco for
            individuals all across the world.
          </p>
        </div>
        <div className="cart ">
          <img src={service} alt="icon" />
          <h3>Attention to Detail</h3>
          <p>
            We have extensive experience in choosing best places in morocco for
            individuals all across the world.
          </p>
        </div>
        <div className="cart">
          <img src={service} alt="icon" />
          <h3>Communication</h3>
          <p>
            We have extensive experience in choosing best places in morocco for
            individuals all across the world.
          </p>
        </div>
        <div className="cart">
          <img src={service} alt="icon" />
          <h3>Customer Service</h3>
          <p>
            We have extensive experience in choosing best places in morocco for
            individuals all across the world.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
