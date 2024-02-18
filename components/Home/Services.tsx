import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MotionDiv } from "./MotionDiv";

const Services = () => {
	const data = [
		{
			id: 1,
			title: "Plumbing",
			description:
				"From leaky faucets to clogged drains, we have the expertise to fix it all.",
			imgSrc:
				"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			title: "Cleaning",
			description:
				"We provide professional cleaning services for homes and offices.",
			imgSrc:
				"https://images.unsplash.com/photo-1584792286782-a5dc95dc2250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENsZWFuaW5nfGVufDB8fDB8fHww",
		},
		{
			id: 3,
			title: "Electrical",
			description:
				"Our electricians are skilled to handle all your electrical needs.",
			imgSrc:
				"https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 4,
			title: "Plumbing",
			description:
				"From leaky faucets to clogged drains, we have the expertise to fix it all.",
			imgSrc:
				"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 5,
			title: "Cleaning",
			description:
				"We provide professional cleaning services for homes and offices.",
			imgSrc:
				"https://images.unsplash.com/photo-1584792286782-a5dc95dc2250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENsZWFuaW5nfGVufDB8fDB8fHww",
		},
		{
			id: 6,
			title: "Electrical",
			description:
				"Our electricians are skilled to handle all your electrical needs.",
			imgSrc:
				"https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 7,
			title: "Plumbing",
			description:
				"From leaky faucets to clogged drains, we have the expertise to fix it all.",
			imgSrc:
				"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 8,
			title: "Cleaning",
			description:
				"We provide professional cleaning services for homes and offices.",
			imgSrc:
				"https://images.unsplash.com/photo-1584792286782-a5dc95dc2250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENsZWFuaW5nfGVufDB8fDB8fHww",
		},
		{
			id: 9,
			title: "Electrical",
			description:
				"Our electricians are skilled to handle all your electrical needs.",
			imgSrc:
				"https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
		},
	];

	const variants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};
	return (
		<div className="my-10 text-[rgb(255,255,255)]">
			<h2 className="text-left font-semibold text-3xl pl-20 ">Our Services</h2>
			<div className="grid grid-cols-1 gap-10 px-20 mt-10 md:grid-cols-3">
				{data.map((service, index) => (
					<MotionDiv
						key={service.id}
						className="flex flex-col items-center justify-center gap-4 p-6 bg-[#151821] rounded-lg shadow-lg"
						initial="hidden"
						animate="visible"
						// whileHover={{ scale: "1.2 !important" }}
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
							src={service.imgSrc}
							alt={service.title}
							className="rounded-lg w-full h-40 object-cover"
							width={600}
							height={600}
						/>
						<h3 className="font-semibold text-xl">{service.title}</h3>
						<p className="text-center">{service.description}</p>
						<Button className="bg-white text-black font-bold hover:bg-white">
							Book Now
						</Button>
					</MotionDiv>
				))}
			</div>
		</div>
	);
};

export default Services;
