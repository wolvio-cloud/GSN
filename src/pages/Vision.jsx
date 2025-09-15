import Hero from '../components/Vision/Hero'
import ContentSection1 from '../components/Vision/ContentSection1'
import ContentSection2 from '../components/Vision/ContentSection2'
import { useScale } from "../helpers/useScale";

const Vision = () => {
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
                <ContentSection1 />
                <ContentSection2 />
            </div>
        </>
    )
}

export default Vision