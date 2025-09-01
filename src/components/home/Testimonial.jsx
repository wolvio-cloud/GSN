import React, { useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

const testimonialsData = [
  {
    name: "Siddharth Patil",
    role: "UX Designer",
    text: `"I wasn’t expecting leads, but gained mentors, collaborators, and a vision for growth I didn’t know I needed."`,
    img: "/testimonial/t1.webp",
  },
  {
    name: "Ritika Sharma",
    role: "Digital Marketing Consultant",
    text: `"GSN gave me more than just leads — it gave me purpose-driven partners who align with my values."`,
    img: "/testimonial/t2.webp",
  },
  {
    name: "Vikram Iyer",
    role: "IT Services & Solutions",
    text: `"The AI matchmaking connected me with opportunities I’d never found on my own. Truly intentional!"`,
    img: "/testimonial/t3.webp",
  },
  {
    name: "Priya Nair",
    role: "AI Consultant & Educator",
    text: `"The combination of spiritual networking and tech is game-changing. Business finally caught up with consciousness."`,
    img: "/testimonial/t4.webp",
  },
  {
    name: "Manav Desai",
    role: "Startup Coach",
    text: `"GSN helped me scale my impact through real conversations & purpose-led networking."`,
    img: "/testimonial/t5.webp",
  },
  {
    name: "Ayesha Khan",
    role: "Wellness Entrepreneur",
    text: `"It’s refreshing to network in a space where personal growth and business goals go hand in hand."`,
    img: "/testimonial/t6.webp",
  },
  {
    name: "Rahul Mehta",
    role: "Tech Founder",
    text: `"GSN’s global members helped me land collaborations that align with my mission-driven products."`,
    img: "/testimonial/t7.webp",
  },
  {
    name: "Neha Varma",
    role: "Life Coach",
    text: `"This is the first network where I feel deeply connected both professionally and spiritually."`,
    img: "/testimonial/t8.webp",
  },
  {
    name: "Arjun Rao",
    role: "AI Researcher",
    text: `"The referrals are highly curated. I only meet people relevant to my vision. It saves months of effort."`,
    img: "/testimonial/t9.webp",
  },
  {
    name: "Shreya Kapoor",
    role: "Business Consultant",
    text: `"GSN’s circles are authentic, warm, and incredibly effective for meaningful collaborations."`,
    img: "/testimonial/t10.webp",
  },
  {
    name: "Deepak Srinivasan",
    role: "Spiritual Mentor",
    text: `"It’s rare to find a business network that values mindfulness as much as financial growth."`,
    img: "/testimonial/t11.webp",
  },
  {
    name: "Ananya Pillai",
    role: "Author & Speaker",
    text: `"The energy in GSN circles is transformative — you leave with clarity and genuine allies."`,
    img: "/testimonial/t12.webp",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderCard = (t, index) => (
    <div
      key={index}
      className="bg-[#222] hover:bg-[#242c34] text-white rounded-2xl p-4 sm:p-6 
      w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] min-h-[240px] 
      flex-shrink-0 cursor-pointer transition duration-300 mr-4"
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
      <p className="text-[13px] sm:text-[14px] font-ubuntu leading-snug">{t.text}</p>
    </div>
  );

  const repeatedData = [...testimonialsData, ...testimonialsData];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1A1A1A] py-20 px-0 text-white"
    >
      {/* Row 1 */}
      <div className={`${styles.scrollContainer} ${styles.pauseOnHover} mb-8`}>
        <div
          className={`${styles.scrollWrapper} ${animate ? styles.scrollLeft : ""}`}
        >
          {repeatedData.map((t, i) => renderCard(t, i))}
        </div>
      </div>

      {/* Row 2 */}
      <div className={`${styles.scrollContainer} ${styles.pauseOnHover}`}>
        <div
          className={`${styles.scrollWrapper} ${animate ? styles.scrollRight : ""}`}
        >
          {repeatedData
            .slice()
            .reverse()
            .map((t, i) => renderCard(t, i + 100))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
