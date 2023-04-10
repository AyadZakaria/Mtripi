import styles from "../style";
import { cover } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={` md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex  ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5">
          <h2 className={`${styles.heading2} ml-2`}>
            TRIPPY MA3A FM MERGHRIB DABA YALAH !!!!
          </h2>
        </div>
        <div className="flex flex-row justify-between items-center w-full "></div>
      </div>
      {/* home text end here */}

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
        <img src={cover} alt="cover" className=" relative " />

        <div className="absolute w-[30em] h-[fit-content] top-[95%] left-[58%]  z-10 bg-black flex xs:hidden lg:flex shadow-lg">
          <div className="ml-6 mt-2 w-full p-2">
            <h1 className="text-white text-lg">Casblanca by night</h1>
            <p className="text-xs text-dimWhite">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-[100%] ">
            <img
              src={cover}
              alt="cover"
              className="w-[100%] h-[100%] float-right p-0 m-0"
            />
          </div>
        </div>
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      </div> */}
    </section>
  );
};

export default Hero;
