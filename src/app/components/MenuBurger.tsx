"use client";
import React, { useEffect } from "react";

const MenuBurger = (props: IMenuBurger) => {
	const { classNames } = props;
	const toggleMenu = () => {
		const body = document.querySelector("body");
		const menuBurgerLine = document.querySelector(".menu-burger__line");
		body?.classList.toggle("open-menu");
		menuBurgerLine?.classList.toggle("open-menu-burger");
	};

	useEffect(() => {
		const body = document.querySelector("body");
		const menuBurgerLine = document.querySelector(".menu-burger__line");
		const menuBurgerBtn = document.querySelector(".menu-burger__button");
		const menuBurgerMenu = document.querySelector(".menu-burger__menu");
		document.addEventListener("click", (e) => {
			const target = e.target;
			if (
				body?.classList.contains("open-menu") &&
				target !== menuBurgerBtn &&
				target !== menuBurgerLine &&
				target !== menuBurgerMenu
			) {
				body?.classList.remove("open-menu");
				menuBurgerLine?.classList.remove("open-menu-burger");
			}
		});
	}, []);

	return (
		<div className={`menu-burger z-10 ${classNames}`}>
			{/* TODO: add menu burger (icons with mui of fw )  */}
			{/* TODO: add cart, later functional for cart */}

			<button
				onClick={toggleMenu}
				className="menu-burger__button flex justify-center items-center w-[40px] h-[40px] bg-none rounded cursor-pointer outline-none"
			>
				<span
					className={`menu-burger__line w-[20px] h-[2px] bg-black rounded transition-all duration-300 ease-in-out after:w-[20px] after:h-[2px] after:bg-black after:rounded after:transition-all after:ease-in-out after:duration-300 after:content-[''] relative after:left-[0px] after:absolute before:w-[20px] before:h-[2px] before:bg-black before:rounded before:transition-all before:ease-in-out before:duration-300 before:content-[''] before:absolute before:top-[6px] after:bottom-[6px] before:left-[0px]`}
				></span>
			</button>
		</div>
	);
};

export default MenuBurger;
