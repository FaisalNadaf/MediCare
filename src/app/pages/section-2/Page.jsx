/** @format */

import Image from "next/image";
import React from "react";
import call from "../../../assets/images/man.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Section02 = () => {
	return (
		<div className="h-[500px] w-[80%] my-8 bg-blue-500 absolute  text-white flex items-center justify-center ">
			{/* <div className="bg-blue-500 h-[300px] w-[80%] relative top-0"/> */}
			<div className="w-[45%]">
				<div className="text-5xl mb-2 font-bold ">New Patient</div>
				<div className="my-2">
					A descriptive paragraph that tells clients how good you are and proves
					that you are the best choice that they’ve made. This paragraph is also
					for those who are looking out for a reliable dental clinic.
				</div>
				<div className="text-xl  my-4">
					<div className="flex items-center gap-3">
						<Image
							src={call}
							width={20}
							height={20}
						/>
						NEED ASSISTANCE?
					</div>
					<div> +91 1231231231</div>
				</div>
			</div>
			<div className="w-[45%] h-[65%] bg-white  relative left-40 flex items-center justify-center">
				{" "}
				<div className="w-[80%] h-[70%] flex flex-col gap-6">
					<Input
						type="text"
						placeholder="Your Name"
					/>
					<Input
						type="email"
						placeholder="Your Email"
					/>
					<Input
						type="text"
						placeholder="Your Phone Number"
					/>
					<Button className="bg-[#1e6dff] w-1/2">Send Request</Button>
				</div>
			</div>
		</div>
	);
};

export default Section02;
