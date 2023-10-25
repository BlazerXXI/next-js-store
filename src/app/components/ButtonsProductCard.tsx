import React from "react";
import {
	ShoppingCartOutlined,
	FavoriteBorderOutlined,
	LocalMallOutlined,
	Payment,
} from "@mui/icons-material";

const ButtonsProductCard = (props: IButton) => {
	const { cart, wishlist, buy, buttonStyle, btnText, btnContainerStyle } =
		props;

	return (
		<div
			className={`flex gap-4 max-[450px]:flex-col max-[450px]:items-center max-[450px]:justify-center max-[450px]:w-full ${btnContainerStyle} `}
		>
			{/* // TODO: functional add to cart */}
			{/* // TODO: functional add to wishlist */}
			{/* // TODO: functional Buy now */}
			{wishlist && (
				<button
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
