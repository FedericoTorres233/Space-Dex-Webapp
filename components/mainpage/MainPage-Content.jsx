import { ParallaxLayer } from "@react-spring/parallax";
import Contribute from "./Contribute";
import DiscoverSection from "./DiscoverSection";

export default function MainPageContent() {
  return (
    <div className="text-7xl py-8 px-12 bg-[#15151c] text-black">
      <ParallaxLayer offset={1} speed={0.2} factor={1.5}>
        <DiscoverSection />
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.5}>
        <Contribute />
      </ParallaxLayer>
    </div>
  );
}
