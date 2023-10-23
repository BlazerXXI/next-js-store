"use client";
import React, { useState } from "react";

const Popup = () => {
	const [popup, setPopup] = useState(false);

	const openPopup = () => {
		setPopup(!popup);
	};
	return (
		<>
			<div
				className={`${
					popup ? "flex" : "hidden"
				} fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 bg-white shadow-lg rounded p-4 w-[400px] h-[300px]`}
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
