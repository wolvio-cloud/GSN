import React from "react";
import Navigation from "../components/common/Navigation1";
import Heroexp from "../components/experience/Heroexp";
import Gain from "../components/experience/Gainexp";
import Inspiring from "../components/experience/Inspiring";
import Journry from "../components/experience/Journey";
import Gsnexp from "../components/experience/Gsnexp";
import Faq from "../components/experience/Faq";
// import Footer from "../components/common/Footer";
const Experience = () => {
  return (
    <>
      <Navigation />
      <Heroexp />
      <Gain />
      <Inspiring />
      <Journry />
      <Gsnexp />
      <Faq /> 
      {/* <Footer /> */}
    </>
  );
};
export default Experience;
