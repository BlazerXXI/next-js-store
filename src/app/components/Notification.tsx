"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
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
	});

	return (
		<div
			className={`notification ${
				notificationText ? "block" : "hidden"
			} fixed bottom-[20px] left-1/2 -translate-x-1/2 bg-white p-4 border rounded-lg shadow-md`}
		>
			<p className={`notification__text`}>
				Ready! The goods are added to {notificationText}
			</p>
		</div>
	);
};

export default Notification;
