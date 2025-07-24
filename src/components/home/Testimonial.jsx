// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const testimonialsData = [
//   {
//     name: "Siddharth Patil",
//     role: "UX Designer",
//     text: `"I wasn’t expecting leads, but gained mentors, collaborators, and a vision for growth I didn’t know I needed."`,
//     img: "/testimonial/t1.png",
//   },
//   {
//     name: "Ritika Sharma",
//     role: "Digital Marketing Consultant",
//     text: `"GSN gave me more than just leads — it gave me purpose-driven partners who align with my values."`,
//     img:"/testimonial/t2.png",
//   },
//   {
//     name: "Vikram Iyer",
//     role: "IT Services & Solutions",
//     text: `"The AI matchmaking connected me with opportunities I’d never found on my own. Truly intentional!"`,
//     img: "/testimonial/t3.png",
//   },
//   {
//     name: "Priya Nair",
//     role: "AI Consultant & Educator",
//     text: `"The combination of spiritual networking and tech is game-changing. Business finally caught up with consciousness."`,
//     img: "/testimonial/t4.png",
//   },
//   {
//     name: "Manav Desai",
//     role: "Startup Coach",
//     text: `"GSN helped me scale my impact through real conversations & purpose-led networking."`,
//     img: "/testimonial/t5.png",
//   },
//   {
//     name: "Ayesha Khan",
//     role: "Wellness Entrepreneur",
//     text: `"It’s refreshing to network in a space where personal growth and business goals go hand in hand."`,
//     img: "/testimonial/t6.png",
//   },
//   {
//     name: "Rahul Mehta",
//     role: "Tech Founder",
//     text: `"GSN’s global members helped me land collaborations that align with my mission-driven products."`,
//     img: "/testimonial/t7.png",
//   },
//   {
//     name: "Neha Varma",
//     role: "Life Coach",
//     text: `"This is the first network where I feel deeply connected both professionally and spiritually."`,
//     img: "/testimonial/t8.png",
//   },
//   {
//     name: "Arjun Rao",
//     role: "AI Researcher",
//     text: `"The referrals are highly curated. I only meet people relevant to my vision. It saves months of effort."`,
//     img: "/testimonial/t9.png",
//   },
//   {
//     name: "Shreya Kapoor",
//     role: "Business Consultant",
//     text: `"GSN’s circles are authentic, warm, and incredibly effective for meaningful collaborations."`,
//     img: "/testimonial/t10.png",
//   },
//   {
//     name: "Deepak Srinivasan",
//     role: "Spiritual Mentor",
//     text: `"It’s rare to find a business network that values mindfulness as much as financial growth."`,
//     img: "/testimonial/t11.png",
//   },
//   {
//     name: "Ananya Pillai",
//     role: "Author & Speaker",
//     text: `"The energy in GSN circles is transformative — you leave with clarity and genuine allies."`,
//     img: "/testimonial/t12.png",
//   },
// ];

// const Testimonials = () => {
//   const containerRef = useRef(null);
//   const tweenRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     // ✅ Infinite horizontal scrolling
//     tweenRef.current = gsap.to(container, {
//       x: "-50%", // moves half width (since we duplicate cards)
//       ease: "none",
//       repeat: -1,
//       duration: 40, // slower & smoother, adjust as needed
//     });

//     // ✅ Pause on hover
//     const handleEnter = () => tweenRef.current.pause();
//     const handleLeave = () => tweenRef.current.resume();

//     container.addEventListener("mouseenter", handleEnter);
//     container.addEventListener("mouseleave", handleLeave);

//     return () => {
//       container.removeEventListener("mouseenter", handleEnter);
//       container.removeEventListener("mouseleave", handleLeave);
//     };
//   }, []);

//   return (
//     <section className="w-full bg-[#1A1A1A] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
//             {/* ✅ Scrolling Container */}
//       <div className="relative overflow-hidden">
//         <div
//           ref={containerRef}
//           className="flex gap-6 w-[200%]" // double cards for loop
//         >
//           {[...testimonialsData, ...testimonialsData].map((t, index) => (
//             <div
//               key={index}
//               className="bg-[#222] text-white rounded-2xl p-6 w-[410px] h-[230px] flex-shrink-0"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h3 className="text-[16px] font-ubuntu font-bold">{t.name}</h3>
//                   <p className="text-[13px] text-gray-400">{t.role}</p>
//                 </div>
//               </div>
//               <p className="text-[14px] font-ubuntu leading-snug">{t.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonialsData = [
  {
    name: "Siddharth Patil",
    role: "UX Designer",
    text: `"I wasn’t expecting leads, but gained mentors, collaborators, and a vision for growth I didn’t know I needed."`,
    img: "/testimonial/t1.png",
  },
  {
    name: "Ritika Sharma",
    role: "Digital Marketing Consultant",
    text: `"GSN gave me more than just leads — it gave me purpose-driven partners who align with my values."`,
    img: "/testimonial/t2.png",
  },
  {
    name: "Vikram Iyer",
    role: "IT Services & Solutions",
    text: `"The AI matchmaking connected me with opportunities I’d never found on my own. Truly intentional!"`,
    img: "/testimonial/t3.png",
  },
  {
    name: "Priya Nair",
    role: "AI Consultant & Educator",
    text: `"The combination of spiritual networking and tech is game-changing. Business finally caught up with consciousness."`,
    img: "/testimonial/t4.png",
  },
  {
    name: "Manav Desai",
    role: "Startup Coach",
    text: `"GSN helped me scale my impact through real conversations & purpose-led networking."`,
    img: "/testimonial/t5.png",
  },
  {
    name: "Ayesha Khan",
    role: "Wellness Entrepreneur",
    text: `"It’s refreshing to network in a space where personal growth and business goals go hand in hand."`,
    img: "/testimonial/t6.png",
  },
  {
    name: "Rahul Mehta",
    role: "Tech Founder",
    text: `"GSN’s global members helped me land collaborations that align with my mission-driven products."`,
    img: "/testimonial/t7.png",
  },
  {
    name: "Neha Varma",
    role: "Life Coach",
    text: `"This is the first network where I feel deeply connected both professionally and spiritually."`,
    img: "/testimonial/t8.png",
  },
  {
    name: "Arjun Rao",
    role: "AI Researcher",
    text: `"The referrals are highly curated. I only meet people relevant to my vision. It saves months of effort."`,
    img: "/testimonial/t9.png",
  },
  {
    name: "Shreya Kapoor",
    role: "Business Consultant",
    text: `"GSN’s circles are authentic, warm, and incredibly effective for meaningful collaborations."`,
    img: "/testimonial/t10.png",
  },
  {
    name: "Deepak Srinivasan",
    role: "Spiritual Mentor",
    text: `"It’s rare to find a business network that values mindfulness as much as financial growth."`,
    img: "/testimonial/t11.png",
  },
  {
    name: "Ananya Pillai",
    role: "Author & Speaker",
    text: `"The energy in GSN circles is transformative — you leave with clarity and genuine allies."`,
    img: "/testimonial/t12.png",
  },
];

const Testimonials = () => {
  const row1Ref = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;

    // ✅ Infinite scrolling
    tweenRef.current = gsap.to(row1, {
      x: "-50%",
      ease: "none",
      repeat: -1,
      duration: 30, // Smooth speed
    });

    // ✅ Pause on hover
    const handleEnter = () => tweenRef.current.pause();
    const handleLeave = () => tweenRef.current.resume();

    row1.addEventListener("mouseenter", handleEnter);
    row1.addEventListener("mouseleave", handleLeave);

    return () => {
      row1.removeEventListener("mouseenter", handleEnter);
      row1.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-6 md:px-16 lg:px-24">
            {/* ✅ Row 1: Infinite Scrolling */}
      <div className="relative  overflow-x-visible  mb-6">
                <div ref={row1Ref} className="flex gap-6 w-[200%]">
          {[...testimonialsData.slice(0, 6), ...testimonialsData.slice(0, 6)].map(
            (t, index) => (
              <div
                key={index}
                className="bg-[#222] text-white rounded-2xl p-6 w-[480px] h-[240px] flex-shrink-0 "
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[16px] font-ubuntu font-bold">{t.name}</h3>
                    <p className="text-[13px] text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-[14px] font-ubuntu leading-snug">{t.text}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* ✅ Row 2: Static (2 Full Cards + 3rd Half Visible) */}
      <div className="flex gap-6 overflow-x-visible">
        {testimonialsData.slice(6, 9).map((t, index) => (
          <div
            key={index}
            className={`bg-[#222] text-white rounded-2xl p-6 w-[480px] h-[240px] flex-shrink-0 ${
              index === 2 ? "mr-[-200px]" : ""
            }`} // ✅ Makes 3rd card half visible
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-[16px] font-ubuntu font-bold">{t.name}</h3>
                <p className="text-[13px] text-gray-400">{t.role}</p>
              </div>
            </div>
            <p className="text-[14px] font-ubuntu leading-snug">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
