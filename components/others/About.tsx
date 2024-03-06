import Link from "next/link";
import React from "react";

const About = () => {
	return (
		<div className="text-white py-10 md:py-20">
			<div className=" pt-4 ">
				<h3 className="font-extrabold text-2xl md:text-2xl text-[#ff7000] uppercase text-center mb-6 md:mb-10">
					WHo are we
				</h3>
				<p className="px-10 md:px-28 my-6 md:text-base">
					At URBAN DOOR, we have redefined property care and enhancement as a
					comprehensive platform that caters to every facet of your residential
					and commercial needs. As your trusted partner, we pride ourselves on
					being the bridge to seamless property maintenance, repair, and
					aesthetic transformations. Our commitment revolves around ensuring
					your spaces are not just functional but radiate excellence in every
					detail.
					<br />
				</p>
				<b className="px-10 md:px-28 my-6 md:text-base">
					A Symphony of Services:
				</b>
				<ul className="px-10 md:px-28 my-6 md:text-base flex flex-col gap-2">
					{[
						{
							title: "Home Appliances Repair and Service:",
							description:
								"URBAN DOOR skilled technicians specialize in diagnosing and repairing various home appliances, ensuring your daily routines remain uninterrupted. From refrigerators to washing machines, were here to keep your appliances running smoothly.",
						},
						{
							title: "Plumbing Precision:",
							description:
								"Our plumbing experts bring a wealth of knowledge to your property, handling everything from routine maintenance to intricate repairs. We ensure your plumbing systems are robust, efficient, and free from disruptions.",
						},
						{
							title: "Craftsmanship in Carpentry:",
							description:
								"URBAN DOOR carpentry services are a testament to our commitment to excellence. Whether its a furniture repair, custom project, or complete renovations, our skilled carpenters bring precision and artistry to every task.",
						},
						{
							title: "Electrical Excellence:",
							description:
								"Entrust your electrical needs to our qualified electricians. From installations to repairs, we prioritize safety, compliance, and the efficient functioning of your electrical systems.",
						},
						{
							title: "Artful Painting Services:",
							description:
								"Our painting services go beyond a mere coat of paint. We breathe new life into your spaces with meticulous surface preparation, thoughtful color consultations, and the application of premium paints.",
						},
						{
							title: "Pest Control Mastery:",
							description:
								"URBAN DOOR pest control services are conducted with precision and care. We address pests such as ants, cockroaches, termites, rodents, bed bugs, and mosquitoes, providing tailored solutions for both homes and businesses.",
						},
						{
							title: "Interior Designing Dreams:",
							description:
								"Transform your living and working spaces with our innovative interior designing services. Our team works closely with you to understand your vision, creating environments that reflect your style and enhance functionality.",
						},
					].map((service, index) => (
						<li key={index}>
							<h4 className="text-[#ff7000] font-bold">{service.title}</h4>
							<p className="text-white px-10 pt-2">{service.description}</p>
						</li>
					))}
				</ul>
			</div>
			<div className="py-10 ">
				<h3 className="font-extrabold text-xl md:text-2xl text-[#ff7000] uppercase text-center mb-6 md:mb-10">
					Why Choose URBAN DOOR
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-28">
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							All-Encompassing Convenience
						</h4>
						<p className="text-white">
							Experience the ease of having all your property needs met under
							one roof. URBAN DOOR simplifies property management, making it a
							hassle-free experience.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Certified Expertise
						</h4>
						<p className="text-white">
							Our team comprises certified professionals with extensive
							experience in their respective fields, ensuring high-quality
							service every time.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Transparent Partnership
						</h4>
						<p className="text-white">
							URBAN DOOR believes in transparency. Our pricing is clear, with
							detailed cost estimates, empowering you with the information you
							need.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Punctual Precision
						</h4>
						<p className="text-white">
							We value your time and adhere to project timelines, ensuring that
							our services are delivered promptly to minimize disruptions.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Customer-Centric Approach
						</h4>
						<p className="text-white">
							Your satisfaction is at the core of what we do. URBAN DOOR goes
							beyond meeting expectations; we strive to exceed them, leaving
							your property in impeccable condition.
						</p>
					</div>
				</div>
				<div className="text-center mt-10">
					<p className="text-white mb-4 px-6">
						Step into a world of property care and enhancement with URBAN DOOR.
					</p>
					<Link href="/contact">
						<button className="bg-[#ff7000] text-white px-6 py-3 rounded-md">
							Contact Us
						</button>
					</Link>
				</div>
			</div>
			<div className="py-10 ">
				<h3 className="font-extrabold text-xl md:text-2xl text-[#ff7000] uppercase text-center mb-6 md:mb-10">
					Our Vision
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-28">
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Innovation in Service Delivery
						</h4>
						<p className="text-white">
							URBAN DOOR envisions a future where innovation is at the forefront
							of our service delivery. We strive to continually introduce
							cutting-edge solutions, methodologies, and technologies that
							enhance the efficiency and effectiveness of our services.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Comprehensive Property Solutions
						</h4>
						<p className="text-white">
							Our vision extends beyond singular repairs; we aim to be the
							comprehensive solution for all property needs. From the moment our
							clients engage with us, we want to offer a seamless, all-inclusive
							experience that addresses every aspect of property care and
							enhancement.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Aesthetic Transformation
						</h4>
						<p className="text-white">
							URBAN DOOR is committed to being a catalyst for aesthetic
							transformation. We envision spaces that not only function
							seamlessly but also captivate with their visual appeal. Our goal
							is to contribute to the creation of environments that evoke a
							sense of pride and joy.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Customer-Centric Approach
						</h4>
						<p className="text-white">
							At the heart of our vision is a relentless commitment to our
							clients. We envision URBAN DOOR as a trusted partner, known for
							its customer-centric approach. We aim to understand and exceed the
							expectations of our clients, ensuring their satisfaction and
							building enduring relationships.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Industry Leadership
						</h4>
						<p className="text-white">
							URBAN DOOR aims to be a leader in the property care and
							enhancement industry. We envision a reputation for excellence,
							reliability, and innovation that sets us apart as the preferred
							choice for individuals and businesses seeking top-tier services.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Sustainable Practices
						</h4>
						<p className="text-white">
							Sustainability is integral to our vision. We aspire to integrate
							eco-friendly practices into our services, contributing to the
							well-being of our planet. Our vision includes adopting sustainable
							solutions that align with the evolving environmental
							consciousness.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Empowering Communities
						</h4>
						<p className="text-white">
							URBAN DOOR sees itself as a positive force that extends beyond
							property services. We envision actively participating in community
							empowerment initiatives, fostering growth, and contributing to the
							well-being of the communities we serve.
						</p>
					</div>
				</div>
			</div>
			<div className="py-10 ">
				<h3 className="font-extrabold text-xl md:text-2xl text-[#ff7000] uppercase text-center mb-6 md:mb-10">
					Our Identity
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-28">
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Professional Excellence
						</h4>
						<p className="text-white">
							URBAN DOOR stands as a symbol of professional excellence. Our team
							comprises certified and experienced professionals dedicated to
							delivering top-tier services in various domains, from home
							appliances repair to interior designing.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Comprehensive Solutions
						</h4>
						<p className="text-white">
							We are your all-in-one solution for property care and enhancement.
							Whether you need a quick appliance repair, plumbing services,
							carpentry, electrical solutions, painting, pest control, or a
							transformative interior design, URBAN DOOR has you covered.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Innovation and Technology
						</h4>
						<p className="text-white">
							Embracing innovation and technology, URBAN DOOR is committed to
							staying at the forefront of the industry. We continually explore
							and integrate cutting-edge solutions to ensure efficiency,
							reliability, and a superior service experience for our clients.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Customer-Centric Approach
						</h4>
						<p className="text-white">
							URBAN DOOR is built on a foundation of a customer-centric
							approach. Understanding the unique needs of our clients, we tailor
							our services to exceed expectations. Your satisfaction is our
							priority, and we aim to be a trusted partner on your property care
							journey.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Aesthetic Transformation
						</h4>
						<p className="text-white">
							We believe in the transformative power of aesthetics. URBAN DOOR
							is dedicated to not only fixing issues but also enhancing the
							visual appeal of your spaces. Our services are crafted to
							contribute to the creation of environments that inspire and
							uplift.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Sustainability Consciousness
						</h4>
						<p className="text-white">
							URBAN DOOR is mindful of its environmental impact. We aim to
							integrate sustainable practices into our services, aligning with
							global efforts towards eco-conscious living.
						</p>
					</div>
					<div className="bg-[#0f1117] p-6 rounded-md">
						<h4 className="text-[#ff7000] font-bold mb-2">
							Community Engagement
						</h4>
						<p className="text-white">
							Beyond our services, URBAN DOOR is actively engaged in empowering
							communities. We envision our presence as a positive force
							contributing to community growth and well-being.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
