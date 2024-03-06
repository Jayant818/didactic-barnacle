"use client";
import React from "react";
import Lottie from "lottie-react";
import Home from "./Home.json";
const HeroSection = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between  py-24  lg:px-0 bg-[#000000] h-[35rem]">
			<div className="lg:w-[40%] ml-10 md:ml-20 p-4">
				<h3 className="text-2xl lg:text-4xl font-bold  mb-4 text-[rgb(255,255,255)]">
					Welcome to Urban Door - Services are many, you choose any
				</h3>
				<p className="text-base  md:text-lg text-[#ff7000] ">
					Making your home beautiful and functional is now hassle-free! Urban
					Door connects you with skilled professionals for all your home needs.
					From fixing leaks to painting, we have got you covered. Say hello to
					easy home solutions with Urban Door.
				</p>
			</div>
			<div className="mr-10  md:mr-20 pt-20 ">
				<Lottie
					animationData={Home}
					loop={true}
					className="w-full flex justify-center items-center h-[80%] mx-auto relative left-[0.5rem] md:left-0 top-[-33%]"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
