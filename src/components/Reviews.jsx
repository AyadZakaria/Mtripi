import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Reviews = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div className="w-full flex justify-between items-center  text-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are saying about us
      </h2>
      
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative left-[110px] z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Reviews;
