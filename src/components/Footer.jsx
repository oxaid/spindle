import React from 'react';
import Logo from '../assets/images/logo.svg'
import { X, Github, Send } from 'lucide-react';
import iconX from "../assets/images/icons/x.svg"
import iconGithub from "../assets/images/icons/github.svg"
import iconTelegram from "../assets/images/icons/telegram.svg"
import arrowUp from "../assets/images/arrow-up.svg"

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 mx-6 md:mx-28 border-2 border-[#313131] bg-seccondary text-white rounded-[118px] px-6 md:px-16 py-4 bottom-5">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 md:w-16 h-10 md:h-16 bg-white text-black border-2 border-[#555555] rounded-full shadow flex items-center justify-center"
      >
        <img src={arrowUp} alt="" />
      </button>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Column */}
        <div className="flex flex-col items-center mb-3 md:items-end">
          {/* Logo + Brand */}
          <a
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img
              src={Logo}
              alt="Spindle Logo"
              className="w-8 md:w-12 h-8 md:h-12"
            />
            <span className="font-bold text-lg md:text-xl lg:text-2xl">Spindle</span>
          </a>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-lg">
            <a
              href="https://x.com/spindle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#F06434] transition"
            >
              <img src={iconX} alt="X" className="w-4 h-4" />
            </a>
            <a
              href="https://spindle.ai/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#F06434] transition"
            >
              <img src={iconGithub} alt="X" className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@spindle.ai"
              className="w-7 h-7 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#F06434] transition"
            >
              <img src={iconTelegram} alt="X" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-2 text-sm text-white/90 mb-4">
            <a href="/privacy-policy" className="hover:underline transition">Privacy Policy |</a>
            <a href="/terms-of-service" className="hover:underline transition">Terms of Service |</a>
            <a href="/careers" className="hover:underline transition">Careers</a>
          </div>
          <p className="text-xs italic text-white">
            © 2025 <span className="font-semibold">Spindle Technologies</span>. Made for builders. Powered by AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
