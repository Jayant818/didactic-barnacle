"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { createUser } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [problem, setProblem] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const handleClick = async () => {
		try {
			await createUser({
				name: name,
				number: number,
				Address: address,
				Description: problem,
			});

			router.push("/");
		} catch (error) {}
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="w-full fixed flex justify-between px-4 py-2 md:p-4 items-center bg-[#0f1117] z-50">
			<div className={`flex  items-center md:hidden`}>
				<button className="text-white focus:outline-none" onClick={toggleMenu}>
					<svg
						className="h-6 w-6 fill-current"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{isOpen ? (
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
							/>
						) : (
							<path
								fillRule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						)}
					</svg>
				</button>
			</div>

			<div
				className={`flex justify-center md:order-2 ${isOpen ? "hidden" : ""}`}
			>
				<Link href="/">
					<h3 className="font-extrabold text-lg md:text-2xl text-[#ffffff]">
						Urban Door
					</h3>
				</Link>
			</div>

			<div className={`flex order-3 gap-2 ${isOpen ? "hidden" : ""}`}>
				<ul className=" gap-2 md:gap-4 mt-1 text-[#ffffff] hidden md:flex">
					<li>
						<Link
							href="/"
							className="hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/services"
							className="hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
						>
							About Us
						</Link>
					</li>
					<li className="mr-10">
						<Link
							href="/contact"
							className="hover:underline hover:text-[#ff7000] text-semibold text-sm md:text-base"
						>
							Contact Us
						</Link>
					</li>
				</ul>
				<Button
					variant="outline"
					className="px-1   md:px-4 text-[0.7rem] md:text-base "
				>
					<a href="tel:9116671966" className="flex flex-wrap">
						Contact - 9116671966
					</a>
				</Button>
				{/* <Dialog>
					<DialogTrigger asChild>
						<Button
							variant="outline"
							className="px-2 md:px-4 text-xs md:text-base"
						>
							Book Now
						</Button>
					</DialogTrigger>
					
				</Dialog> */}
				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant="outline"
							className="px-1  md:px-4 text-[0.7rem] md:text-base"
						>
							Book Now
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Book Now</DialogTitle>
							<DialogDescription>
								Get Expert Service at your Doorstep
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="name" className="">
									Name
								</Label>
								<Input
									id="name"
									className="col-span-3"
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="number" className="">
									Number
								</Label>
								<Input
									id="number"
									className="col-span-3"
									required
									onChange={(e) => setNumber(e.target.value)}
								/>
							</div>
							{/* <div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="email" className="">
									Email Id
								</Label>
								<Input
									id="email"
									className="col-span-3"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div> */}
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="Address" className="">
									Address
								</Label>
								<Input
									id="Address"
									className="col-span-3"
									required
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
							<div className="flex  items-center gap-4 ">
								<Label htmlFor="problem" className="w-28">
									Your problem
								</Label>
								<Textarea
									placeholder="Type your message here."
									id="problem"
									className="col-span-3"
									required
									onChange={(e) => setProblem(e.target.value)}
								/>
							</div>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button type="submit" onClick={handleClick}>
									Send
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>

			<div
				className={`${
					isOpen ? "block" : "hidden"
				} w-full md:hidden md:w-auto order-3 md:order-1`}
			>
				<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
					<li>
						<Link
							href="/"
							className="block py-2 pr-4 pl-3 text-white hover:bg-gray-700 rounded md:bg-transparent md:text-[#ffffff] md:p-0 hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/services"
							className="block py-2 pr-4 pl-3 text-white hover:bg-gray-700 rounded md:bg-transparent md:text-[#ffffff] md:p-0 hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="block py-2 pr-4 pl-3 text-white hover:bg-gray-700 rounded md:bg-transparent md:text-[#ffffff] md:p-0 hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="block py-2 pr-4 pl-3 text-white hover:bg-gray-700 rounded md:bg-transparent md:text-[#ffffff] md:p-0 hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
						>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		// <nav className="w-full fixed flex   justify-between p-4 items-center bg-[#0f1117] z-50">
		// 	<div className="flex gap-3 md:gap-6">
		// 		<Link href="/">
		// 			<h3 className="font-extrabold text-base  md:text-2xl text-[#ffffff]">
		// 				Urban Door{" "}
		// 			</h3>
		// 		</Link>
		// 	</div>

		// 	<div className="flex gap-4 md:gap-10">
		// 		<ul className="flex gap-2 md:gap-4 mt-1 text-[#ffffff]">
		// 			<li>
		// 				<Link
		// 					href="/"
		// 					className="hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
		// 				>
		// 					Home
		// 				</Link>
		// 			</li>
		// 			<li>
		// 				<Link
		// 					href="/services"
		// 					className="hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
		// 				>
		// 					Services
		// 				</Link>
		// 			</li>
		// 			<li>
		// 				<Link
		// 					href="/about"
		// 					className="hover:underline hover:text-[#ff7000] text-semibold text-xs md:text-base"
		// 				>
		// 					About Us
		// 				</Link>
		// 			</li>
		// 			<li className="">
		// 				<Link
		// 					href="/contact"
		// 					className="hover:underline hover:text-[#ff7000] text-semibold text-sm md:text-base"
		// 				>
		// 					Contact Us
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 		<Button variant="outline" className="px-2 md:px-4 text-xs md:text-base">
		// 			<a href="tel:9116671966">Contact - 9116671966</a>
		// 		</Button>

		// <Dialog>
		// 	<DialogTrigger asChild>
		// 		<Button
		// 			variant="outline"
		// 			className="px-2 md:px-4 text-xs md:text-base"
		// 		>
		// 			Book Now
		// 		</Button>
		// 	</DialogTrigger>
		// 	<DialogContent className="sm:max-w-[425px]">
		// 		<DialogHeader>
		// 			<DialogTitle>Book Now</DialogTitle>
		// 			<DialogDescription>
		// 				Get Expert Service at your Doorstep
		// 			</DialogDescription>
		// 		</DialogHeader>
		// 		<div className="grid gap-4 py-4">
		// 			<div className="grid grid-cols-4 items-center gap-4">
		// 				<Label htmlFor="name" className="">
		// 					Name
		// 				</Label>
		// 				<Input
		// 					id="name"
		// 					className="col-span-3"
		// 					required
		// 					onChange={(e) => setName(e.target.value)}
		// 				/>
		// 			</div>
		// 			<div className="grid grid-cols-4 items-center gap-4">
		// 				<Label htmlFor="number" className="">
		// 					Number
		// 				</Label>
		// 				<Input
		// 					id="number"
		// 					className="col-span-3"
		// 					required
		// 					onChange={(e) => setNumber(e.target.value)}
		// 				/>
		// 			</div>
		// 			{/* <div className="grid grid-cols-4 items-center gap-4">
		// 				<Label htmlFor="email" className="">
		// 					Email Id
		// 				</Label>
		// 				<Input
		// 					id="email"
		// 					className="col-span-3"
		// 					required
		// 					onChange={(e) => setEmail(e.target.value)}
		// 				/>
		// 			</div> */}
		// 			<div className="grid grid-cols-4 items-center gap-4">
		// 				<Label htmlFor="Address" className="">
		// 					Address
		// 				</Label>
		// 				<Input
		// 					id="Address"
		// 					className="col-span-3"
		// 					required
		// 					onChange={(e) => setAddress(e.target.value)}
		// 				/>
		// 			</div>
		// 			<div className="flex  items-center gap-4 ">
		// 				<Label htmlFor="problem" className="w-28">
		// 					Your problem
		// 				</Label>
		// 				<Textarea
		// 					placeholder="Type your message here."
		// 					id="problem"
		// 					className="col-span-3"
		// 					required
		// 					onChange={(e) => setProblem(e.target.value)}
		// 				/>
		// 			</div>
		// 		</div>
		// 		<DialogFooter>
		// 			<DialogClose asChild>
		// 				<Button type="submit" onClick={handleClick}>
		// 					Send
		// 				</Button>
		// 			</DialogClose>
		// 		</DialogFooter>
		// 	</DialogContent>
		// </Dialog>
		// 	</div>
		// </nav>
	);
};

// Exporting the Navbar component
export default Navbar;
