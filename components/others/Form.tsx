"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/user.action";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	number: z.string().min(10, {
		message: "Number must be at least 10 characters.",
	}),
	address: z.string().min(10, {
		message: "Address must be at least 10 characters.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

const ContactForm = () => {
	const router = useRouter();
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			number: "",
			address: "",
			message: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const templateParams = {
			name: values.name,
			number: values.number,
			Address: values.address,
			Description: values.message,
		};

		try {
			await createUser(templateParams);

			router.push("/");
		} catch (error) {}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-2  mx-auto bg-[#1c2432] p-4 rounded-lg shadow-lg w-[50%] w-full"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="bg-[#1c2432]">
								Name<span className="text-black">*</span>
							</FormLabel>
							<FormControl className="bg-[#1c2432]">
								<Input {...field} />
							</FormControl>
							<FormDescription className="text-[#749487]">
								Enter Your Name
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="number"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="">
								Number
								<span className="text-black">*</span>
							</FormLabel>
							<FormControl className="bg-[#1c2432]">
								<Input {...field} />
							</FormControl>
							<FormDescription className="text-[#749487]">
								Enter Your Number
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* <FormField
					control={form.control}
					name="emailId"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="paragraph-semibold text-dark400_light800">
								Email Id
								<span className="text-black">*</span>
							</FormLabel>
							<FormControl className="bg-[#1c2432]">
								<Input {...field} />
							</FormControl>
							<FormDescription className="text-[#749487]">
								Enter Your Email Id
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/> */}
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="paragraph-semibold text-dark400_light800">
								Address
								<span className="text-black">*</span>
							</FormLabel>
							<FormControl className="bg-[#1c2432]">
								<Input {...field} />
							</FormControl>
							<FormDescription className="text-[#749487]">
								Enter Your Address
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="paragraph-semibold text-dark400_light800">
								Message
								<span className="text-black">*</span>
							</FormLabel>
							<FormControl className="bg-[#1c2432]">
								<Input {...field} />
							</FormControl>
							<FormDescription className="text-[#749487]">
								Enter Your Message
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="my-10 ml-[40%]  bg-blue-400 text-white font-bold"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
