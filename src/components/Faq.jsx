import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] cursor-pointer hover:scale-105 transition-all ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <div className="">
  <div className="w-full flex justify-between items-center  text-center md:flex-row flex-col sm:mb-16 mb-1 relative z-[1] top-[55px] ">
      <h2 className={styles.heading2}>
        do you want to ask us sm quest ? 
      </h2>
      
    </div>
  <section id="features" className={layout.section}>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      <div className="BtnContainer w-[50%]">
              <button className="secondaryBtn">Feel free to ask</button>
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  </div>
  
);

export default Business;
