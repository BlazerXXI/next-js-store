import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuBurger from "./MenuBurger";
import MenuBar from "./MenuBar";
import { Avatar } from "@mui/joy";
import Sidebar from "./Sidebar";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
	return (
		<header className="header fixed min-h-[60px] w-full border-b-[3px] bg-white bg-opacity-75 filter backdrop-blur-sm	z-50 border-neutral-50 flex flex-col justify-center items-center">
			<div className="header__container container">
				<div className="flex justify-between items-center">
					<MenuBar />
					<div className="flex gap-4">
						<NavigationMenu
							classNames="max-md:hidden"
							flexDirection="flex-row"
						/>
						<Link
							className="hover:opacity-80 transition-all active:scale-90"
							href={"/screens/account"}
						>
							{/* TODO+: add avatar icon */}
							{/* TODO: add account page */}
							<Avatar />
						</Link>
						<MenuBurger classNames="md:hidden" />
					</div>
				</div>
			</div>
			<Sidebar />
		</header>
	);
};

export default Header;
