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
            Welcome to M'TRIPI, the ultimate platform for hiking enthusiasts
            looking to explore the best destinations in Morocco. We provide a
            space for users to share personal experiences and recommendations,
            including transportation, budgets, and other details that can make a
            hiking trip more enjoyable. Join our community and discover the most
            scenic trails and hidden treasures of this beautiful country.
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
