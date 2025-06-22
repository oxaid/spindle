import React from 'react';

const TermsOfServicePage = () => {
  return (
    <>
      <div className=" min-h-screen px-6 md:px-10 lg:px-20 py-12">
        {/* Main Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] border-2 border-[#555555] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          {/* Header */}
          <h1 className="w-2/3 text-3xl md:text-4xl lg:text-5xl xl:text[64px] font-bold text-black mb-5">
            Terms of Services — <span className="text-[#F65C36] italic font-semibold">Spindle</span>
          </h1>
          <p className="font-light text-sm text-gray-500 mb-6">Last Updated: April 24, 2025</p>

          {/* Body Content */}
          <div className="space-y-6 text-[#8F8F8F] text-base leading-relaxed sm:text-lg md:text-[17px]">
            <section>
              <h2 className="font-semibold">1. Who We Are</h2>
              <p>Spindle is an AI-powered platform that helps builders turn natural language into hardware prototypes. These terms govern your use of our services.</p>
            </section>

            <section>
              <h2 className="font-semibold">2. Your Account</h2>
              <p>You are responsible for maintaining the confidentiality of your account and ensuring that only authorized individuals access it.</p>
            </section>

            <section>
              <h2 className="font-semibold">3. Acceptable Use</h2>
              <ul className="list-disc ml-5 mt-1">
                <li>Don’t use Spindle to harm, spam, or exploit others.</li>
                <li>Don’t attempt to reverse engineer or scrape our systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold">4. Intellectual Property</h2>
              <p>All branding, software, and documentation belong to Spindle. You may not use our content without permission.</p>
            </section>

            <section>
              <h2 className="font-semibold">5. Generated Content</h2>
              <p>You're responsible for how you use the outputs. We do not claim ownership of your designs, but we reserve the right to review them for policy compliance.</p>
            </section>

            <section>
              <h2 className="font-semibold">6. Fees & Payment</h2>
              <p>Some features may require payment. All fees are listed on our site and are subject to change with notice.</p>
            </section>

            <section>
              <h2 className="font-semibold">7. Termination</h2>
              <p>We may suspend or terminate your account if you violate these terms or misuse the platform.</p>
            </section>

            <section>
              <h2 className="font-semibold">8. Disclaimer of Warranties</h2>
              <p>We provide Spindle “as is.” We don’t guarantee error-free or uninterrupted service.</p>
            </section>

            <section>
              <h2 className="font-semibold">9. Limitation of Liability</h2>
              <p>We are not liable for indirect, incidental, or consequential damages resulting from your use of the platform.</p>
            </section>

            <section>
              <h2 className="font-semibold">10. Changes to Terms</h2>
              <p>We may update these terms from time to time. We'll notify you of significant changes via email or in-app notice.</p>
            </section>

            <section>
              <h2 className="font-semibold">11. Contact</h2>
              <p>For questions or feedback, email us at <span className="font-bold">support@spindle.ai</span>.</p>
            </section>
          </div>
        </div>
      </div>

    </>
  );
};

export default TermsOfServicePage;
