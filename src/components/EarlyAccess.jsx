import React, { useState } from 'react';
import rocket from '../assets/images/rocket.svg'
import starRight from '../assets/images/star1.svg'
import starLeft from '../assets/images/star2.svg'
import toast from 'react-hot-toast';


const FormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email) {
      alert('Please fill out both fields.');
      return;
    }

    if (!emailValid) {
      alert('Please enter a valid email address.');
      return;
    }

    toast.success('🚀 Thank you! Your request has been submitted.');
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-8 md:py-12">
      <div className="relative bg-white border-2 border-[#555] rounded-[32px] px-6 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-around items-center lg:items-start gap-10 lg:gap-16 overflow-visible">
    {/* Emoji Icons inside container */}
        <img
        src={rocket}
        alt="Open Quote"
        style={{ animationDelay: '0s', animationDuration: '1s' }}
        className="absolute animate-bounce-soft -top-8 right-20 sm:-top-8 sm:right-20 md:-top-10 md:right-28 w-20 h-20 lg:w-24 lg:h-24 text-[#F06434]"
        />
        <img
        src={starRight}
        alt="Open Quote"
        style={{ animationDelay: '0s', animationDuration: '2s' }}
        className="absolute  animate-bounce-soft -top-12 right-1  sm:right-1 md:-top-16 md:right-5 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 text-[#F06434]"
        />
        <img
        src={starLeft}
        alt="Open Quote"
        style={{ animationDelay: '0s', animationDuration: '1s' }}
        className="absolute animate-bounce-soft  -bottom-7 -left-6 sm:-bottom-10 sm-left-12 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-[#F06434]"
        />

        {/* Left Heading */}
        <div className="w-full lg:w-[30%] flex flex-col gap-2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[40px]  lg:text-5xl xl:text-[64px] font-bold leading-snug md:leading-none">
            Ready to Prototype{" "}
            <span className="text-[#F06434] font-semibold">Smarter?</span>
          </h2>
        </div>

      {/* Right Form */}
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="w-full lg:w-[70%] flex flex-col gap-4 max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b-2 border-[#555555] outline-none py-2 text-sm md:text-base placeholder:text-[#8F8F8F] placeholder"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b-2 border-[#555555] outline-none py-2 text-sm md:text-base placeholder:text-[#8F8F8F] placeholder"
        />
        <p className="text-xs text-[#8F8F8F] mt-3 mb-3 font-light">
          By signing up, you agree to Spindle’s <span className='font-bold'>Terms of Service</span> and <span className='font-bold'>Privacy Policy.</span>
        </p>
        <button
          type="submit"
          className="bg-seccondary border-2 border-[#555555] text-white text-sm px-6 py-2 rounded-full hover:bg-[#d6532b] transition w-max"
        >
          Get early access
        </button>
      </form>
      </div>
    </section>
  );
};

export default FormSection;
