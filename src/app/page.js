/** @format */

import HeroSection from "./pages/hero/Page";
import Section01 from "./pages/section-1/Page";
import Section02 from "./pages/section-2/Page";
import Section03 from "./pages/section-3/page";
import Section4 from "./pages/section-4/page";
import Section5 from "./pages/section-5/page";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Section01 />
			<Section02 />
			<Section03 />
			<Section4 />
			<Section5 />
		</>
	);
}
