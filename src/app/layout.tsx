import "./globals.scss";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: "Next Store",
	description: "Next Store",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="wrapper">
					<Header />
					<main>{children}</main>
					{/* TODO: add popup after click  */}
					<button className="call-us">Call us</button> <Footer />
				</div>
			</body>
		</html>
	);
}
