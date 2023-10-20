"use client";
import React, { useEffect, useState } from "react";

const MenuBurger = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="menu-burger">
			{/* TODO: add menu burger (icons with mui of fw )  */}
			{/* TODO: add cart, later functional for cart */}

			<button
				onClick={openMenu}
				className="menu-burger__button flex justify-center items-center w-[40px] h-[40px] bg-none rounded cursor-pointer outline-none"
			>
				<span
					className={`menu-burger__line w-[20px] h-[2px] bg-black rounded transition-all duration-300 ease-in-out after:w-[20px] after:h-[2px] after:bg-black after:rounded after:transition-all after:ease-in-out after:duration-300 after:content-[''] relative after:top-[6px] after:left-[0px] after:absolute before:w-[20px] before:h-[2px] before:bg-black before:rounded before:transition-all before:ease-in-out before:duration-300 before:content-[''] before:absolute before:bottom-[6px] before:left-[0px] ${
						isOpen &&
						"after:rotate-45 before:-rotate-45 after:bottom-[6px] before:top-[6px] bg-transparent"
					}`}
				></span>
			</button>
		</div>
	);
};

export default MenuBurger;
