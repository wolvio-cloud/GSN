import Hero from '../components/about/Hero.jsx';
import AboutUs from '../components/about/aboutus.jsx';
import Mission from '../components/about/Mission.jsx';
import Values from '../components/about/CoreValues.jsx';
import { useScale } from "../helpers/useScale";

const About = () => {
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
                <AboutUs />
                <Mission />
                <Values />
            </div>
        </>
    )
}

export default About