import React, { useState } from "react";
import {
	ShoppingCartOutlined,
	FavoriteBorderOutlined,
	LocalMallOutlined,
	Payment,
	Delete,
} from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setCart } from "@/redux/features/cartSlice";
import { setWishlist } from "@/redux/features/wishlistSlice";
import { setBuy } from "@/redux/features/buySlice";
import { setNotification } from "@/redux/features/notificationSlice";
import { setDelete } from "@/redux/features/deleteSlice";

const ButtonsProductCard = (props: IButton) => {
	const {
		cart,
		wishlist,
		buy,
		deleteBtn,
		buttonStyle,
		btnText,
		btnContainerStyle,
		id,
	} = props;

	const [notificationText, setNotificationText] = useState("");

	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	const addToList = (id: number, text: string) => {
		switch (text) {
			case "wishlist":
				dispatch(setWishlist(id));
				break;
			case "cart":
				dispatch(setCart(id));
				break;
			case "buy":
				dispatch(setBuy(id));
				break;
			default:
				break;
		}

		dispatch(setNotification(text));
		console.log(id);
	};

	const deleteFromList = (id: number, text: string) => {
		dispatch(setDelete(id));

		dispatch(setNotification(text));
	};

	return (
		<div
			className={`flex gap-4 max-[450px]:flex-col max-[450px]:items-center max-[450px]:justify-center max-[450px]:w-full ${btnContainerStyle} `}
		>
			{/* // TODO: functional add to cart */}
			{/* // TODO: functional add to wishlist */}
			{/* // TODO: functional Buy now */}
			{wishlist && (
				<button
					onClick={() => addToList(id, "wishlist")}
					className={`max-[450px]:w-full bg-white border px-4 py-2 rounded font-semibold hover:scale-105 transition-all duration-300 hover:shadow active:scale-95 flex items-center justify-center gap-3 ${
						buttonStyle !== undefined ? buttonStyle : ""
					}`}
				>
					<span className={` ${btnText ? "block" : "hidden"}`}>
						Add to wishlist
					</span>
					{/* add icons */}
					<FavoriteBorderOutlined />
				</button>
			)}
			{cart && (
				<button
					onClick={() => addToList(id, "cart")}
					className={`max-[450px]:w-full bg-white border px-4 py-2 rounded font-semibold hover:scale-105 transition-all duration-300 hover:shadow active:scale-95 flex items-center justify-center gap-3 ${
						buttonStyle !== undefined ? buttonStyle : ""
					}`}
				>
					<span className={` ${btnText ? "block" : "hidden"}`}>
						Add to cart
					</span>
					{/* add icons */}
					<ShoppingCartOutlined />
				</button>
			)}

			{buy && (
				<button
					onClick={() => addToList(id, "buy")}
					className={`max-[450px]:w-full bg-white border px-4 py-2 rounded font-semibold hover:scale-105 transition-all duration-300 hover:shadow active:scale-95 flex items-center justify-center gap-3 ${
						buttonStyle !== undefined ? buttonStyle : ""
					}`}
				>
					<span className={` ${btnText ? "block" : "hidden"}`}>Buy now</span>
					{/* add icons */}
					<Payment />
					{/* Pay */}
				</button>
			)}

			{deleteBtn && (
				<button
					onClick={() => deleteFromList(id, "Removed")}
					className={`max-[450px]:w-full bg-white border px-4 py-2 rounded font-semibold hover:scale-105 transition-all duration-300 hover:shadow active:scale-95 flex items-center justify-center gap-3 ${
						buttonStyle !== undefined ? buttonStyle : ""
					}`}
				>
					<span className={` ${btnText ? "block" : "hidden"}`}>Delete</span>
					{/* add icons */}
					<Delete />
					{/* Pay */}
				</button>
			)}
		</div>
	);
};

export default ButtonsProductCard;
