// import React, { useState } from "react";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// const faqData = [
//   {
//     question: "What is GSN and how does it differ from other networking platforms?",
//     answer:
//       "GSN (Global Success Network) is a purpose-driven networking platform that blends AI-powered matchmaking, conscious business practices, and spiritual alignment to help entrepreneurs grow authentically. Unlike traditional platforms, GSN prioritizes meaningful, values-driven connections over cold outreach, promoting both professional and personal evolution.",
//   },
//   {
//     question: "How can I become a member of GSN?",
//     answer:
//       "Becoming a member of GSN is simple. Start by submitting a membership application, followed by a one-on-one discovery call. This ensures your values and goals align with GSN’s mission. Once approved, you’ll be placed into a curated chapter that best supports your growth and networking needs.",
//   },
//   {
//     question: "Can I attend a GSN session before joining?",
//     answer:
//       "Yes! GSN encourages potential members to attend a guest session. This allows you to experience the energy, structure, and value of GSN firsthand, helping you make an informed decision before joining.",
//   },
//   {
//     question: "Are GSN sessions in-person, online, or hybrid?",
//     answer:
//       "GSN sessions are offered in in-person, online, and hybrid formats. This flexibility supports both local engagement and global networking, making it accessible no matter where you are.",
//   },
//   {
//     question: "How are referrals tracked and managed in GSN?",
//     answer:
//       "Referrals are seamlessly tracked through GSN’s integrated tech platform. It ensures transparency, accountability, and follow-ups while providing analytics to measure referral flow, conversion, and member contribution.",
//   },
//   {
//     question: "Is GSN suitable for startups or only established businesses?",
//     answer:
//       "GSN welcomes both startups and established businesses. Membership is based on alignment with our values, growth mindset, and collaboration potential—not just the size or age of your company.",
//   },
//   {
//     question: "How does AI matchmaking work within GSN?",
//     answer:
//       "GSN uses AI to intelligently analyze business profiles, goals, behavior patterns, and preferences. This enables high-quality, targeted introductions that are more likely to result in meaningful, long-term collaborations.",
//   },
//   {
//     question: "What types of industries are represented in GSN?",
//     answer:
//       "GSN is home to a wide variety of industries including technology, wellness, finance, education, real estate, marketing, consulting, design, legal services, and more. Chapters are curated to avoid conflict and encourage cross-industry synergy.",
//   },
//   {
//     question: "Is GSN available internationally?",
//     answer:
//       "Absolutely. GSN is a global network with members and chapters across different countries. Our tech-first approach allows seamless international interaction and collaboration, regardless of geographic boundaries.",
//   },
//   {
//     question: "What is the time commitment for members?",
//     answer:
//       "Members are typically expected to attend a weekly or bi-weekly session, depending on the chapter structure. Beyond that, optional collaborations, workshops, and mentoring opportunities are available—but the focus remains on high-quality, not high-quantity, time investment.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleIndex = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white px-4 md:px-20 py-16">
//       <div className="text-center mb-12">
//         <h2 className="text-[32px] md:text-[50px] text-[#000] font-ubuntu font-bold mb-4">
//           Frequently Asked Questions
//         </h2>
//         <p className="text-[16px] md:text-[20px] font-ubuntu max-w-3xl mx-auto text-black">
//           Find quick, helpful answers to the most common questions about GSN membership, networking formats, benefits, and more.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         {faqData.map((faq, index) => (
//           <div
//             key={index}
//             className={`bg-[#D2DCE4] rounded-[30px] transition-all duration-300 overflow-hidden px-6 py-5 md:px-8 md:py-6 cursor-pointer flex flex-col justify-between ${openIndex === index ? 'h-[427px]' : 'h-[78px]'} md:h-auto`}
//             onClick={() => toggleIndex(index)}
//           >
//             <div className="flex justify-between items-start">
//               <p className="text-[16px] md:text-[18px] font-ubuntu text-black w-[90%]">
//                 {faq.question}
//               </p>
//               <div className="text-black text-[20px] md:text-[28px]">
//                 {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
//               </div>
//             </div>
//             {openIndex === index && (
//               <p className="text-[14px] md:text-[18px] font-ubuntu mt-4 text-[#183466]">
//                 {faq.answer}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const leftFaqs = [
  {
    question: "What is GSN and how does it differ from other networking platforms?",
    answer:
      "GSN (Global Success Network) is a purpose-driven networking platform that blends AI-powered matchmaking, conscious business practices, and spiritual alignment to help entrepreneurs grow authentically. Unlike traditional platforms, GSN prioritizes meaningful, values-driven connections over cold outreach, promoting both professional and personal evolution.",
  },
  {
    question: "How can I become a member of GSN?",
    answer:
      "Becoming a member of GSN is simple. Start by submitting a membership application, followed by a one-on-one discovery call. This ensures your values and goals align with GSN’s mission.",
  },
  {
    question: "Can I attend a GSN session before joining?",
    answer:
      "Yes! GSN encourages potential members to attend a guest session. This allows you to experience the energy, structure, and value of GSN firsthand.",
  },
  {
    question: "Are GSN sessions in-person, online, or hybrid?",
    answer:
      "GSN sessions are offered in all formats — in-person, online, and hybrid — based on your availability and location.",
  },
  {
    question: "How are referrals tracked and managed in GSN?",
    answer:
      "Referrals are seamlessly tracked through GSN’s integrated tech platform with transparency and real-time analytics.",
  },
];

const rightFaqs = [
  {
    question: "Is GSN suitable for startups or only established businesses?",
    answer:
      "GSN welcomes both startups and established businesses. Membership is based on values and collaboration potential.",
  },
  {
    question: "How does AI matchmaking work within GSN?",
    answer:
      "GSN uses AI to match members based on goals, behavior patterns, and preferences — fostering powerful collaborations.",
  },
  {
    question: "What types of industries are represented in GSN?",
    answer:
      "GSN includes members from technology, wellness, marketing, education, legal services, real estate, and more.",
  },
  {
    question: "Is GSN available internationally?",
    answer:
      "Yes, GSN is a global network with members across many countries and continents.",
  },
  {
    question: "What is the time commitment for members?",
    answer:
      "Members typically attend weekly or bi-weekly sessions, with optional workshops and collaborations available.",
  },
];

const FAQ = () => {
  const [openLeftIndex, setOpenLeftIndex] = useState(null);
  const [openRightIndex, setOpenRightIndex] = useState(null);

  return (
    <section className="bg-white px-4 md:px-20 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] md:text-[45px] text-black font-ubuntu font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[16px] md:text-[18px] font-ubuntu max-w-3xl mx-auto text-black">
          Find quick, helpful answers to the most common questions about GSN membership, networking formats, benefits, and more.
        </p>
      </div>

      {/* FAQ Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {leftFaqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenLeftIndex(openLeftIndex === index ? null : index)}
              className={`bg-[#D2DCE4] rounded-[30px] transition-all duration-300 px-6 py-4 md:px-8 md:py-5 cursor-pointer overflow-hidden ${
                openLeftIndex === index ? "h-auto" : "h-[50px]"
              }`}
            >
              <div className="flex justify-between items-start">
                <p className="text-[11px] md:text-[13px] font-ubuntu text-black w-[90%] -mt-1 ">
                  {faq.question}
                </p>
                <div className="text-black text-[20px] md:text-[26px] -mt-2">
                  {openLeftIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </div>
              {openLeftIndex === index && (
                <p className="text-[14px] md:text-[16px] font-ubuntu mt-2 md:mt-3 text-black">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          {rightFaqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenRightIndex(openRightIndex === index ? null : index)}
              className={`bg-[#D2DCE4] rounded-[30px] transition-all duration-300 px-6 py-4 md:px-8 md:py-5 cursor-pointer overflow-hidden ${
                openRightIndex === index ? "h-auto" : "h-[50px]"
              }`}
            >
              <div className="flex justify-between items-start">
                <p className="text-[11px] md:text-[13px] font-ubuntu text-black w-[90%] -mt-1">
                  {faq.question}
                </p>
                <div className="text-black text-[20px] md:text-[26px] -mt-2">
                  {openRightIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </div>
              {openRightIndex === index && (
                <p className="text-[14px] md:text-[16px] font-ubuntu mt-2 md:mt-3 text-black">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
