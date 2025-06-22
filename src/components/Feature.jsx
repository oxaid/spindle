import React from 'react';
import SectionWrapper from "../components/SectionWrapper"
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Natural Language Design',
    desc: 'Describe your idea in plain English',
    icon: '/images/features/icon1.svg',
  },
  {
    title: 'Multidomain Sync',
    desc: 'Synchronize CAD, code, and circuit',
    icon: '/images/features/icon2.svg',
  },
  {
    title: 'Built-In Simulation',
    desc: 'Run tests instantly, no setup needed',
    icon: '/images/features/icon3.svg',
  },
  {
    title: 'Smart Part Sourcing',
    desc: 'Real-time component recommendations',
    icon: '/images/features/icon4.svg',
  },
  {
    title: 'Remixable Hardware',
    desc: 'Swap modules with ease',
    icon: '/images/features/icon5.svg',
  },
  {
    title: 'Sustainable by Default',
    desc: 'Eco-conscious components and energy',
    icon: '/images/features/icon6.svg',
  },
];

const FeatureSection = () => {

  return (
    <SectionWrapper id="features" className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-10">
      <div className="grid md:grid-cols-5 gap-10 items-center md:grid-flow-col md:items-stretch ">
        {/* Left: Text */}
        <div className=" md:col-span-2 bg-white p-10 rounded-3xl border-2 border-[#555555] flex justify-center items-center">
          <div className="">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#313131] font-extrabold leading-snug">
            Design <span className="text-seccondary">Hardware</span><br />
            Like <span className="italic text-seccondary">Software</span>
          </h2>
          <p className="text-sm md:text-base text-[#8F8F8F] mt-4 max-w-md">
            Spindle unifies the entire hardware prototyping process into a single AI-driven workflow.
          </p>
          </div>
        </div>

        {/* Right: Features */}
        <div className="mx-auto md:col-span-3 grid grid-cols-2 xl:grid-cols-3 gap-4 border">
          {features.map((feature, index) => (
            <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="group bg-white border-2 border-[#555555] rounded-[20px] p-5 hover:shadow-bottom-card-custom  hover:cursor-pointer transition-all duration-300"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="block mx-auto w-20 md:w-[100px] md:h-[80px] xl:w-[120px] xl:h-[80px] h-20 mb-4"
            />
            <h3 className="font-bold text-lg text-[#555555]">{feature.title}</h3>
            <p className="text-xs text-[#8F8F8F] mt-3 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[100px]">
              {feature.desc}
            </p>
          </motion.div>

          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeatureSection;
