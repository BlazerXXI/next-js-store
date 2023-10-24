"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Popup = () => {
	const [popup, setPopup] = useState(false);

	const openPopup = () => {
		setPopup(!popup);

		const body = document.querySelector("body");
		body?.classList.toggle("overflow-hidden");
	};

	return (
		<>
			<i
				className={`${
					popup ? "flex" : "hidden"
				} call-us__bg fixed top-[60px] right-0 z-[7] cursor-pointer flex justify-center items-center w-screen h-screen bg-black opacity-50 `}
				onClick={openPopup}
			></i>
			<div
				className={`${
					popup ? "flex" : "hidden"
				} justify-center text-2xl flex-col gap-4 items-center fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[9] bg-white shadow-lg rounded p-[30px] md:h-[400px] md:w-[400px] w-screen h-screen max-md:mt-[60px]`}
			>
				<CloseIcon
					className="cursor-pointer absolute top-[30px] right-[30px]"
					onClick={openPopup}
				/>
				<h3 className="font-bold">Call us</h3>
				<a className="underline" href="tel:1234567890">
					+1234567890
				</a>
				<i className="font-bold">We will call back!</i>
			</div>
			<button onClick={openPopup} className="call-us z-[8]">
				Call us
			</button>
		</>
	);
};

export default Popup;
