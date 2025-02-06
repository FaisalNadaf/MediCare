/** @format */

import React from "react";

const Footer = () => {
	return (
		<div className="h-[400px] w-full bg-[#1a1a1a] text-white flex flex-col items-center justify-center">
			<div className="h-1/2 w-[80%] flex justify-center">
				<div className="w-1/2 h-full ">
					{" "}
					<div>Azhari Clinick </div>
					<div>
						Feugiat arcu vulputate debitis anim nihil, doloribus? Varius eos non
						laborum, placeat accusantium rutrum quos
					</div>
				</div>
				<div className="w-1/2 h-full flex justify-end">logo</div>
			</div>
			<div className="mt-16  border-t-2 border-gray-700 pt-4 w-full flex justify-center"> 
        <div>Copyright © 2025 Azhari Clinic | Powered by Azhari Clinic</div>
      </div>
		</div>
	);
};

export default Footer;
