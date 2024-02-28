import React from "react";
import { AllServices } from "@/constants/Services";
import Image from "next/image";

const NewService = (params: any) => {
	console.log(params.params.id);

	const data = AllServices.filter((item) => {
		return item.id == params.params.id;
	});
	console.log(data[0]);

	return (
		<div className=" flex flex-col gap-6 my-10">
			<h2 className="text-2xl font-semibold w-full text-center">
				{data[0].name}
			</h2>
			{data[0].split ? (
				<div className="flex gap-4 flex-col">
					{data[0].splitArray.map((item, ind) => {
						return (
							<div key={item.name} className=" flex flex-col items-start">
								<h4 className="pl-20 text-xl font-bold mt-4">{item.name}</h4>
								<div className="grid grid-col-1  md:grid-cols-4 gap-10 px-20 mt-4 ">
									{item.description.map((service, ind) => (
										<div
											key={ind}
											className="flex flex-col items-center justify-center gap-4 p-6 bg-[#151821] rounded-lg shadow-lg"
										>
											<Image
												src={service.imgSrc}
												alt={service.name}
												className="rounded-lg w-full h-40 object-cover"
												width={600}
												height={600}
											/>
											<p>{service.name}</p>
											<p>Price : Rs {service.price}</p>
											<p className="font-light text-sm text-zinc-400">
												{service.extra && `(${service.extra})`}
											</p>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="flex gap-4 flex-col items-start">
					<h4 className="pl-20 text-xl font-bold mt-4">
						{data[0].splitArray[0].name}
					</h4>
					<div className="grid grid-col-1  md:grid-cols-4 gap-10 px-20 mt-4 md:grid-cols-">
						{data[0].splitArray[0].description.map((service) => (
							<div
								key={service.name}
								className="flex flex-col items-center justify-center gap-4 p-6 bg-[#151821] rounded-lg shadow-lg"
							>
								<Image
									src={service.imgSrc}
									alt={service.name}
									className="rounded-lg w-full h-40 object-cover"
									width={600}
									height={600}
								/>
								<p>{service.name}</p>
								<p>Price : Rs {service.price}</p>
								<p className="font-light text-xs text-zinc-400">
									{service.extra && `(${service.extra})`}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
			<div className="p-10 md:p-20  ">
				<h3 className="text-xl md:text-2xl  font-bold">Terms & Conditions</h3>
				<p className="mt-5 text-base md:text-lg text-justify">
					Welcome to UrbanDoor. These terms and conditions outline the rules and
					regulations for the use of UrbanDoor&apos;s services. By accessing
					this website, we assume you accept these terms and conditions. Do not
					continue to use UrbanDoor if you do not agree with all of the terms
					and conditions stated on this page. UrbanDoor connects you with
					skilled professionals for all your home needs. From fixing leaks to
					cleaning, we have got you covered. This service is provided by
					UrbanDoor on an `&apos;as is`&apos; basis. We make no representations
					or warranties of any kind, express or implied, about the operation of
					this service or the information, content, materials or products
					included on this website. By using our services, you hereby consent to
					our terms and conditions and agree to its terms. These terms and
					conditions will be governed by and interpreted in accordance with the
					laws of the state of Haryana, and you submit to the non-exclusive
					jurisdiction of the state and federal courts located in Haryana for
					the resolution of any disputes.
				</p>
			</div>
		</div>
	);
};

export default NewService;
