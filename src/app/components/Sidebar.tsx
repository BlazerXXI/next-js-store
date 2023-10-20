"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sidebar = (props: ISidebar) => {
	const { propStyles } = props;

	useEffect(() => {
		const body = document.querySelector("body");
		const sidebarLinks = document.querySelectorAll(".sidebar__link");

		const toggleMenu = () => {
			body?.classList.toggle("open-menu");
		};

		sidebarLinks.forEach((link) => {
			const clickHandler = () => {
				toggleMenu();
			};

			link.addEventListener("click", clickHandler);

			return () => {
				link.removeEventListener("click", clickHandler);
			};
		});
	}, []);

	return (
		<div
			className={`menu-burger__menu translate-x-full bg-[rgb(255,255,255,0.9)] absolute right-0 top-0 md:w-[40vw] w-screen h-screen rounded z-[9] py-8 pt-16 px-5 shadow-lg ${propStyles} }`}
		>
			{/* TODO: add menu items */}
			<ul className="flex flex-col gap-4 justify-center md:items-start items-center text-[20px] max-md:h-full">
				<li>
					<Link className="sidebar__link" rel="stylesheet" href="./">
						Home
					</Link>
				</li>
				<li>
					<Link className="sidebar__link" rel="stylesheet" href="#">
						Cart
					</Link>
				</li>
				<li>
					<Link className="sidebar__link" rel="stylesheet" href="#">
						Wishlist
					</Link>
				</li>
				<li>
					<Link
						className="sidebar__link"
						rel="stylesheet"
						href="/screens/account"
					>
						Account
					</Link>
				</li>
				<li>
					<Link className="sidebar__link" rel="stylesheet" href="#">
						Help
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
