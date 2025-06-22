import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import image from '../assets/images/hero.svg'
import { Link } from "react-scroll";
import EarlyAccessModal from "../components/EarlyAccesModal";
import {  useState } from "react"
import arrowDown from "../assets/images/arrow-down.svg"

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false); // ⬅️ STATE MODAL

  return (
    <section className="w-full max-w-6xl mx-auto relative px-6 md:px-10 lg:px-20 py-12 md:py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl border-2 border-[#555555] bg-white p-8 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
      >

        {/* Right Side - Image (Top on Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          className="md:col-span-1 flex justify-center md:justify-end order-1 md:order-2"
        >
          <motion.img
            src={image}
            alt="Hardware Illustration"
            className="w-60 md:w-64 lg:w-72 max-w-md animate-float"
          />
        </motion.div>

        {/* Left Side - Text (Bottom on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="md:col-span-2 order-2 md:order-1"
        >
          <h1 className="text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-black leading-tight md:leading-tight">
            <p>
              Spin Ideas into Hardware.{' '}
              <motion.span
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4, type: 'spring' }}
                className="text-seccondary italic inline-block"
              >
                Instantly.
              </motion.span>
            </p>
          </h1>
          <p className="text-sm md:text-md lg:text-base text-[#8F8F8F] max-w-md mt-4">
            Turn plain-language thoughts into manufacturable prototypes—schematics, firmware, CAD, and BOM—within minutes.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6 md:mt-12">
            <Link to="earlyAccess" smooth={true} duration={700}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-seccondary border-2 border-[#555555] text-white px-5 py-2 rounded-full hover:bg-[#d6532b] transition"
            >
              Get early access
            </motion.button>
          </Link>
            <Link to="service" smooth={true} duration={700}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#8F8F8F] border-2 border-[#8F8F8F] px-5 py-2 rounded-full hover:bg-gray-100 transition"
            >
              See how it works
            </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-50">
          <motion.button
            onClick={() =>
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-10 md:w-16 h-10 md:h-16 rounded-full border-2 border-[#555555] bg-white flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
          >
            <img src={arrowDown} alt="" />
          </motion.button>
        </div>

      </motion.div>

       {/* ⬇️ Modal dipanggil di bawah */}
      <EarlyAccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default HeroSection;
