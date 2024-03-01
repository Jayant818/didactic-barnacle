import { getAllUser } from "@/lib/actions/user.action";
import React from "react";

export interface ContactType {
	_id: string; // Assuming ObjectId is converted to string when fetched
	name: string;
	number: string;
	email: string;
	Address: string;
	Description: string;
	__v: number;
	// _id:
}

const ContactCard = ({ contact }: { contact: ContactType }) => {
	return (
		<div className="bg-gray-900 text-white rounded-lg p-4 mb-4 w-[80%] ">
			<h2 className="text-xl md:text-2xl font-bold">{contact.name}</h2>
			<p className="text-base md:text-lg">Number: {contact.number}</p>
			<p className="text-base md:text-lg">Email: {contact.email}</p>
			<p className="text-base md:text-lg">Address: {contact.Address}</p>
			<p className="text-base md:text-lg w-[80%]">
				Description: {contact.Description}
			</p>
		</div>
	);
};

const page = async () => {
	const data = await getAllUser();
	console.log(data);
	return (
		<div className="flex flex-col items-center justify-center  bg-gray-800 min-h-[80vh]">
			<h1 className="text-3xl font-bold text-white mb-8 mt-4">Contact List</h1>
			{data.map((contact: ContactType) => (
				<ContactCard key={contact._id} contact={contact} />
			))}
		</div>
	);
};

export default page;
