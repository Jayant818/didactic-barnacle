import React from "react";

const page = () => {
	return (
		<div className="text-white py-20 ">
			<h1 className="text-4xl pl-28 mb-10">About Us</h1>
			<p className="px-28 my-7">
				<h3 className="font-extrabold text-2xl text-[#ffffff] inline-block">
					Urban<span className="text-[#ff7000]">Doors</span>
				</h3>{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
				natus omnis architecto quam quidem molestias voluptas cum, ea totam
				corporis accusamus inventore voluptates qui impedit? Iusto quidem
				praesentium labore! Quidem sed unde nobis minima repudiandae sequi
				facere, accusantium temporibus at fuga cum fugit vel quos laudantium
				error quae pariatur numquam porro molestias, quasi ratione. Corporis
				ratione nisi autem quae. Earum eaque saepe optio debitis quaerat.
			</p>
			<div className="flex justify-center space-x-20">
				<div className="items-center max-w-sm flex flex-col text-sm border-blue-200 p-6 border-2 bg-[#0f1117] rounded  space-y-4">
					<h3 className="text-xl text-[#ff7000] font-bold">Our Mission</h3>
					<p className="text-[#7b8ec8] text-lg">
						Our mission is to provide the best home maintenance services to our
						customers. We aim to provide the best services at the most
						affordable prices.
					</p>
				</div>
				<div className="items-center max-w-sm flex flex-col text-sm border-blue-200 p-6 border-2 bg-[#0f1117] rounded  space-y-4 ">
					<h3 className="text-xl text-[#ff7000] font-bold">Our Vision</h3>
					<p className="text-[#7b8ec8] text-lg">
						Our vision is to become the best home maintenance company in the
						world. We aim to provide our services to as many people as possible.
					</p>
				</div>
				<div className="items-center max-w-sm flex flex-col text-sm border-blue-200 p-6 border-2 bg-[#0f1117] rounded  space-y-4 ">
					<h3 className="text-xl text-[#ff7000] font-bold">Our Values</h3>
					<p className="text-[#7b8ec8] text-lg">
						Our values include honesty, integrity, and hard work. We believe in
						providing the best services to our customers.
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
