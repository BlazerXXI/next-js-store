import React, { useEffect } from "react";
import {
	ShoppingCartOutlined,
	FavoriteBorderOutlined,
	LocalMallOutlined,
	Payment,
} from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { PayloadAction } from "@reduxjs/toolkit";
import { setCart } from "@/redux/features/cartSlice";
import { setWishlist } from "@/redux/features/wishlistSlice";
import { setBuy } from "@/redux/features/buySlice";

const ButtonsProductCard = (props: IButton) => {
	const { cart, wishlist, buy, buttonStyle, btnText, btnContainerStyle, id } =
		props;

	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	const addToWishlist = (id: number) => {
		dispatch(setWishlist(id));
		console.log(id);
	};
	const addToCart = (id: number) => {
		dispatch(setCart(id));
		console.log(id);
	};
	const buyNow = (id: number) => {
		dispatch(setBuy(id));
		console.log(id);
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
					onClick={() => addToWishlist(id)}
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
					onClick={() => addToCart(id)}
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
					onClick={() => buyNow(id)}
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
		</div>
	);
};

export default ButtonsProductCard;
