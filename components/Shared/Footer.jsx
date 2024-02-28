import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<footer className="sm:px-16 py-4 px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 flex-wrap bg-[#0f1117]">
			<p className="text-base font-bold text-white mb-2 sm:mb-0">
				@2024 UrbanDoors
			</p>
			<h3 className="font-extrabold text-2xl text-[#ffffff] mb-2 sm:mb-0">
				Urban<span className="text-[#ff7000]">Doors</span>
			</h3>
			<div className="flex items-center gap-6">
				<Link href="https://www.instagram.com/urbandoorservices?igsh=MzRlODBiNWFlZA==">
					<Image
						src="./images/instagram.svg"
						alt="Instagram Logo"
						width={19}
						height={19}
						className="object-contain"
					/>
				</Link>
				<Link href="https://www.facebook.com/urbandoorservices?mibextid=LQQJ4d">
					<Image
						src="./images/facebook.svg"
						alt="Facebook Logo"
						width={19}
						height={19}
						className="object-contain text-white"
					/>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
