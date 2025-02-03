/** @format */

import Image from "next/image";
import React from "react";
import exprinced from "../../../assets/images/experience.png";

const Section4 = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-100">
            <div className="w-4/5">
                <div className="text-4xl font-semibold w-full text-center mb-8">
                    Complete Care on Your Schedule
                </div>
                <div className="text-xl font-semibold w-full text-center mb-6">
                    Bringing Life to Your Smile
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className="relative w-full md:w-1/5 flex flex-col items-center bg-white shadow-md rounded-sm p-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-full flex items-center justify-center mb-4">
                                <Image
                                    className="object-cover"
                                    src={exprinced}
                                    height={50}
                                    width={50}
                                    alt="image not found"
                                />
                            </div>
                            <div className="text-xl font-semibold w-full text-center mb-2">
                                Experienced Dentist​
                            </div>
                            <div className="text-gray-600 text-lg text-center mb-2">
                                This is a short description elaborating the service you
                            </div>
                            <div className="text-gray-600 text-lg text-center mb-2">
                                have mentioned above.​​
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section4;
