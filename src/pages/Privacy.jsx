import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className=" min-h-screen px-6 md:px-10 lg:px-20 py-12">
      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] border-2 border-[#555555] px-8 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text[64px] font-bold text-black mb-5">
          Privacy Policy — <span className="text-[#F65C36] font-semibold italic">Spindle</span>
        </h1>
        <p className="font-light text-sm text-gray-500 mb-6">
          Last Updated: April 24, 2025
        </p>

        {/* Sections */}
        <div className="space-y-6 text-[#8F8F8F] text-base leading-relaxed sm:text-lg md:text-[17px]">
          <section>
            <h2 className="font-bold">1. What We Collect</h2>
            <p>When you interact with Spindle, we may collect the following data:</p>
            <ul className="list-disc ml-5">
              <li>Account Info: name, email address, password (hashed).</li>
              <li>Usage Data: logs of interactions, project activity, and feature usage.</li>
              <li>Design Inputs: natural language prompts, uploaded files, generated designs.</li>
              <li>Device Info: browser type, IP address, OS, and device identifiers.</li>
              <li>Third-Party Integrations: if you connect GitHub, Google, etc.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">2. How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul className="list-disc ml-5">
              <li>Deliver core functionality (project generation, syncing, etc.)</li>
              <li>Improve product performance and personalization</li>
              <li>Provide customer support</li>
              <li>Prevent abuse or unauthorized access</li>
              <li>Send occasional updates, if you opt in</li>
            </ul>
            <p className="mt-2">We do not sell or rent your personal data to anyone. Ever.</p>
          </section>

          <section>
            <h2 className="font-bold">3. Data Storage & Security</h2>
            <ul className="list-disc ml-5">
              <li>All data is encrypted in transit (TLS) and at rest (AES-256).</li>
              <li>We host our services on secure, industry-standard infrastructure.</li>
              <li>Access is restricted to authorized personnel with strict audit controls.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">4. Third-Party Services</h2>
            <p>
              We may use trusted third-party services (e.g., analytics, hosting, sourcing APIs) that process limited data on our behalf under strict agreements.
            </p>
            <p className="mt-2">Examples:</p>
            <ul className="list-disc ml-5">
              <li>Google Analytics</li>
              <li>GitHub OAuth</li>
              <li>Component distributor APIs (e.g., Octopart, LCSC)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">5. Your Rights</h2>
            <p>You can at any time:</p>
            <ul className="list-disc ml-5">
              <li>Access or export your data</li>
              <li>Request correction or deletion</li>
              <li>Revoke consent for optional communications</li>
              <li>Delete your account permanently</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">6. Data Retention</h2>
            <p>
              We keep your data only as long as necessary for legitimate business needs or legal obligations. Projects and files can be deleted manually or on request.
            </p>
          </section>

          <section>
            <h2 className="font-bold">7. International Users</h2>
            <p>
              Our servers may be located in the US, EU, or Asia. By using Spindle, you agree to the transfer of your information to these regions.
            </p>
          </section>

          <section>
            <h2 className="font-bold">8. Policy Changes</h2>
            <p>
              We may update this policy occasionally. If the changes are significant, we’ll notify you via email or in-app notice.
            </p>
          </section>

          <section>
            <h2 className="font-bold">9. Contact Us</h2>
            <p>Questions, concerns, or feedback?<br />Email us at <span className="underline">support@spindle.ai</span></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
