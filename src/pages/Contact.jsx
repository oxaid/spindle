import React, { useState } from 'react';
import iconX from "../assets/images/icons/x-nav.svg"
import iconGithub from "../assets/images/icons/github-nav.svg"
import iconTelegram from "../assets/images/icons/telegram-nav.svg"
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="px-6 md:px-10 py-20">
      <div className="relative max-w-5xl mx-auto bg-white border-2 border-[#555555] rounded-[32px] px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-[72px] lg:text-[80px] xl:text-[96px] text-[#313131] md:leading-none font-bold">
              Connect <span className="text-seccondary font-bold">with us</span>
            </h2>
          </div>
          <div className="mt-5 px-1">
            <h3 className="text-lg lg:text-xl text-[#555555] font-semibold mb-3 text-bold">Socials</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://your-x-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
              >
                <img src={iconX} alt="X" className="w-3 h-3" />
              </a>

              <a
                href="https://github.com/your-project"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
              >
                <img src={iconGithub} alt="GitHub" className="w-3 h-3" />
              </a>

              <a
                href="https://t.me/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#555555] rounded-full hover:bg-gray-100 transition-colors"
              >
                <img src={iconTelegram} alt="Telegram" className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-black outline-none py-2 text-sm md:text-base placeholder:text-[#999999] italic"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-black outline-none py-2 text-sm md:text-base placeholder:text-[#999999] italic"
          />
          <textarea
            name="message"
            placeholder="Type your messages.."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-[#555555] rounded-xl px-4 py-3 text-sm md:text-base placeholder:text-[#999999] italic resize-none"
          />
          <button
            type="submit"
            className="self-start bg-seccondary border border-[#555555] text-white text-sm px-6 py-2 rounded-full hover:bg-[#d6532b] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
