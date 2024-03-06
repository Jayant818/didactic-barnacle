import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import About from "@/components/others/About";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Services />
			<div className="-mt-32">
				<About />
			</div>
		</>
	);
}
