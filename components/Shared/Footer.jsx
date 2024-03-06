import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<footer className="w-full py-10  bg-[#0f1117]">
			<div className="w-full flex flex-col md:flex-row justify-between px-20 gap-10">
				<div className="">
					<h3 className="text-xl leading-none font-bold  pb-10 text-white underline">
						Useful Links
					</h3>
					<div className="flex flex-col gap-4 mt-6">
						{[
							{
								name: "Home",
								link: "/",
							},
							{
								name: "About",
								link: "/about",
							},
							{
								name: "Services",
								link: "/services",
							},
							{
								name: "Contact Us",
								link: "/contact",
							},
						].map((service, index) => (
							<Link
								href={service.link}
								key={index}
								className="text-sm text-white "
							>
								{service.name}
							</Link>
						))}
					</div>
				</div>
				<div className="">
					<h3 className="text-xl leading-none font-bold  pb-10   text-white border-b-2 border-white">
						Top Services
					</h3>
					<div className="flex flex-col gap-4 mt-6">
						{/* ac ref water deep fr */}
						{[
							{
								name: "Air Conditioner Service",
								link: "/services/1",
							},
							{
								name: "Refergretor Service",
								link: "/services/5",
							},
							{
								name: "Water Cooler Service",
								link: "/services/6",
							},
							{
								name: "Deep Freezer Service",
								link: "/services/8",
							},
						].map((service, index) => (
							<Link
								href={service.link}
								key={index}
								className="text-sm text-white "
							>
								{service.name}
							</Link>
						))}
					</div>
				</div>
				<div className="">
					<h3 className="text-xl font-bold leading-none  pb-10  text-white border-b-2 border-white">
						Contact Details
					</h3>
					<div className="flex flex-col gap-4 mt-6">
						{[
							"Address:- TC-610, Capital",
							"HighStreet, Phoal Bagh",
							"Chowk, Bhiwadi(Raj) 3010A.",
							"Phone - 9116671966",
							"Email - info.urbandoor@gmail.com",
						].map((service, index) => (
							<div key={index} className="text-sm text-white ">
								{service}
							</div>
						))}
					</div>
				</div>
				<div>
					<h3 className="text-xl font-bold leading-none  pb-10  text-white border-b-2 border-white">
						Join us at
					</h3>
					<div className="flex   gap-6 mt-6">
						<Link href="https://www.instagram.com/urbandoorservices?igsh=MzRlODBiNWFlZA==">
							<div className="flex gap-2 ">
								<Image
									src="/images/instagram.svg"
									alt="Instagram Logo"
									width={19}
									height={19}
									className="object-contain mt-2"
								/>
								{/* <p className=" text-white text-bold">Instagram</p> */}
							</div>
						</Link>

						<Link href="https://www.facebook.com/urbandoorservices?mibextid=LQQJ4d">
							<div className="flex gap-2">
								<Image
									src="/images/facebook.svg"
									alt="Facebook Logo"
									width={23}
									height={23}
									className="object-contain filter brightness-0"
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
