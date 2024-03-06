import ContactForm from "@/components/others/Form";

const page = () => {
	return (
		<div className="text-white px-28 flex space-y-4 flex-col py-24 justify-between items-center">
			<h3 className="text-3xl font-bold ">Get in Touch</h3>
			<p className="text-[#7b8ec8]">
				If you have any queries, feel free to contact us. We are available 24/7
				to help you.
			</p>
			<ContactForm />
		</div>
	);
};

export default page;
