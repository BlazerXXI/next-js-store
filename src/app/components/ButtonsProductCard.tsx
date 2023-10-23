import React from "react";
import {
	ShoppingCartOutlined,
	FavoriteBorderOutlined,
	LocalMallOutlined,
} from "@mui/icons-material";

const ButtonsProductCard = (props: IButton) => {
	const { cart, wishlist, buy, buttonStyle } = props;

	return (
		<div className="flex gap-4 max-[450px]:flex-col max-[450px]:items-center max-[450px]:justify-center max-[450px]:w-full">
			{/* // TODO: functional add to cart */}
			{/* // TODO: functional add to wishlist */}
			{/* // TODO: functional Buy now */}
			{cart && (
				<button
					className={`max-[450px]:w-full bg-white border px-4 py-2 rounded font-semibold hover:scale-105 transition-all duration-300 hover:shadow active:scale-95 flex items-center justify-center gap-3 ${
						buttonStyle !== undefined ? buttonStyle : ""
					}`}
				>
					<span>Add to cart</span>
					{/* add icons */}
					<ShoppingCartOutlined />
				</button>
			)}
			{wishlist && (
				<button
					className={`max-[450px]:w-full bg-white border px-4 py-2 rounded font-semibold hover:scale-105 transition-all duration-300 hover:shadow active:scale-95 flex items-center justify-center gap-3 ${
						buttonStyle !== undefined ? buttonStyle : ""
					}`}
				>
					Add to wishlist
					{/* add icons */}
					<FavoriteBorderOutlined />
				</button>
			)}
			{buy && (
				<button
					className={`max-[450px]:w-full bg-white border px-4 py-2 rounded font-semibold hover:scale-105 transition-all duration-300 hover:shadow active:scale-95 flex items-center justify-center gap-3 ${
						buttonStyle !== undefined ? buttonStyle : ""
					}`}
				>
					Buy now
					{/* add icons */}
					<LocalMallOutlined />
				</button>
			)}
		</div>
	);
};

export default ButtonsProductCard;
