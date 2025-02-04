/** @format */

import React from "react";
import img1 from "../../..//assets/images/service-1.jpg";
import call from "../../..//assets/images/man.png";

import Image from "next/image";

const Section5 = () => {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="w-[80%] h-full flex flex-wrap">
				<div className="w-1/2 h-[260px]">
					<div className="text-5xl font-semibold w-4/5 mb-8">
						Dentistry for Today’s Lifestyle
					</div>
					<div className="text-xl font-semibold">
						We Have All Your Dental Needs Covered
					</div>
				</div>
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>{" "}
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>{" "}
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>{" "}
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>{" "}
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>{" "}
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>{" "}
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>{" "}
				<div
					className="w-1/4 h-[260px] flex items-center justify-center text-white bg-black opacity-60"
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<div className=" w-2/3 h-3/5">
						{" "}
						<div className="text-xl font-bold mb-2">01.</div>
						<div className="text-xl font-bold mb-2">Dental X-Rays​</div>
						<div>
							This is a short description elaborating the service you have
							mentioned above.​
						</div>
					</div>
				</div>
				<div className="w-1/4 h-[260px] bg-[#387dff] flex items-center justify-center">
					<div>
						<div className="flex items-center ">
							<Image
								src={call}
								height={30}
							/>
							<span className="text-white m-2 font-semibold">
								FOR INSURANCE
							</span>
						</div>
						<div>
							<span className="text-white m-2 font-semibold">
								+91 1234567890
							</span>
						</div>
					</div>
				</div>
				<div className="w-1/4 h-[260px] bg-[#387dff] rounded-br-full"></div>
			</div>
		</div>
	);
};

export default Section5;
