import Navigation from "../components/common/Navigation1";
import Heroexp from "../components/experience/Heroexp";
import Gain from "../components/experience/Gainexp";
import Inspiring from "../components/experience/Inspiring";
import Journry from "../components/experience/Journey";
import Gsnexp from "../components/experience/Gsnexp";
import Faq from "../components/experience/Faq";
import { useScale } from "../helpers/useScale";

const Experience = () => {
  const baseWidth = 1500;
  const scale = useScale(baseWidth);
  // scaling wrapper style
  const scaleStyle = {
    transform: window.innerWidth > 768 ? `scale(${scale})` : "scale(1)", // disable on mobile
    maxWidth: `${baseWidth}px`,
    margin: "10px auto",
    transformOrigin: "top center",
    transition: "transform 0.3s ease, margin 0.3s ease",
  };

  return (
    <>
      <Navigation />
      <Heroexp />
      <div style={scaleStyle}>
        <Gain />
        <Inspiring />
        <Journry />
        <Gsnexp />
        <Faq />
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Experience;
