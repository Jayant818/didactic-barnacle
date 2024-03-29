import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MotionDiv } from "./MotionDiv";
import { AllServices } from "@/constants/Services";
import Link from "next/link";

const Services = () => {
	const data = AllServices;
	const variants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};
	return (
		<div className="py-20  text-[rgb(255,255,255)]">
			<div>
				<h2 className="text-left font-semibold text-2xl md:text-3xl pl-10 md:pl-20 ">
					Appliances Repair and Services
				</h2>

				<div className="grid grid-cols-1 gap-10 px-10  md:px-20 mt-10 md:grid-cols-3">
					{data.map((service, index) => (
						<>
							{service.type == "Appliance" && (
								<>
									<MotionDiv
										key={service.id}
										className="flex flex-col items-center justify-center gap-4 p-6 bg-[#151821] rounded-lg shadow-lg"
										initial="hidden"
										animate="visible"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.2 },
										}}
										transition={{
											delay: 0.25 * index,
											duration: 0.5,
											ease: "easeInOut",
										}}
										variants={variants}
										viewport={{ amount: 0 }}
									>
										<Image
											src={service.splitArray[0].description[0].imgSrc}
											alt={service.name}
											className="rounded-lg w-full h-40 object-cover"
											width={600}
											height={600}
										/>

										<h3 className="font-semibold text-[18px] md:text-xl">
											{service.name}
										</h3>
										<p className="text-center text-sm md:text-base text-[#ff7000]">
											{service.description}
										</p>
										<Button className="bg-white text-black font-bold hover:bg-white">
											<Link href={`/services/${service.id}`}>View Prices</Link>
										</Button>
									</MotionDiv>
								</>
							)}
						</>
					))}
				</div>
			</div>
			<div>
				<h2 className="text-left font-semibold text-2xl md:text-3xl pl-10 md:pl-20 mt-5">
					Other Services
				</h2>

				<div className="grid grid-cols-1 gap-10 px-10  md:px-20 mt-10 md:grid-cols-3">
					{data.map((service, index) => (
						<>
							{service.type == "Others" && (
								<>
									<MotionDiv
										key={service.id}
										className="flex flex-col items-center justify-center gap-4 p-6 bg-[#151821] rounded-lg shadow-lg"
										initial="hidden"
										animate="visible"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.2 },
										}}
										transition={{
											delay: 0.25 * index,
											duration: 0.5,
											ease: "easeInOut",
										}}
										variants={variants}
										viewport={{ amount: 0 }}
									>
										<Image
											src={service.splitArray[0].description[0].imgSrc}
											alt={service.name}
											className="rounded-lg w-full h-40 object-cover"
											width={600}
											height={600}
										/>

										<h3 className="font-semibold text-[18px] md:text-xl">
											{service.name}
										</h3>
										<p className="text-center text-sm md:text-base text-[#ff7000]">
											{service.description}
										</p>
										<Button className="bg-white text-black font-bold hover:bg-white">
											<Link href={`/services/${service.id}`}>View Prices</Link>
										</Button>
									</MotionDiv>
								</>
							)}
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
