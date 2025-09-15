import Navigation from "../components/common/Navigation1";
import Hero from "../components/home/Hero";
import Impact from "../components/home/Impact3";
import Connect from "../components/home/Connect";
import Card from "../components/home/Card";
import Path from "../components/home/Path";
import Testimonials from "../components/home/Testimonial";
import Form from "../components/home/Form";
import { useScale } from "../helpers/useScale";

const Home = () => {
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
      <Hero />

      <div style={scaleStyle}>
        <Impact />
      </div>

      <div style={scaleStyle}>
        <Connect />
      </div>

      <div style={scaleStyle}>
        <Card />
      </div>

      <Path />
      <Testimonials />

      <div style={scaleStyle}>
        <Form />
      </div>
    </>
  );
};

export default Home;
