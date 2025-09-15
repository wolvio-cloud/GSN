
import React from "react";
import { Link } from "react-router-dom";

const CookieDetail = () => {
  return (
    <section
      className="bg-white relative z-20 px-4 md:px-12 lg:px-24 py-10 mt-8 mb-8 rounded-[26px]"
      style={{ borderRadius: "28px" }}
    >
      {/* Top rounded container */}
      <div className="bg-[#d2dce4] h-[40px] md:h-[50px] w-full rounded-full md:mt-2"></div>

      <div className="max-w-[1694px] mx-auto relative">
        {/* Intro Paragraph - FULL WIDTH */}
        <p className="font-ubuntu font-medium text-[18px] md:text-[18px] leading-[1.4] text-center mb-12 max-w-[1000px] mx-auto mt-10 md:mt-10">
          This Cookie Policy explains how{" "}
          <strong>Global Success Network (GSN)</strong> uses cookies and similar
          technologies to provide, improve, and personalize your experience on
          our website. By continuing to use our site, you consent to the use of
          cookies as described in this policy.
        </p>

        {/* Content & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          {/* Left Content */}
          <div className="flex-1 max-w-[900px] mx-auto lg:mx-0">
            {/* Section 1 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              1. What Are Cookies?
            </h2>
            <p className="font-ubuntu text-[18px] leading-[1.6] ">
              Cookies are small text files placed on your device when you visit
              a website. They help improve your experience by remembering your
              preferences, tracking user behavior, and enabling certain
              functionalities of the website.
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>Session cookies (deleted when you close your browser)</li>
              <li>
                Persistent cookies (remain until manually deleted or expired)
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              2. Types of Cookies We Use
            </h2>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>
                <strong>Essential Cookies:</strong> Required for core website
                functionality such as navigation, access to secure areas, and
                form submissions. The website cannot function properly without
                them.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> Help us
                understand how visitors use our site (e.g., which pages are most
                visited) so we can improve content and user experience. We may
                use tools like Google Analytics or similar services.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your
                preferences, such as language settings or form inputs, to
                provide a more personalized experience.
              </li>
              <li>
                <strong>Marketing & Tracking Cookies:</strong> With your
                consent, we may use cookies from services like Facebook,
                LinkedIn, or Google Ads to deliver relevant advertising and
                track campaign performance.
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              3. Purpose of Using Cookies
            </h2>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>Ensure secure and functional navigation</li>
              <li>Analyze site performance and user behavior</li>
              <li>Customize your user experience</li>
              <li>Deliver targeted messaging (with consent)</li>
            </ul>

            {/* Section 4 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              4. Third-Party Cookies
            </h2>
            <p className="font-ubuntu text-[20px] leading-[1.6] ">
              We may allow selected third parties to place cookies on your
              device to support features like embedded videos, analytics, and
              advertising. These providers may collect data independently in
              accordance with their own privacy policies.
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>Google Analytics</li>
              <li>Facebook Pixel</li>
              <li>LinkedIn Insight Tag</li>
              <li>YouTube (for video content)</li>
            </ul>

            {/* Section 5 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              5. Cookie Consent & Management
            </h2>
            <p className="font-ubuntu text-[18px] leading-[1.6] ">
              When you visit our website for the first time, you will see a
              cookie consent banner asking you to accept or customize your
              cookie preferences.
            </p>
            <p className="font-ubuntu text-[18px] leading-[1.6] ">
              You can manage or disable cookies by:
            </p>
            <ul className="list-disc ml-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>Adjusting your browser settings</li>
              <li>Clearing cookies stored on your device</li>
              <li>Using our cookie settings panel (if enabled)</li>
            </ul>
            <p className="font-ubuntu text-[18px] mb-6">
              Note: Disabling cookies may limit some features or functionality
              of the site.
            </p>

            {/* Section 6 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              6. Your Rights
            </h2>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>Consent or refuse non-essential cookies</li>
              <li>Request information about what data is being collected</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="font-ubuntu text-[18px] mb-6">
              For more about your rights, please review our Privacy Policy.
            </p>

            {/* Section 7 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              7. Updates to This Policy
            </h2>
            <p className="font-ubuntu text-[18px] mb-6">
              We may update this Cookie Policy to reflect changes in legal
              requirements or technology. Changes will be posted here with a
              revised “Last Updated” date. Continued use of the site implies
              acceptance.
            </p>

            {/* section 8*/}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              8. Contact us
            </h2>
            <p className="font-ubuntu text-[18px] ">
              If you have questions about this Cookie Policy or how we use your
              data, please contact us at:
            </p>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>
                {" "}
                <strong>Email:</strong> info@zenith77.com
              </li>
            </ul>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-[350px] flex-shrink-1 mt-4 lg:mt-50">
            <div className="sticky lg:top-[100px] top-[10px] bg-[#d2dce4] rounded-[20px] p-6">
              <h3 className="font-ubuntu font-medium text-[20px] text-black mb-4 text-center">
                LEGAL PAGES
              </h3>
              <div className="bg-white rounded-[14px] p-5 space-y-5">
                <Link
                  to="/privacy-policy"
                  className="text-[18px] text-[#777] hover:text-[#153153] cursor-pointer block"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="text-[18px] text-[#777] hover:text-[#153153] cursor-pointer block"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  to="/cookie-policy"
                  className="text-[18px] text-black font-bold hover:text-[#153153] cursor-pointer block"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rounded container */}
      <div className="bg-[#d2dce4] h-[40px] md:h-[50px] w-full rounded-full mt-10"></div>
    </section>
  );
};

export default CookieDetail;
