import styles from "../style";
import {cover } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={` md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5">
          <h2 className={`${styles.heading2} ml-2`}>
            TRIPPY MA3A FM MERGHRIB DABA YALAH !!!!
          </h2>
        </div>
        <div className="flex flex-row justify-between items-center w-full ">
            
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative  mt-2 `}>
        <img src={cover} alt="cover" className="w-[100%] h-[100%] relative z-[5]" />

        
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="relative z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className="absolute w-[499px] h-[111px] top-[700px] left-[990px] z-10 bg-black flex xs:hidden lg:flex shadow-lg">
         <div className="ml-6 mt-5 w-full">
          <h1 className="text-white text-lg">Casblanca by night</h1>
          <p className="text-xs text-dimWhite">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div> 
          <div className="w-[100%] "><img src={cover} alt="cover" className="w-[100%] h-[100%] float-right  z-[5]" /></div>
        </div>
        

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
