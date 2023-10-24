"use client";
import React, { useState, useEffect } from "react";

const Popup = () => {
	const [popup, setPopup] = useState(false);
	const [headerHeight, setHeaderHeight] = useState("");

	const openPopup = () => {
		setPopup(!popup);
	};

	useEffect(() => {
		const header = document.querySelector("header");

		setHeaderHeight(header.innerHeight);
	});

	return (
		<>
			<div
				className={`${
					popup ? "flex" : "hidden"
				} fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 bg-white shadow-lg rounded p-4 md:first-letter:h-[400px] md:w-[400px] w-screen h-screen
				mt-[${headerHeight}]`}
			>
				<h3>popup</h3>
			</div>
			<button onClick={openPopup} className="call-us">
				Call us
			</button>
		</>
	);
};

export default Popup;
