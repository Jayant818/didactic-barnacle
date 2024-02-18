"use client";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import Home from "./Home.json";
const HeroSection = () => {
	// const options = {
	// 	animationData: Home,
	// 	loop: true,
	// };
	return (
		// <div className="flex flex-col lg:flex-row items-center justify-between  py-10  lg:px-0 bg-[#52B7A9]">
		<div className="flex flex-col lg:flex-row items-center justify-between  py-10  lg:px-0 bg-[#000000] h-[35rem]">
			{/* // <div className="flex flex-col lg:flex-row items-center justify-between  py-10  lg:px-0 bg-[#FFD180]"> */}
			<div className="lg:w-[40%] ml-20 ">
				<h3 className="text-3xl lg:text-4xl font-bold  mb-4 text-[#fff]">
					Welcome to UrbanDoor - Your Home Service Experts
				</h3>
				<p className="text-lg text-[#7b8ec8] ">
					Making your home beautiful and functional is now hassle-free!
					UrbanDoor connects you with skilled professionals for all your home
					needs. From fixing leaks to cleaning, we have got you covered. Say
					hello to easy home solutions with UrbanDoor.
				</p>
			</div>
			<div className=" mr-20 ">
				{/* <Image
					alt="UrbanDoor"
					src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlcGFpciUyMHNob3B8ZW58MHx8MHx8fDA%3D"
					layout="fill"
					objectFit="cover"
					className="rounded-lg shadow-lg"
				/> */}
				<Lottie
					animationData={Home}
					loop={true}
					// speed={0.5}
					className="w-full flex justify-center items-center h-[80%] mx-auto"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
