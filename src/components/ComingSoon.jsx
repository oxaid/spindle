import React from 'react';
import lock from '../assets/images/lock.svg'
import { motion, useAnimation } from 'framer-motion';


const LiveDemoSection = () => {
  const controls = useAnimation();

  const handleClick = () => {
  controls.start({
    x: [0, -30, 30, -20, 20, -8, 8, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  });
};

  return (
    <section className="px-12 md:px-10 lg:px-20 py-12 md:py-16 flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl xl:text-[48px] font-semibold mb-16 text-[#313131]">Live demo</h2>

      {/* Card with click-shake animation */}
      <motion.div
        animate={controls}
        onClick={handleClick}
        className="cursor-pointer relative w-full max-w-4xl min-h-[420px] border-2 border-[#555555] rounded-[24px] bg-black/40 backdrop-blur-md flex items-center justify-center text-center px-6 py-20 transition"
      >
        {/* Lock Icon */}
        <img
          src={lock}
          alt="Open Quote"
          className="absolute -top-12 right-12 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-[#F06434]"
        />

        {/* Content */}
        <div>
          <p className="text-white text-5xl sm:text-6xl md:text-[72px] xl:text-[96px] font-bold">Coming soon</p>
          <p className="text-white/80 text-base md:text-lg font-bold mt-3 text-right">(TBA)</p>
        </div>
      </motion.div>
    </section>
  );
};

export default LiveDemoSection;
