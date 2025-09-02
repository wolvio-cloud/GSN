import React from "react";
import { Link } from "react-router-dom";

const TermsDetail = () => {
  return (
    <section
      className="bg-white relative z-20 px-4 md:px-12 lg:px-24 py-10 -mt-8 -mb-8 rounded-[26px]"
      style={{ borderRadius: "28px" }}
    >
      {/* Top rounded container */}
      <div className="bg-[#d2dce4] h-[40px] md:h-[50px] w-full rounded-full md:mt-2"></div>

      <div className="max-w-[1694px] mx-auto relative">
        {/* Intro Paragraph */}
            <p className="font-ubuntu font-medium text-[18px] md:text-[18px] leading-[1.4] text-center mb-12 max-w-[900px] px:4 md:px-2 mx-auto mt-10 md:mt-10">
              Welcome to <strong>Global Success Network (GSN)</strong>. These
              Terms and Conditions (“Terms”) govern your access to and use of
              our website, services, content, features, and membership
              offerings. By accessing or using any part of GSN, you agree to
              abide by these Terms. If you do not agree, please do not use our
              services.
            </p>
        {/* Content & Sidebar */}
             <div className="flex flex-col lg:flex-row gap-10 mt-8">
          {/* Left Content */}
          <div className="flex-1 max-w-[900px] mx-auto lg:mx-0">
           

            {/* Section 1 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              1. Definitions
            </h2>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] font-medium leading-[1.6]">
              <li>
                “GSN” / “We” / “Us” / “Our” refers to Global Success Network and
                its authorized representatives.
              </li>
              <li>
                “User” / “You” refers to any individual or entity accessing
                GSN's services or website.
              </li>
              <li>
                “Member” refers to an approved participant in the GSN network.
              </li>
              <li>“Website” refers to all pages under [Insert Website URL].</li>
            </ul>

            {/* Section 2 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              2. Eligibility
            </h2>
            <p className="font-ubuntu text-[18px]">
              {" "}
              To use our platform or apply for membership, you must:
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>Be at least 18 years of age</li>
              <li>Have the authority to enter into binding agreements</li>
              <li>Provide accurate and truthful information</li>
              <li>
                {" "}
                GSN reserves the right to approve, reject, or revoke access or
                membership at any time without notice.
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              3. Use of Services
            </h2>
            <p className="font-ubuntu text-[18px]"> You agree to:</p>
            <ul className="list-disc ml-6  font-ubuntu text-[20px] leading-[1.6]">
              <li>
                Use GSN services only for lawful and professional purposes
              </li>
              <li>
                Refrain from misusing the platform (e.g., spamming, unauthorized
                promotion, scraping data)
              </li>
              <li>
                Respect the privacy, time, and dignity of fellow members and
                participants
              </li>
            </ul>
            <p className="font-ubuntu text-[18px] mb-6">
              Any violation of ethical or professional conduct may lead to
              suspension or termination of access or membership.
            </p>

            {/* Section 4 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              4. Membership Terms
            </h2>
            <p className="font-ubuntu text-[18px]">
              {" "}
              GSN membership is subject to:
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>Successful application and onboarding process</li>
              <li>
                Payment of applicable membership or subscription fees (if any)
              </li>
              <li>
                Adherence to the GSN Code of Conduct and community guidelines
              </li>
              <li>
                Membership may be revoked for non-compliance, misuse of
                referrals, or disruptive behavior.
              </li>
            </ul>

            {/* Section 5 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              5. Intellectual Property
            </h2>

            <p className="font-ubuntu text-[18px] mb-6">
              All content provided by GSN — including text, graphics, logos,
              branding, training material, videos, and software — is the
              intellectual property of GSN or its licensors. You may not
              reproduce, modify, distribute, or use any content without prior
              written consent.
            </p>

            {/* Section 6 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              6. Third-Party Links
            </h2>
            <p className="font-ubuntu text-[18px] mb-6">
              Our website or events may include links to third-party websites or
              services. GSN is not responsible for their content, privacy
              policies, or practices. Use them at your own risk.
            </p>

            {/* Section 7 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              7. Data Protection
            </h2>
            <p className="font-ubuntu text-[18px] mb-6">
              We handle your data in accordance with our Privacy Policy, which
              explains how we collect, store, and use your information.
            </p>

            {/* Section 8 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              8. Payments and Refunds
            </h2>
            <p className="font-ubuntu text-[18px]">
              {" "}
              If you purchase membership or services:
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>
                All fees must be paid as per the payment terms provided at the
                time of enrollment
              </li>
              <li>
                Refunds are not guaranteed and are subject to GSN’s discretion
                unless otherwise specified
              </li>
              <li>Non-payment may result in access restriction</li>
            </ul>

            {/* Section 9 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              9. Limitation of Liability
            </h2>
            <p className="font-ubuntu text-[18px] ">GSN is not liable for:</p>
            <ul className="list-disc ml-6 font-ubuntu text-[20px] leading-[1.6]">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of data, business, or opportunities</li>
              <li>
                Outcomes from referrals, networking, or third-party interactions
              </li>
            </ul>
            <p className="font-ubuntu text-[18px] mb-6">
              We provide services "as is" and do not guarantee specific
              outcomes.
            </p>

            {/* Section 10 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              10. Indemnity
            </h2>
            <p className="font-ubuntu text-[18px] ">
              You agree to indemnify and hold harmless GSN, its team, and
              partners from any claims, liabilities, losses, or damages arising
              from:
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>Your use or misuse of the platform</li>
              <li>Violation of these Terms</li>
              <li>Infringement of rights of third parties</li>
            </ul>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-[350px] flex-shrink-1 mt-4 lg:mt-50">
            <div className=" sticky lg:top-[100px] top-[10px] bg-[#d2dce4] rounded-[20px] p-6">
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
                  className="text-[18px] text-black font-bold hover:text-[#153153] cursor-pointer block"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  to="/cookie-policy"
                  className="text-[18px] text-[#777] hover:text-[#153153] cursor-pointer block"
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

export default TermsDetail;
