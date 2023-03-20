import styles from "./style";
import {
  Footer,
  Navbar,
  Destinations,
  Hero,
  About,
  Faq,
  Reviews,
  Trajets,
  Clients,
} from "./components";

const App = () => (
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
        <Faq />
        <Reviews />
        <Trajets />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
