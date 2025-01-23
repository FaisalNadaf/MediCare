/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
	title: "Azhari",
	description: "physiotherapy and cupping therapy",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
