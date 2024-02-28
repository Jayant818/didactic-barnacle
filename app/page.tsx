import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Services />
			<Testimonials />
		</>
	);
}
