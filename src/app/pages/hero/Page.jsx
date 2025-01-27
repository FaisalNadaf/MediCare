/** @format */
"use client";
import Image from "next/image";
import backgroundImage from "../../../assets/images/image-1.png";
import logo from "../../../assets/images/image-1.png";

const HeroSection = () => {
	return (
		<div className="relative h-screen w-full bg-cover bg-center">
			{/* Background Image */}
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{
								backgroundImage: `url(${backgroundImage.src})`,
								border: "1px solid white",
								borderRadius: "0 0 50% 50% / 75% 75% 25% 25%",
							}}></div>

						{/* Blue Overlay */}
			<div
				className="absolute inset-0 bg-blue-900 bg-opacity-50"
				style={{
					border: "1px solid white",
					borderRadius: "0 0 50% 50% / 75% 75% 25% 25%",
				}}></div>

			{/* Header Section */}
			<div className="relative z-10 flex justify-between items-center px-10 py-6">
				{/* Logo */}
				<div className="flex items-center">
					<Image
						src={logo}
						alt="Dental Clinic Logo"
						width={50}
						height={50}
					/>
					<span className="ml-2 text-white font-bold text-xl">
						
						Azhari Clinic
					</span>
				</div>

				{/* Navigation */}
				<nav className="hidden md:flex space-x-6 text-white">
					<a
						href="#home"
						className="hover:text-blue-400">
						Home
					</a>
					<a
						href="#about"
						className="hover:text-blue-400">
						About
					</a>
					<a
						href="#services"
						className="hover:text-blue-400">
						Services
					</a>
					<a
						href="#reviews"
						className="hover:text-blue-400">
						Reviews
					</a>
					<a
						href="#contact"
						className="hover:text-blue-400">
						Contact Us
					</a>
				</nav>

				{/* Call Button */}
				<a
					href="tel:+8886959859"
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
					Call: + (888) 695-9859
				</a>
			</div>

			{/* Hero Content */}
			<div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
				<h1 className="text-5xl font-bold mb-4">
					A Better Life Starts with a Beautiful Smile
				</h1>
				<p className="text-lg mb-6">
					This is a short description elaborating the service you have mentioned
					above.
				</p>
				<button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
					Book An Appointment
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
