"use client";
// import { getAllUser } from "@/lib/actions/user.action";
// import React from "react";

// export interface ContactType {
// 	_id: string; // Assuming ObjectId is converted to string when fetched
// 	name: string;
// 	number: string;
// 	email: string;
// 	Address: string;
// 	Description: string;
// 	__v: number;
// }

// const ContactCard = ({ contact }: { contact: ContactType }) => {
// 	return (
// 		<div className="bg-gray-900 text-white rounded-lg p-4 mb-4 w-[80%] ">
// 			<h2 className="text-xl md:text-2xl font-bold">{contact.name}</h2>
// 			<p className="text-base md:text-lg">Number: {contact.number}</p>
// 			<p className="text-base md:text-lg">Address: {contact.Address}</p>
// 			<p className="text-base md:text-lg w-[80%]">
// 				Description: {contact.Description}
// 			</p>
// 		</div>
// 	);
// };

// const page = async () => {
// 	const data = await getAllUser();
// 	console.log(data);
// 	return (
// 		<div className="flex flex-col items-center justify-center  bg-gray-800 min-h-[80vh]">
// 			<h1 className="text-3xl font-bold text-white mb-8 mt-4">Contact List</h1>
// 			{data.map((contact: ContactType) => (
// 				<ContactCard key={contact._id} contact={contact} />
// 			))}
// 		</div>
// 	);
// };

// export default page;

import React, { useState, useEffect } from "react";
import { getAllUser } from "@/lib/actions/user.action";

export interface ContactType {
	_id: string;
	name: string;
	number: string;
	email: string;
	Address: string;
	Description: string;
	__v: number;
}

const ContactCard = ({ contact }: { contact: ContactType }) => {
	return (
		<div className="bg-gray-900 text-white rounded-lg p-4 mb-4 w-[80%] ">
			<h2 className="text-xl md:text-2xl font-bold">{contact.name}</h2>
			<p className="text-base md:text-lg">Number: {contact.number}</p>
			<p className="text-base md:text-lg">Address: {contact.Address}</p>
			<p className="text-base md:text-lg w-[80%]">
				Description: {contact.Description}
			</p>
		</div>
	);
};

const Page = () => {
	const [contacts, setContacts] = useState<ContactType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAllUser();
				setContacts(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center bg-gray-800 min-h-[80vh] py-20">
			<h1 className="text-3xl font-bold text-white mb-8 mt-4">Contact List</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				contacts.map((contact) => (
					<ContactCard key={contact._id} contact={contact} />
				))
			)}
		</div>
	);
};

export default Page;
