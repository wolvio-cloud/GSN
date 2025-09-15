import Hero from '../components/GsnChapterSection/Hero'
import GsnChapterSection1 from '../components/GsnChapterSection/GsnChapterSection1'
import GsnChapterSection2 from '../components/GsnChapterSection/GsnChapterSection2'
import { useScale } from "../helpers/useScale";

const GSNFranchising = () => {
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
                <GsnChapterSection1 />
                <GsnChapterSection2 />
            </div>
        </>
    )
}

export default GSNFranchising