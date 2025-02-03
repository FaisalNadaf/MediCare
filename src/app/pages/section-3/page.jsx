/** @format */

import Image from "next/image";

import img from "../../../assets/images/image-1.png";

const DentalExcellence = () => {
	return (
		<section className="flex flex-col h-screen md:flex-row items-center justify-center px-6 md:px-16 py-12 bg-white relative">
			{/* Background Design */}
			<div className="absolute top-0 left-0 w-full h-full  -z-10"></div>

			{/* Image Section */}
			<div className="relative h-[80%] w-full md:w-1/2 px-24 flex justify-start items-center">
				<div className="relative w-1/2 h-full overflow-hidden opacity-60">
					<Image
						src={img} // Replace with actual image path
						alt="Dentist treating patient"
						width="100%"
						height="100%"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="absolute top-20 left-56 shadow-xl  w-1/2 h-full overflow-hidden rounded-b-full ">
					<Image
						src={img} // Replace with actual image path
						alt="Dentist treating patient"
						width="100%"
						height="100%"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			{/* Text Section */}
			<div className="w-full md:w-1/3 mt-8 md:mt-0 md:pl-12 text-left">
				<h2 className="text-5xl font-bold text-gray-900 leading-tight">
					Committed To Dental Excellence
				</h2>
				<p className="text-xl font-semibold text-gray-700 mt-3">
					We Create Beautiful and Brighter Smiles
				</p>
				<p className="text-gray-600 mt-4 leading-relaxed">
					Urna habitasse imperdiet! Aut, deleniti nisl, varius? Nunc, iure iure
					nunc sit mi ducimus atque nostrum iure ducimus quae dolore. Massa
					sapien at do ipsum nostra adipiscing.
				</p>
				<p className="text-gray-600 mt-4 leading-relaxed">
					Rutrum fugiat doloribus, dolor, ipsa commodi doloremque do senectus
					neque molestiae dis nisi euismod, diam illo incidunt dignissim
					expedita.
				</p>
				<p className="font-semibold text-gray-900 mt-6 text-lg">
					Dr. Michael Martinez
				</p>
				<p className="text-gray-700 text-base">Master of Dentistry</p>
			</div>
		</section>
	);
};

export default DentalExcellence;
