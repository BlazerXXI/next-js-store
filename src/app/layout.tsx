import "./globals.scss";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";
import Popup from "./components/Popup";
import { ReduxProvider } from "@/redux/provider";
import Notification from "./components/Notification";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Next Store",
	description: "Next Store",
};

// import favicon icon
<link rel="icon" href="/public/favicon.svg" sizes="any" />;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<ReduxProvider>
					<div className="wrapper">
						<Header />
						<main>{children}</main>
						<Notification />
						<Popup />
						<Footer />
					</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
