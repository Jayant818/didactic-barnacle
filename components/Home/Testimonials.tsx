import React from "react";
import { Testimonial } from "./testimonial";

const data = [
	{
		name: "Nitin",
		place: "Rathiwas, Haryana",
		imgSrc: "/images/Testimonials/Nitin.png",
		description:
			"Outstanding service! My air conditioning was repaired in under half an hour.",
	},
	{
		name: "Lucky",
		place: "Dharuhera, Haryana",
		imgSrc: "/images/Testimonials/lucky.png",
		description:
			"They did a great job! They were really nice and got the job done quickly.",
	},
	{
		name: "Sumiti Sharma",
		place: "Bhiwadi, Haryana",
		imgSrc: "/assests/sumit.jpg",
		description: "Great job! My plumbing was repaired swiftly and efficiently.",
	},
	{
		name: "Aman",
		place: "Sidhrawali, Haryana",
		imgSrc: "/assests/aman.jpg",
		description:
			"Great work! My refrigerator was fixed promptly, exceeding my expectations.",
	},
	{
		name: "Priya Yadav",
		place: "Gurugram, Haryana",
		imgSrc: "/assests/priya.jpg",
		description:
			"Fantastic experience! Working with the interior designing team was a pleasure, and the results speak for themselves.",
	},
];

const Testimonials = () => {
	return (
		<div className="my-10 text-[rgb(255,255,255)]">
			<h2 className="text-left font-semibold text-xl  md:text-3xl pl-10  md:pl-20 ">
				Testimonials
			</h2>
			<div className="flex gap-4  md:gap-6 flex-wrap px-10 mt-6  md:px-14 md:mt-10">
				{data.map((person) => (
					<Testimonial
						key={person.name}
						name={person.name}
						place={person.place}
						description={person.description}
						imgSrc={person.imgSrc}
					/>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
