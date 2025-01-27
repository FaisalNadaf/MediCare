/** @format */

import React from "react";
import healthKitIcon from "../../../assets/images/first-aid-kit.png";
import HospitelIcon from "../../../assets/images/hospital.png";
import mapIcon from "../../../assets/images/map.png";
import ima from "../../../assets/images/image-1.png";
import Image from "next/image";

const Section01 = () => {
	return (
		<div className="h-screen w-full  flex items-center justify-center">
			<div className="w-1/2 h-full flex items-center justify-center">
				<div className="w-[80%] ">
					{" "}
					<div className="text-4xl font-bold mb-4">
						Welcome to Azhari Clinic
					</div>
					<div className="text-lg text-gray-500 mb-4">
						A descriptive paragraph that tells clients how good you are and
						proves that you are the best choice that they’ve made. This
						paragraph is also for those who are looking out for a reliable
						dental clinic.
					</div>
					<div className="flex items-center justify-center mb-2">
						<Image
							alt="IMAGE NOT FOUND"
							width={50}
							src={healthKitIcon}
							className="mx-8"
						/>
						<div className="w-[70%]">
							<div className="text-lg font-semibold mb-2">
								Friendly Clinic Near You
							</div>
							<div className=" text-gray-500">
								{" "}
								This is a short description elaborating the service you have
								mentioned above.
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center mb-2">
						<Image
							alt="IMAGE NOT FOUND"
							className="mx-8"
							width={50}
							src={HospitelIcon}
						/>
						<div className="w-[70%]">
							{" "}
							<div className="text-lg font-semibold mb-2">
								Experienced Dentist
							</div>
							<div className=" text-gray-500">
								{" "}
								This is a short description elaborating the service you have
								mentioned above.
							</div>
						</div>
					</div>
					<div>
						<button className="flex items-center justify-around bg-blue-500 text-white px-4 py-2 rounded-md mt-10 hover:bg-blue-600">
							{" "}
							<Image
								alt="IMAGE NOT FOUND"
								width={30}
								src={mapIcon}
							/>
							Visit on google map
						</button>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-1/2 h-full">
				<Image
					src={ima}
					className="w-[80%]"
					alt="IMAGE NOT FOUND"
				/>
			</div>
		</div>
	);
};

export default Section01;
