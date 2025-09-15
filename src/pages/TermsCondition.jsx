import Hero from "../components/termsCondition/Hero.jsx";
import TermsDetail from "../components/termsCondition/TermsDetail.jsx";
import { useScale } from "../helpers/useScale";

const PrivacyPolicy = () => {
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
      <Hero />
      <div style={scaleStyle}>
        <TermsDetail />
      </div>
    </>
  );
};

export default PrivacyPolicy;
