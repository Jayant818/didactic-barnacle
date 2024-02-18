import ContactForm from "@/components/others/Form";

const page = () => {
	return (
		<div className="text-white px-28 flex space-y-4 flex-col mt-10 justify-between items-center">
			{/* make a contact form for contact us page with some additional info  */}
			<h3 className="text-3xl font-bold ">Get in Touch</h3>
			<p className="text-[#7b8ec8]">
				If you have any queries, feel free to contact us. We are available 24/7
				to help you.
			</p>
			<ContactForm />
			{/* <div className="flex justify-center">
			</div> */}
		</div>
	);
};

export default page;
