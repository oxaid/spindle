import { useState } from 'react';
import { Menu, X, Github, Send } from 'lucide-react';
import Logo from "../assets/images/logo.svg"
import LogoSpindle from "../assets/images/spindle-logo.svg"
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import iconX from "../assets/images/icons/x-nav.svg"
import iconGithub from "../assets/images/icons/github-nav.svg"
import iconTelegram from "../assets/images/icons/telegram-nav.svg"
import { useEffect } from 'react';

const NavbarSpindle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  // Optional: scroll otomatis setelah redirect ke home
  useEffect(() => {
    const hash = window.location.hash;
    if (isHome && hash) {
      const target = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // delay dikit biar DOM ready
    }
  }, [isHome]);

  return (
    <nav className="max-w-6xl mx-auto w-full px-6 md:px-10 lg:px-20 py-4 relative z-50">
      <div className="flex justify-between bg-white items-center rounded-full border-2 border-[#555555] px-4 py-2 flex-wrap md:flex-nowrap backdrop-blur-md">
        {/* Logo */}
        <a href='/' className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Spindle Logo Icon"
            className="w-9 h-9"
          />
          <img
            src={LogoSpindle}
            alt="Spindle Logo Icon"
            className="w-16 h-10"
          />
          {/* <span className="font-bold text-base md:text-lg">Spindle</span> */}
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center flex-1 space-x-7 text-sm lg:text-base text-[#313131]">
          {isHome ? (
            <>
              <ScrollLink to="how-it-works" smooth={true} duration={500} className="cursor-pointer hover:underline">How it works</ScrollLink>
              <ScrollLink to="use-cases" smooth={true} duration={500} className="cursor-pointer hover:underline">Use cases</ScrollLink>
              <ScrollLink to="vision" smooth={true} duration={500} className="cursor-pointer hover:underline">Vision</ScrollLink>

            </>
          ) : (
            <>
              <RouterLink to="/#how-it-works" className="cursor-pointer hover:underline">How it works</RouterLink>
              <RouterLink to="/#use-cases" className="cursor-pointer hover:underline">Use cases</RouterLink>
              <RouterLink to="/#vision" className="cursor-pointer hover:underline">Vision</RouterLink>

            </>
          )}
          <RouterLink to="/contact" className="cursor-pointer hover:underline">Contact</RouterLink>
        </div>


        {/* CTA + Social - Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          {isHome ? (
            <ScrollLink to="earlyAccess" smooth={true} duration={700}>
              <button className="bg-seccondary  text-white px-4 py-2 rounded-full hover:bg-[#d6532b] transition border-2 border-[#555555] font-semibold">
                Get early access
              </button>
            </ScrollLink>
          ) : (
            <RouterLink to="/#earlyAccess">
              <button className="bg-seccondary text-white px-4 py-2 rounded-full hover:bg-[#d6532b] transition border-2 border-[#555555] font-semibold">
                Get early access
              </button>
            </RouterLink>
          )}
          <a
            href="https://x.com/StudioSpindle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
          >
            <img src={iconX} alt="X" className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/tm-0430/spindle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
          >
            <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
          >
            <img src={iconTelegram} alt="Telegram" className="w-4 h-4" />
          </a>

        </div>

        {/* Hamburger Button - Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl p-2 rounded hover:bg-gray-200 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
       {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#EDEBE7] shadow-md px-6 py-4 flex flex-col space-y-4 lg:hidden rounded-b-xl border-t border-gray-200">
          {isHome ? (
            <>
              <ScrollLink to="how-it-works" smooth={true} duration={500} className="cursor-pointer hover:underline">How it works</ScrollLink>
              <ScrollLink to="use-cases" smooth={true} duration={500} className="cursor-pointer hover:underline">Use cases</ScrollLink>
              <ScrollLink to="vision" smooth={true} duration={500} className="cursor-pointer hover:underline">Vision</ScrollLink>
              <RouterLink to="/contact" className="cursor-pointer hover:underline">Contact</RouterLink>
              <ScrollLink to="earlyAccess" smooth={true} duration={500}>
                <button className="bg-[#F06434] text-white px-4 py-2 rounded-full hover:bg-[#d6532b] transition border border-[#555555] w-full">
                  Get early access
                </button>
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink to="/#how-it-works" className="cursor-pointer hover:underline">How it works</RouterLink>
              <RouterLink to="/#use-cases" className="cursor-pointer hover:underline">Use cases</RouterLink>
              <RouterLink to="/#vision" className="cursor-pointer hover:underline">Vision</RouterLink>
              <RouterLink to="/contact" className="cursor-pointer hover:underline">Contact</RouterLink>
              <RouterLink to="/#earlyAccess">
                <button className="bg-[#F06434] text-white px-4 py-2 rounded-full hover:bg-[#d6532b] transition border border-[#555555] w-full">
                  Get early access
                </button>
              </RouterLink>
            </>
          )}


          {/* Social Icons - Mobile Only */}
          <div className="flex justify-center space-x-3 pt-2 md:hidden">
            <a
            href="https://x.com/StudioSpindle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
          >
            <img src={iconX} alt="X" className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/tm-0430/spindle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
            >
              <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
            >
              <img src={iconTelegram} alt="Telegram" className="w-4 h-4" />
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarSpindle;
