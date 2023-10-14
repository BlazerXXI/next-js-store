"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import {
	Dropdown,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	Avatar,
} from "@mui/joy/";
import { MoreVert } from "@mui/icons-material/";


const MenuBurger = () => {
	return (
		<div>
			<div className="flex justify-center items-center gap-6">
				<Link
					className="hover:opacity-80 transition-all active:scale-90"
					href={"#"}
				>
					<Avatar />
				</Link>
				<Dropdown>
					<MenuButton
						slots={{ root: IconButton }}
						slotProps={{ root: { variant: "outlined", color: "neutral" } }}
					>
						<MoreVert />
					</MenuButton>
					<Menu className="w-48">
						<MenuItem>Profile</MenuItem>
						<MenuItem>Cart</MenuItem>
						<MenuItem>Logout</MenuItem>
					</Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default MenuBurger;
