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
import emailjs from "@emailjs/browser";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

// Initializing emailjs
emailjs.init({
	publicKey: process.env.EMAILJS_API_KEY,
});

// Navbar component
const Navbar = () => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [problem, setProblem] = useState("");

	const handleClick = () => {
		const templateParams = {
			name: name,
			number: number,
			email: email,
			Address: address,
			Description: problem,
		};

		emailjs
			.send("service_cv4dpt9", "template_mbsm63b", templateParams, {
				publicKey: "Bnfzfpmsj0UTGmJ-8",
			})
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
				},
				(err) => {
					console.log("FAILED...", err);
				}
			);
	};

	return (
		<nav className="flex justify-between p-4 items-center bg-[#0f1117] ">
			<div className="flex gap-6">
				<h3 className="font-extrabold text-2xl text-[#ffffff]">
					Urban
					<span className="text-[#ff7000]">Doors</span>
				</h3>
				<ul className="flex gap-3 mt-1 text-[#ffffff]">
					<li>
						<Link
							href="/"
							className="hover:underline hover:text-[#ff7000] text-semibold"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/services"
							className="hover:underline hover:text-[#ff7000] text-semibold"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="hover:underline hover:text-[#ff7000] text-semibold"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="hover:underline hover:text-[#ff7000] text-semibold"
						>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Book Now</Button>
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
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="email" className="">
									Email Id
								</Label>
								<Input
									id="email"
									className="col-span-3"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
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
		</nav>
	);
};

// Exporting the Navbar component
export default Navbar;
