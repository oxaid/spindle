import React from 'react';
import quoteUp from '../assets/images/quote-up.svg'
import quoteDown from '../assets/images/quote-down.svg'

const TestimonialSection = () => {
  return (
    <section className="px-16 sm:px-20 max-w-5xl mx-auto py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
        {/* Left - Heading */}
        <div >
          <h2 className="text-[#313131] text-4xl md:text-[46px] lg:text-[56px] xl:text-[64px] font-extrabold leading-tight ">
            <p>Unlocking
            Invention for
            the <span className="text-[#F06434] italic">Digital Generation</span>
            </p>
          </h2>
        </div>

        {/* Right - Testimonial Card */}
        <div className="relative rounded-[50px] border-2 border-[#555555] bg-white p-12 md:px-12 md:py16 lg:px-12 lg:py-20 ">
          {/* Quote Icons */}
          <img
          src={quoteUp}
          alt="Close Quote"
          className="absolute -top-12 right-10 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-[#F06434]"
        />

        {/* Kutipan kiri bawah (❝) */}
        <img
          src={quoteDown}
          alt="Open Quote"
          className="absolute -bottom-12 left-10  w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-[#F06434]"
        />

          {/* Quote Text */}
          <p className="text-base xl:text-[20px] lg:text-lg text-[#8F8F8F] lg:leading-normal">
            <span className=" font-bold">Hardware</span> should move as fast as software. <br />
            <span className="font-bold">Spindle</span> makes that possible by combining AI, design automation, and real-world manufacturability in{' '}
            <span className="font-bold">one continuous workflow</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
