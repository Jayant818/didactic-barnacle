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
	const router = useRouter();

	const handleClick = async () => {
		try {
			await createUser({
				name: name,
				number: number,
				email: email,
				Address: address,
				Description: problem,
			});

			router.push("/");
		} catch (error) {}
	};

	return (
		<nav className="flex  justify-between p-4 items-center bg-[#0f1117] ">
			<div className="flex gap-3 md:gap-6">
				<Link href="/">
					<h3 className="font-extrabold text-base  md:text-2xl text-[#ffffff]">
						Urban
						<span className="text-[#ff7000]">Door</span>
					</h3>
				</Link>
				<ul className="flex gap-2 mt-1 text-[#ffffff]">
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
							About
						</Link>
					</li>
					{/* <li>
						<Link
							href="/"
							className="hover:underline hover:text-[#ff7000] text-semibold text-sm md:text-base"
						>
							Contact Us
						</Link>
					</li> */}
				</ul>
			</div>
			<div>
				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant="outline"
							className="px-2 md:px-4 text-xs md:text-base"
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
