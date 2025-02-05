/** @format */

import React from "react";

import img1 from "../../../assets/images/CTA-section-bg.jpg";
import img2 from "../../../assets/images/healthcare.png";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section6 = () => {
	return (
		<div className="h-[600px] w-full flex items-center justify-start ">
			<div
				className="h-[62%] w-1/2 relative "
				style={{
					backgroundImage: `url(${img1.src})`,
					width: "50%",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}>
				<div
					className="absolute h-full w-full 
                    
bg-gradient-to-r from-transparent  to-[#669bff]
                    
                      "></div>
			</div>
			<div className="h-[62%] w-1/2 bg-[#669bff] flex items-center justify-start px-4">
				<div>
					<div className="text-xl mb-4 font-semibold text-white">
						We Love to See You Smile
					</div>
					<div className="text-5xl mb-6 font-semibold w-4/5 text-white">
						$100 OFF on All Dental Service*
					</div>
					<Button className="bg-[#ffffff00] text-white px-8 py-6 border border-white mx-">
						{" "}
						<Image
							src={img2}
							width={20}></Image>{" "}
						Book an Appointment Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Section6;
