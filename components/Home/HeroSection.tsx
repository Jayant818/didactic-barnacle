"use client";
import React from "react";
import Lottie from "lottie-react";
import Home from "./Home.json";
const HeroSection = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between  py-10  lg:px-0 bg-[#000000] h-[35rem]">
			<div className="lg:w-[40%] ml-20 ">
				<h3 className="text-2xl lg:text-4xl font-bold  mb-4 text-[#fff]">
					Welcome to UrbanDoor - Your Home Service Experts
				</h3>
				<p className="text-base  md:text-lg text-[#7b8ec8] ">
					Making your home beautiful and functional is now hassle-free!
					UrbanDoor connects you with skilled professionals for all your home
					needs. From fixing leaks to cleaning, we have got you covered. Say
					hello to easy home solutions with UrbanDoor.
				</p>
			</div>
			<div className=" mr-20 ">
				<Lottie
					animationData={Home}
					loop={true}
					className="w-full flex justify-center items-center h-[80%] mx-auto relative left-10 md:left-0"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
