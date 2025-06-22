import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Service = [
  {
    title: 'Indie Hackers & Makers',
    desc: 'Got an idea at 2AM? Spindle turns your napkin sketch into a working prototype—without chasing datasheets or learning PCB tools.',
    icon: '/images/service/icon1.svg',
  },
  {
    title: 'Hardware Startups',
    desc: 'Speed is survival. Ship faster with AI-generated schematics, firmware, and sourcing—all synced and manufacturable.',
    icon: '/images/service/icon2.svg',
    highlight: true,
  },
  {
    title: 'Engineering Teams',
    desc: 'Eliminate toolchain chaos. Spindle lets mechanical, electrical, and embedded engineers work in one unified design space.',
    icon: '/images/service/icon3.svg',
  },
  {
    title: 'Educators & Students',
    desc: 'Eliminate toolchain chaos. Spindle lets mechanical, electrical, and embedded engineers work in one unified design space.',
    icon: '/images/service/icon4.svg',
  },
  {
    title: 'Rapid R&D Lab',
    desc: 'Test 10 ideas before breakfast. Spindle shrinks iteration cycles from weeks to hours.',
    icon: '/images/service/icon5.svg',
  },
];

const ServiceSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className=" py-8 md:py-12 flex flex-col gap-8 relative">
      <div className="">
        <h2 className="text-center text-[#313131] text-4xl md:text-5xl xl:text-[48px] font-bold mb-8">
          Who’s Spindle For?
        </h2>
      </div>

      <div className="pl-12 md:pl-20 lg:pl-52">
        {/* Floating Arrow Buttons */}
      <div className="hidden md:flex gap-2 absolute top-[90px] right-6 z-10">
        <button
          onClick={scrollLeft}
          className="w-9 h-9 rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollRight}
          className="w-9 h-9 rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex  overflow-x-auto gap-4 pl-6 md:pl-10 pb-4 pt-8 scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {Service.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white border-2 border-[#555555] rounded-[20px] p-6 min-w-[260px] sm:min-w-[270px] max-w-[290px] h-full lg:h-[350px] xl:h-[400px] flex flex-col justify-between snap-start transition-all duration-300 ease-in-out hover:bg-[#FEF8D2] hover:border-yellow-400 hover:shadow-lg hover:scale-105 transform group"
          >
            {/* Hover Sparkle Icon (optional) */}
            <span className="absolute -top-3 -right-3 text-yellow-400 text-4xl opacity-0 group-hover:opacity-100 transition duration-300">✨</span>
            <span className="absolute -bottom-3 -left-3 text-yellow-400 text-4xl opacity-0 group-hover:opacity-100 transition duration-300">✨</span>

            <div>
              <h3 className="font-extrabold text-lg mb-5 xl:text-[36px] leading-10 text-[#313131]">{item.title}</h3>
              <p className="text-sm xl:text-[16px] text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
            {item.icon && (
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 md:w-[100px] md:h-[80px] xl:w-[120px] xl:h-[80px] h-20 mt-4 self-end"
              />
            )}
          </div>
        ))}


      </div>
      </div>
    </section>
  );
};

export default ServiceSection;
