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
//     img: "/testimonial/t2.png",
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
//   const row1Ref = useRef(null);
//   const row2Ref = useRef(null);
//   const tween1Ref = useRef(null);
//   const tween2Ref = useRef(null);

//   useEffect(() => {
//     const row1 = row1Ref.current;
//     const row2 = row2Ref.current;

//     // ✅ Row 1: Right ➝ Left (Faster)
//     tween1Ref.current = gsap.to(row1, {
//       x: "-50%",
//       ease: "none",
//       repeat: -1,
//       duration: 10, // increased speed (smaller duration = faster)
//     });

//     // ✅ Row 2: Left ➝ Right (Faster)
//     tween2Ref.current = gsap.fromTo(
//       row2,
//       { x: "-50%" }, // start from left
//       {
//         x: "0%",
//         ease: "none",
//         repeat: -1,
//         duration: 20, // slightly slower than row1 for variation
//       }
//     );

//     // ✅ Pause on Hover for Both Rows
//     const pauseRow1 = () => tween1Ref.current.pause();
//     const resumeRow1 = () => tween1Ref.current.resume();
//     const pauseRow2 = () => tween2Ref.current.pause();
//     const resumeRow2 = () => tween2Ref.current.resume();

//     row1.addEventListener("mouseenter", pauseRow1);
//     row1.addEventListener("mouseleave", resumeRow1);
//     row2.addEventListener("mouseenter", pauseRow2);
//     row2.addEventListener("mouseleave", resumeRow2);

//     return () => {
//       row1.removeEventListener("mouseenter", pauseRow1);
//       row1.removeEventListener("mouseleave", resumeRow1);
//       row2.removeEventListener("mouseenter", pauseRow2);
//       row2.removeEventListener("mouseleave", resumeRow2);
//     };
//   }, []);

//   return (
//     <section className="w-full bg-[#1A1A1A] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
//       {/* ✅ Row 1 - Right ➝ Left */}
//       <div className="relative  mb-6">
//         <div ref={row1Ref} className="flex gap-6 w-[200%]">
//           {[...testimonialsData, ...testimonialsData].map((t, index) => (
//             <div
//               key={index}
//               className="bg-[#222] text-white rounded-2xl p-6 w-[480px] h-[240px] flex-shrink-0"
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

//       {/* ✅ Row 2 - Left ➝ Right */}
//       <div className="relative ">
//         <div ref={row2Ref} className="flex gap-6 w-[200%]">
//           {[...testimonialsData.reverse(), ...testimonialsData.reverse()].map(
//             (t, index) => (
//               <div
//                 key={index}
//                 className="bg-[#222] text-white rounded-2xl p-6 w-[480px] h-[240px] flex-shrink-0"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <img
//                     src={t.img}
//                     alt={t.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="text-[16px] font-ubuntu font-bold">{t.name}</h3>
//                     <p className="text-[13px] text-gray-400">{t.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-[14px] font-ubuntu leading-snug">{t.text}</p>
//               </div>
//             )
//           )}
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
  const row2Ref = useRef(null);
  const tween1Ref = useRef(null);
  const tween2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    tween1Ref.current = gsap.to(row1, {
      x: "-50%",
      ease: "none",
      repeat: -1,
      duration: 10,
    });

    tween2Ref.current = gsap.fromTo(
      row2,
      { x: "-50%" },
      {
        x: "0%",
        ease: "none",
        repeat: -1,
        duration: 10,
      }
    );

    const pauseRow1 = () => tween1Ref.current.pause();
    const resumeRow1 = () => tween1Ref.current.resume();
    const pauseRow2 = () => tween2Ref.current.pause();
    const resumeRow2 = () => tween2Ref.current.resume();

    row1.addEventListener("mouseenter", pauseRow1);
    row1.addEventListener("mouseleave", resumeRow1);
    row2.addEventListener("mouseenter", pauseRow2);
    row2.addEventListener("mouseleave", resumeRow2);

    return () => {
      row1.removeEventListener("mouseenter", pauseRow1);
      row1.removeEventListener("mouseleave", resumeRow1);
      row2.removeEventListener("mouseenter", pauseRow2);
      row2.removeEventListener("mouseleave", resumeRow2);
    };
  }, []);

  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* ✅ Row 1 */}
      <div className="relative mb-6">
        <div
          ref={row1Ref}
          className="flex gap-6 w-[200%] flex-nowrap"
        >
          {[...testimonialsData, ...testimonialsData].map((t, index) => (
            <div
              key={index}
             className="bg-[#222] text-white rounded-2xl p-4 sm:p-6 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] min-h-[300px] sm:min-h-[240px] flex-shrink-0"

            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[14px] sm:text-[16px] font-ubuntu font-bold">{t.name}</h3>
                  <p className="text-[12px] sm:text-[13px] text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="text-[13px] sm:text-[14px] font-ubuntu leading-snug">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Row 2 */}
      <div className="relative">
        <div
          ref={row2Ref}
          className="flex gap-6 w-[200%] flex-nowrap"
        >
          {[...testimonialsData.reverse(), ...testimonialsData.reverse()].map(
            (t, index) => (
              <div
                key={index}
                className="bg-[#222] text-white rounded-2xl p-4 sm:p-6 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] min-h-[300px] sm:min-h-[240px] flex-shrink-0"

              >
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[14px] sm:text-[16px] font-ubuntu font-bold">{t.name}</h3>
                    <p className="text-[12px] sm:text-[13px] text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] font-ubuntu leading-snug">
                  {t.text}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
