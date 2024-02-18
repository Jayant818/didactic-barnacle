import Image from "next/image";

function Footer() {
	return (
		<footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#0f1117]">
			<p className="text-base font-bold text-white">@2024 UrbanDoors</p>
			<h3 className="font-extrabold text-2xl text-[#ffffff]">
				Urban<span className="text-[#ff7000]">Doors</span>
			</h3>
			<div className="flex items-center gap-6">
				<Image
					src="./images/instagram.svg"
					alt="logo"
					width={19}
					height={19}
					className="object-contain"
				/>
				<Image
					src="./images/twitter.svg"
					alt="logo"
					width={19}
					height={19}
					className="object-contain"
				/>
			</div>
		</footer>
	);
}

export default Footer;
