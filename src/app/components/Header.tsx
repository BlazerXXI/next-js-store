import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuBurger from "./MenuBurger";
import MenuBar from "./MenuBar";

const Header = () => {
	return (
		<header className="header min-h-[60px] border-b-[3px] border-neutral-50 flex flex-col justify-center items-center">
			<div className="header__container container">
				<div className="flex justify-between items-center">
					<MenuBar />
					<MenuBurger />
				</div>
			</div>
		</header>
	);
};

export default Header;
