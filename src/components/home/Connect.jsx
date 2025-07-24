// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Connect = () => {
//   const sectionRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Card 2 overlaps Card 1
//       gsap.fromTo(
//         card2Ref.current,
//         { y: "100%", zIndex: 2 },
//         {
//           y: "0%",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top center+=100",
//             end: "+=500",
//             scrub: true,
//           },
//         }
//       );

//       // Card 3 overlaps Card 2
//       gsap.fromTo(
//         card3Ref.current,
//         { y: "100%", zIndex: 3 },
//         {
//           y: "0%",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top center+=200",
//             end: "+=500",
//             scrub: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-white py-20 px-6 md:px-16 lg:px-24"
//     >
//       {/* ✅ Heading */}
//       <div className="text-center max-w-4xl mx-auto mb-16">
//         <h2 className="text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-tight -mt-12">
//           Connect · Evolve · Thrive
//         </h2>
//         <p className="text-[23px] font-ubuntu text-[#1A1A1A] mt-6 leading-snug">
//           Unlock the power of conscious Networking and AI Driven Collaboration
//         </p>
//       </div>

//       {/* ✅ Card Container */}
//       <div className="relative max-w-5xl mx-auto h-[600px]">
//         {/* Card 1 - Fixed */}
//         <div
//           ref={card1Ref}
//           className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px]"
//         >
//           <div>
//             <h3 className="text-[24px] font-ubuntu font-bold">
//               AI-Enhanced Business Connections
//             </h3>
//             <p className="text-[18px] mt-4 font-ubuntu leading-snug max-w-[40%]">
//               GSN's smart matchmaking connects you with the most relevant
//               members based on industry, goals, and values.
//             </p>
//           </div>
//           <span className="text-[40px] font-playfair">01</span>

//           {/* ✅ Black Dotted Background with custom corners */}
//           <div
//             className="absolute inset-y-0 right-0 mt-8 w-1/2 bg-[#2a3947] opacity-20
//                bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
//             style={{
//               borderTopLeftRadius: "50px", // ✅ Rounded left top
//               borderBottomLeftRadius: "0px", // ✅ Rounded left bottom
//               borderTopRightRadius: "0px", // ✅ Sharp right top
//               borderBottomRightRadius: "0px", // ✅ Sharp right bottom
//             }}
//           ></div>

//           {/* ✅ Foreground Image with mixed corners */}
//           <img
//             src="/connect1.png"
//             alt="Connect 1"
//             className="absolute right-0 bottom-0 w-[450px] h-[350px] object-cover"
//             style={{
//               borderTopLeftRadius: "40px", // ✅ Rounded left top
//               borderBottomRightRadius: "40px", // ✅ Rounded right bottom
//               borderBottomLeftRadius: "0px", // ✅ Sharp left bottom
//               borderTopRightRadius: "0px", // ✅ Sharp right top
//             }}
//           />
//         </div>

//         {/* Card 2 - Scroll Overlaps */}
       
//        <div
//   ref={card2Ref}
//   className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px]"
// >
//   <div className="text-right ml-auto max-w-[40%]">
//     <h3 className="text-[24px] font-ubuntu font-bold">
//       Conscious Collaboration Culture
//     </h3>
//     <p className="text-[18px] mt-4 ml-4 font-ubuntu leading-snug max-w-[90%] text-justify ">
//       We believe growth should align with values. GSN integrates mindfulness
//       and spiritual principles into networking.
//     </p>
//   </div>
//   <span className="text-[40px] font-playfair text-right ml-auto">02</span>

//   {/* ✅ Black Dotted Background - Mirrored to Left */}
//   <div
//     className="absolute inset-y-0 left-0 mt-8 w-1/2 bg-[#2a3947] opacity-20
//        bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
//     style={{
//       borderTopRightRadius: "50px",  // ✅ Rounded right top
//       borderBottomRightRadius: "0px", // ✅ Sharp right bottom
//       borderTopLeftRadius: "0px",     // ✅ Sharp left top
//       borderBottomLeftRadius: "0px",  // ✅ Sharp left bottom
//     }}
//   ></div>

//   {/* ✅ Foreground Image - Mirrored to Left */}
//   <img
//     src="/connect3.png"
//     alt="Connect 3"
//     className="absolute left-0 bottom-0 w-[450px] h-[350px] object-cover"
//     style={{
//       borderTopRightRadius: "40px",   // ✅ Rounded right top
//       borderBottomLeftRadius: "40px", // ✅ Rounded left bottom
//       borderBottomRightRadius: "0px", // ✅ Sharp right bottom
//       borderTopLeftRadius: "0px",     // ✅ Sharp left top
//     }}
//   />
// </div>


//         {/* Card 3 - Scroll Overlaps */}
//        <div
//   ref={card3Ref}
//   className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px]"
// >
//   <div>
//     <h3 className="text-[24px] font-ubuntu font-bold">
//       Tools to Scale Your Business
//     </h3>
//     <p className="text-[18px] mt-4 font-ubuntu leading-snug max-w-[50%] t">
//       Everything you need to grow your network and elevate your business
//       in one intelligent platform.
//     </p>
//   </div>
//   <span className="text-[40px] font-playfair">03</span>

//   {/* ✅ Black Dotted Background with custom corners */}
//   <div
//     className="absolute inset-y-0 right-0 mt-8 w-1/2 bg-[#2a3947] opacity-20 
//        bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
//     style={{
//       borderTopLeftRadius: "50px", // Rounded left top
//       borderBottomLeftRadius: "0px", // Sharp left bottom
//       borderTopRightRadius: "0px", // Sharp right top
//       borderBottomRightRadius: "0px", // Sharp right bottom
//     }}
//   ></div>

//   {/* ✅ Foreground Image with mixed corners */}
//   <img
//     src="/connect2.png"
//     alt="Connect 2"
//     className="absolute right-0 bottom-0 w-[450px] h-[350px] object-cover"
//     style={{
//       borderTopLeftRadius: "40px", // Rounded left top
//       borderBottomRightRadius: "40px", // Rounded right bottom
//       borderBottomLeftRadius: "0px", // Sharp left bottom
//       borderTopRightRadius: "0px", // Sharp right top
//     }}
//   />
// </div>

//       </div>
//     </section>
//   );
// };

// export default Connect;
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Connect = () => {
//   const sectionRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // ✅ Set Initial States
//       gsap.set(card2Ref.current, { y: "100%", zIndex: 3 });
//       gsap.set(card3Ref.current, { y: "100%", zIndex: 3 });

//       // ✅ Card 2 slides over Card 1
//       gsap.to(card2Ref.current, {
//         y: "0%",
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center+=150",
//           end: "+=400",
//           scrub: true,
//         },
//       });

//       // ✅ Card 3 slides over Card 2
//       gsap.to(card3Ref.current, {
//         y: "0%",
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center+=250",
//           end: "+=400",
//           scrub: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-white py-20 px-6 md:px-16 lg:px-24"
//     >
//       {/* ✅ Heading */}
//       <div className="text-center max-w-4xl mx-auto mb-16">
//         <h2 className="text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-tight -mt-12">
//           Connect · Evolve · Thrive
//         </h2>
//         <p className="text-[23px] font-ubuntu text-[#1A1A1A] mt-6 leading-snug">
//           Unlock the power of conscious Networking and AI Driven Collaboration
//         </p>
//       </div>

//       {/* ✅ Card Container */}
//       <div className="relative max-w-5xl mx-auto h-[600px]">
//         {/* ✅ Card 1 */}
//         <div
//           ref={card1Ref}
//           className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px] z-[1]"
//         >
//           <div>
//             <h3 className="text-[24px] font-ubuntu font-bold">
//               AI-Enhanced Business Connections
//             </h3>
//             <p className="text-[18px] mt-4 font-ubuntu leading-snug max-w-[40%]">
//               GSN's smart matchmaking connects you with the most relevant
//               members based on industry, goals, and values.
//             </p>
//           </div>
//           <span className="text-[40px] font-playfair">01</span>

//           {/* Black Dotted Background */}
//           <div
//             className="absolute inset-y-0 right-0 mt-8 w-1/2 bg-[#2a3947] opacity-20
//                bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
//             style={{
//               borderTopLeftRadius: "50px",
//               borderBottomLeftRadius: "0px",
//               borderTopRightRadius: "0px",
//               borderBottomRightRadius: "0px",
//             }}
//           ></div>

//           {/* Foreground Image */}
//           <img
//             src="/connect1.png"
//             alt="Connect 1"
//             className="absolute right-0 bottom-0 w-[450px] h-[350px] object-cover"
//             style={{
//               borderTopLeftRadius: "40px",
//               borderBottomRightRadius: "40px",
//               borderBottomLeftRadius: "0px",
//               borderTopRightRadius: "0px",
//             }}
//           />
//         </div>

//         {/* ✅ Card 2 */}
//         <div
//           ref={card2Ref}
//           className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px] z-[2]"
//         >
//           <div className="text-right ml-auto max-w-[40%]">
//             <h3 className="text-[24px] font-ubuntu font-bold">
//               Conscious Collaboration Culture
//             </h3>
//             <p className="text-[18px] mt-4 ml-4 font-ubuntu leading-snug max-w-[90%] text-justify">
//               We believe growth should align with values. GSN integrates
//               mindfulness and spiritual principles into networking.
//             </p>
//           </div>
//           <span className="text-[40px] font-playfair text-right ml-auto">
//             02
//           </span>

//           {/* Black Dotted Background (Left) */}
//           <div
//             className="absolute inset-y-0 left-0 mt-8 w-1/2 bg-[#2a3947] opacity-20
//                bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
//             style={{
//               borderTopRightRadius: "50px",
//               borderBottomRightRadius: "0px",
//               borderTopLeftRadius: "0px",
//               borderBottomLeftRadius: "0px",
//             }}
//           ></div>

//           {/* Foreground Image (Left) */}
//           <img
//             src="/connect2.png"
//             alt="Connect 2"
//             className="absolute left-0 bottom-0 w-[450px] h-[350px] object-cover"
//             style={{
//               borderTopRightRadius: "40px",
//               borderBottomLeftRadius: "40px",
//               borderBottomRightRadius: "0px",
//               borderTopLeftRadius: "0px",
//             }}
//           />
//         </div>

//         {/* ✅ Card 3 */}
//         <div
//           ref={card3Ref}
//           className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px] z-[3]"
//         >
//           <div>
//             <h3 className="text-[24px] font-ubuntu font-bold">
//               Tools to Scale Your Business
//             </h3>
//             <p className="text-[18px] mt-4 font-ubuntu leading-snug max-w-[50%]">
//               Everything you need to grow your network and elevate your business
//               in one intelligent platform.
//             </p>
//           </div>
//           <span className="text-[40px] font-playfair">03</span>

//           {/* Black Dotted Background */}
//           <div
//             className="absolute inset-y-0 right-0 mt-8 w-1/2 bg-[#2a3947] opacity-20
//                bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
//             style={{
//               borderTopLeftRadius: "50px",
//               borderBottomLeftRadius: "0px",
//               borderTopRightRadius: "0px",
//               borderBottomRightRadius: "0px",
//             }}
//           ></div>

//           {/* Foreground Image */}
//           <img
//             src="/connect3.png"
//             alt="Connect 3"
//             className="absolute right-0 bottom-0 w-[450px] h-[350px] object-cover"
//             style={{
//               borderTopLeftRadius: "40px",
//               borderBottomRightRadius: "40px",
//               borderBottomLeftRadius: "0px",
//               borderTopRightRadius: "0px",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Connect;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Connect = () => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    // ✅ Initial positions - use pixels to prevent shaking
    const cardHeight = card1Ref.current.offsetHeight;

    gsap.set(card2Ref.current, { y: cardHeight, zIndex: 2 });
    gsap.set(card3Ref.current, { y: cardHeight * 2, zIndex: 3 });

    // ✅ Pin section for stacking
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${cardHeight * 3}`, // perfect scroll length based on actual height
      pin: true,
      scrub: true,
    });

    // ✅ Card 2 slides over Card 1
    gsap.to(card2Ref.current, {
      y: 0,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=100 top",
        end: `+=${cardHeight}`,
        scrub: true,
      },
    });

    // ✅ Card 3 slides over Card 2
    gsap.to(card3Ref.current, {
      y: 0,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `top+=${cardHeight + 100} top`,
        end: `+=${cardHeight}`,
        scrub: true,
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);
   

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 px-6 md:px-16 lg:px-24"
    >
      {/* ✅ Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-[40px] font-ubuntu font-bold text-[#1A1A1A] leading-tight -mt-12">
          Connect · Evolve · Thrive
        </h2>
        <p className="text-[23px] font-ubuntu text-[#1A1A1A] mt-6 leading-snug">
          Unlock the power of conscious Networking and AI Driven Collaboration
        </p>
      </div>

      {/* ✅ Card Container */}
      <div className="relative max-w-5xl mx-auto h-[600px]">
        {/* Card 1 */}
        <div
          ref={card1Ref}
          className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px]"
        >
          <div>
            <h3 className="text-[24px] font-ubuntu font-bold">
              AI-Enhanced Business Connections
            </h3>
            <p className="text-[18px] mt-4 font-ubuntu leading-snug max-w-[40%]">
              GSN's smart matchmaking connects you with the most relevant
              members based on industry, goals, and values.
            </p>
          </div>
          <span className="text-[40px] font-playfair">01</span>

          <div
            className="absolute inset-y-0 right-0 mt-8 w-1/2 bg-[#2a3947] opacity-20
               bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
            style={{
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          ></div>

          <img
            src="/connect1.png"
            alt="Connect 1"
            className="absolute right-0 bottom-0 w-[450px] h-[350px] object-cover"
            style={{
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
          />
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px]"
        >
          <div className="text-right ml-auto max-w-[40%]">
            <h3 className="text-[24px] font-ubuntu font-bold">
              Conscious Collaboration Culture
            </h3>
            <p className="text-[18px] mt-4 ml-4 font-ubuntu leading-snug max-w-[90%] text-justify">
              We believe growth should align with values. GSN integrates
              mindfulness and spiritual principles into networking.
            </p>
          </div>
          <span className="text-[40px] font-playfair text-right ml-auto">
            02
          </span>

          <div
            className="absolute inset-y-0 left-0 mt-8 w-1/2 bg-[#2a3947] opacity-20
               bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
            style={{
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          ></div>

          <img
            src="/connect2.png"
            alt="Connect 2"
            className="absolute left-0 bottom-0 w-[450px] h-[350px] object-cover"
            style={{
              borderTopRightRadius: "40px",
              borderBottomLeftRadius: "40px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "0px",
            }}
          />
        </div>

        {/* Card 3 */}
        {/* <div
          ref={card3Ref}
          className="absolute top-0 left-0 w-full bg-[#324456] rounded-[50px] overflow-hidden text-white p-10 flex flex-col justify-between h-[470px]"
        >
          <div>
            <h3 className="text-[24px] font-ubuntu font-bold">
              Tools to Scale Your Business
            </h3>
            <p className="text-[18px] mt-4 font-ubuntu leading-snug max-w-[50%]">
              Everything you need to grow your network and elevate your business
              in one intelligent platform.
            </p>
          </div>
          <span className="text-[40px] font-playfair">03</span>

          <div
            className="absolute inset-y-0 right-0 mt-8 w-1/2 bg-[#2a3947] opacity-20 
               bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:14px_14px]"
            style={{
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          ></div>

          <img
            src="/connect3.png"
            alt="Connect 3"
            className="absolute right-0 bottom-0 w-[450px] h-[350px] object-cover"
            style={{
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Connect;
