import styles from "../style";

import React from "react";
import {
  About,
  Clients,
  Destinations,
  Faq,
  Footer,
  Hero,
  Navbar,
  Reviews,
} from "../components";

const Home = () => {
  return (
    <div className="bg-[#0F1014] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#0F1014] ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Clients />
        </div>
      </div>

      <div className={`bg-[#0F1014] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Destinations />
          <About />
          <Reviews />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
