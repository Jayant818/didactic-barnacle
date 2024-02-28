import { getAllUser } from "@/lib/actions/user.action";
import React from "react";

export interface ContactType {
	name: string;
	number: string;
	email: string;
	Address: string;
	Description: string;
}

const ContactCard = ({ contact }: { contact: ContactType }) => {
	return (
		<div className="bg-gray-900 text-white rounded-lg p-4 mb-4">
			<h2 className="text-2xl font-bold">{contact.name}</h2>
			<p className="text-lg">Number: {contact.number}</p>
			<p className="text-lg">Email: {contact.email}</p>
			<p className="text-lg">Address: {contact.Address}</p>
			<p className="text-lg">Description: {contact.Description}</p>
		</div>
	);
};

const page = async () => {
	const data = await getAllUser();
	console.log(data);
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-800">
			<h1 className="text-3xl font-bold text-white mb-8">Contact List</h1>
			{data.map((contact: ContactType) => (
				<ContactCard key={contact._id} contact={contact} />
			))}
		</div>
	);
};

export default page;
