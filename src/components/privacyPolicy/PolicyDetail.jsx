import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
   <section
      className="bg-white relative z-20 px-4 md:px-12 lg:px-24 py-10 -mt-8 -mb-8 rounded-[26px]"
      style={{ borderRadius: "28px" }}
    >
      {/* Top rounded container */}
      <div className="bg-[#d2dce4] h-[40px] md:h-[50px] w-full rounded-full"></div>

      <div className="max-w-[1694px] mx-auto relative">
        {/* Content & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          {/* Left Content */}
         <div className="flex-1 ">
            {/* Intro Paragraph */}
            <p
              className="font-ubuntu  font-medium text-[18px] md:text-[18px] leading-[1.4] text-center mb-12 max-w-[900px] mx-auto "
            >
              At <strong>Global Success Network (GSN)</strong>, we are committed
              to protecting your privacy and ensuring transparency in how we
              collect, use, and safeguard your personal data. This Privacy
              Policy outlines the types of personal data we collect, the reasons
              we collect it, your rights, and how we keep your information
              secure.
            </p>

            {/* Section 1 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-25 mb-3">
              1. Introduction
            </h2>
            <p className="font-ubuntu text-[18px] leading-[1.6] mb-6">
              This Privacy Policy applies to personal data collected through our
              website and services, including interactions related to
              membership, referrals, contact forms, and employment
              opportunities. By using our website or engaging with GSN in any
              way, you acknowledge that you have read and understood this
              Privacy Policy.
            </p>

            {/* Section 2 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              2. Who Is the Data Controller?
            </h2>
            <p className="font-ubuntu text-[18px] leading-[1.6] mb-6">
              The data controller responsible for the processing of your
              personal data is:
              <br />
              Global Success Network (GSN)
              <br />
              A Group of Zenith77 Multi Business Pvt Ltd.
              <br />
              Email: info@zenith77.com
              <br />
              Phone: +91 95000 78674
              <br />
              We are responsible for deciding how your personal data is
              collected, stored, and used in accordance with applicable data
              protection laws.
            </p>

            {/* Section 3 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              3.What Data Is Collected and How
            </h2>
            <p className="font-ubuntu text-[18px] leading-[1.6] mb-4">
              We collect and process personal data through the following
              channels:
            </p>

            {/* 3a */}
            <h3 className="font-ubuntu font-bold text-[18px] mb-2">
              a) Data You Provide to Us Directly
            </h3>
            <ul className="list-disc ml-6 mb-4 font-ubuntu text-[18px] leading-[1.6]">
              <li>Full name</li>
              <li>Email address</li>
              <li>Contact number</li>
              <li>Business name and designation</li>
              <li>Professional background and experience</li>
              <li>Resume or portfolio (for applicants)</li>
              <li>
                Any other data you share voluntarily via forms, emails, or
                meetings
              </li>
            </ul>
            <p className="font-ubuntu text-[18px] mb-6">
              This information is usually collected when:
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>You apply to become a member</li>
              <li>You fill out a form on our website</li>
              <li>You apply for a position within GSN</li>
              <li>You contact us with an inquiry</li>
              <li>You attend an event or webinar</li>
            </ul>

            {/* 3b */}
            <h3 className="font-ubuntu font-bold text-[18px] mb-2">
              b) Data Collected via Referral
            </h3>
            <p className="font-ubuntu text-[18px] mb-4">
              If you are referred by a current GSN member or third party, we may
              receive:
            </p>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>Your name and professional details</li>
              <li>Contact information</li>
              <li>Reason for referral</li>
            </ul>
            <p className="font-ubuntu text-[18px] ">
              We use this information to assess eligibility for membership or
              engagement and may contact you to follow up.
            </p>
            {/* 3c */}
            <h3 className="font-ubuntu font-bold text-[18px] mb-2">
              c) Data Collected Through Website Usage
            </h3>
            <p className="font-ubuntu text-[18px] mb-4">
              When you use our website, we automatically collect technical
              information such as:
            </p>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited, time spent, and navigation behavior</li>
              <li>Referral URLs</li>
              <li>Cookies and similar tracking data</li>
            </ul>
            <p className="font-ubuntu text-[18px] mb-4">
              We collect this data using cookies, analytics tools (e.g., Google
              Analytics), and server logs.
            </p>
            {/* Section 4 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              4. Purpose of Data Use
            </h2>
            <p className="font-ubuntu text-[18px] ">
              We collect and process your data for the following purposes:
            </p>
            <ul className="list-disc ml-6 mb-6 font-ubuntu text-[18px] leading-[1.6]">
              <li>
                Membership Management: To evaluate and process applications,
                manage profiles, and enable networking.
              </li>
              <li>
                Communication: To respond to inquiries, send updates, and share
                event information.
              </li>
              <li>
                Recruitment: To assess and respond to employment applications.
              </li>
              <li>
                Platform Improvement: To analyze usage data, improve user
                experience, and personalize content.
              </li>
              <li>
                Marketing (with Consent): To share GSN-related news, promotions,
                or updates.
              </li>
              <li>
                Legal Compliance: To comply with legal obligations, respond to
                lawful requests, and enforce our terms.
              </li>
            </ul>

            {/* Section 5 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              5. How Long We Keep Your Data
            </h2>
            <p className="font-ubuntu text-[18px] ">
              We retain your data only as long as necessary to fulfill the
              purposes for which it was collected, including for legal or
              regulatory reasons.
            </p>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>
                Membership and user data: Retained for the duration of your
                involvement with GSN and a limited time thereafter.
              </li>
              <li>
                Recruitment data: Stored for up to 12 months unless extended
                with your consent.
              </li>
              <li>
                Website and analytics data: Retained in accordance with our
                cookie policy and analytics provider settings.
              </li>
            </ul>
            <p className="font-ubuntu text-[18px] ">
              Data may be anonymized and retained for statistical or research
              purposes indefinitely.
            </p>

            {/* Section 6 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              6. Third Parties With Whom We May Share Data
            </h2>
            <p className="font-ubuntu text-[18px]">
              We may share your personal data with trusted third parties only
              when necessary and under strict confidentiality agreements.
            </p>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>
                Service providers: Hosting, email delivery, analytics, CRM
                tools, and payment gateways.
              </li>
              <li>
                Partners or affiliates: Only when collaboration requires sharing
                basic contact details (e.g., event coordination)
              </li>
              <li>
                Legal authorities: If required by law, subpoena, or to enforce
                our terms and protect rights
              </li>
            </ul>
            <p className="font-ubuntu text-[18px] ">
              We do not sell your personal data.
            </p>

            {/* Section 7 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              7. Your Rights Under Data Protection Laws
            </h2>
            <p className="font-ubuntu text-[18px]">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>Access: Request a copy of your personal data we hold.</li>
              <li>
                Correction: Request corrections to inaccurate or incomplete
                data.
              </li>
              <li>
                Erasure: Request deletion of your data (“right to be
                forgotten”), subject to legal limitations.
              </li>
              <li>
                Objection: Object to processing based on legitimate interest.
              </li>
              <li>
                Restriction: Ask us to suspend processing under certain
                conditions.
              </li>
              <li>
                Portability: Receive your data in a machine-readable format or
                request its transfer.
              </li>
              <li>
                Withdraw Consent: Where processing is based on consent, you may
                withdraw at any time
              </li>
            </ul>
            <p className="font-ubuntu text-[18px]">
              To exercise any of these rights, email us at [Insert Contact
              Email]. We may require verification of identity before processing
              your request.
            </p>
            {/* Section 8 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              8. How We Keep Your Data Secure
            </h2>
            <p className="font-ubuntu text-[20px]">
              GSN implements strong technical and organizational security
              measures to protect your data, including:
            </p>
            <ul className="list-disc ml-6  font-ubuntu text-[18px] leading-[1.6]">
              <li>SSL encryption on our website</li>
              <li>Firewalls and server security protocols</li>
              <li>Role-based access controls</li>
              <li>Secure storage systems and regular security audits</li>
              <li>
                Employee confidentiality agreements and data handling training
              </li>
            </ul>
            <p className="font-ubuntu text-[18px]">
              Despite our efforts, no system is 100% secure. We encourage users
              to exercise caution and report any suspicious activity.
            </p>
            {/* Section 9 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              9. Amendments to This Privacy Policy
            </h2>
            <p className="font-ubuntu text-[18px] mb-6">
              We may update this policy to reflect changes in legal
              requirements, technology, or our practices. When we do, we will
              revise the “Last Updated” date at the top of this page. In the
              case of significant changes, we may notify users directly via
              email or website banner. We encourage you to review this page
              periodically.
            </p>

            {/* Section 10 */}
            <h2 className="font-ubuntu font-bold text-[22px] mt-6 mb-3">
              10. Miscellaneous
            </h2>
            <p className="font-ubuntu text-[18px] mb-6">
              This policy is governed by the laws of [Insert Country/Region,
              e.g., India or applicable jurisdiction]. If any provision of this
              Privacy Policy is found to be invalid or unenforceable, the
              remaining provisions shall remain in full force and effect.
            </p>
          </div>

         
          {/* Right Sidebar */}
{/* Right Sidebar */}
<div className="lg:w-[430px] flex-shrink-0 mt-4 lg:mt-50">
  
    <div className="sticky lg:top-[100px] top-[10px] bg-[#d2dce4] rounded-[20px] p-6">
      <h3 className="font-ubuntu font-medium text-[20px] md:text-[20px] text-black mb-4 text-center">
        LEGAL PAGES
      </h3>
      <div className="bg-white rounded-[14px] p-5 space-y-5">
         <Link
          to="/privacy-policy"
          className="text-[18px] text-black font-bold hover:text-[#153153] cursor-pointer block"
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

export default PrivacyPolicy;
