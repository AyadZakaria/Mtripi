import styles from "../style";
import { cover } from "../assets";
import { banner } from "../assets";
const Hero = () => {
  return (
    <section id="home" className={` md:flex-row h-[100vh] flex-col mt-2`}>
      <div className={`flex  ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient  p-1 justify-between  w-[100%] rounded-[10px] mb-5">
          <h2 className={`${styles.heading2} ml-2`}>
            BEST TRIPPING DESTINATIONS IN MOROCCO
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetum, ipsum dolor.
          </p>
        </div>
      </div>
      {/* home text end here */}

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* the main cover image */}
        <img src={banner} alt="cover" className="w-[90%] h-[85vh] rounded " />
        {/* the secondary pic */}
        <div className="absolute w-[30em] h-[fit-content] top-[92%] left-[60%]  bg-black flex xs:hidden lg:flex shadow-lg">
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
    </section>
  );
};

export default Hero;
