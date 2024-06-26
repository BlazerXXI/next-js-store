"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Notification = () => {
	const [notificationText, setNotificationText] = useState("");

	const state = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setNotificationText(state.notification.text);

		setTimeout(() => {
			setNotificationText("");
		}, 10000);
	}, [state.notification.text]);

	return (
		<div
			className={`notification ${
				notificationText !== "" ? "bottom-[20px]" : "bottom-[-200px]"
			} fixed left-1/2 -translate-x-1/2 transition-all bg-white p-4 border rounded-lg shadow-md`}
		>
			<p className={`notification__text`}>
				Ready! The goods are added to{" "}
				<Link
					className="notification__link hover:underline transition-all active:scale-90 font-bold"
					href={`/screens/${notificationText}`}
				>
					{notificationText}
				</Link>
			</p>
		</div>
	);
};

export default Notification;
