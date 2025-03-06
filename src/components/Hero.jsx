
// import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[70vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-3'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915EFF]'>Amna</span>
          </h1>
          <p className={`${styles.heroSubText} mt-0 mb-0 pb-0 text-white-100`}>
          Specializing in PHP Laravel, React.js, Android Kotlin, <br className='sm:block hidden' />
          and SwiftUI for complete web and<br className='sm:block hidden' />  mobile solutions.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

    </section>
  );
};

export default Hero;