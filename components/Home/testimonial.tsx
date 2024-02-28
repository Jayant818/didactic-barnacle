import {
	CardContent,
	CardTitle,
	CardDescription,
	CardHeader,
	Card,
} from "@/components/ui/card";
import Image from "next/image";

interface personProps {
	readonly name: string;
	readonly place: string;
	readonly description: string;
	readonly imgSrc: string;
}

export function Testimonial(props: personProps) {
	return (
		// <div className="flex items-center justify-center min-h-screen ">
		<div className="  mx-auto  p-6 rounded-lg shadow-offset-black offset-x-10 offset-y-10">
			<Card className="p-6 font-poppins w-96 min-h-56 bg-[#151821] text-white">
				<CardContent className="text-xl relative mb-2 w-80">
					<svg
						className=" absolute top-0 left-0 text-20xl text-cyan-300"
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
						<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
					</svg>
					<p> {props.description}</p>
				</CardContent>
				<CardHeader className="pt-0">
					<div className="flex items-center">
						<Image
							alt={props.name}
							className="rounded-full"
							height={40}
							width={40}
							objectFit="cover"
							src={props.imgSrc}
						/>
						<div>
							<CardTitle className="text-base">{props.name}</CardTitle>
							<CardDescription>{props.place}</CardDescription>
						</div>
					</div>
				</CardHeader>
			</Card>
		</div>
		// </div>
	);
}
