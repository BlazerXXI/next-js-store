import React from "react";

const ButtonsProductCard = (props: IButton) => {
	const { cart, wishlist, buy } = props;

	return (
		<div className="flex gap-4 max-[450px]:flex-col max-[450px]:items-center max-[450px]:justify-center max-[450px]:w-full">
			{/* // TODO: functional add to cart */}
			{/* // TODO: functional add to wishlist */}
			{/* // TODO: functional Buy now */}
			{cart && (
				<button
					className="max-[450px]:w-full bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 active:bg-red-500 transition-all duration-300 hover:shadow active:scale-95
									"
				>
					Add to cart
				</button>
			)}
			{wishlist && (
				<button className="max-[450px]:w-full bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 active:bg-blue-500 transition-all duration-300 hover:shadow active:scale-95">
					Add to wishlist
				</button>
			)}
			{buy && (
				<button className="max-[450px]:w-full bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 active:bg-green-500 transition-all duration-300 hover:shadow active:scale-95">
					Buy now
				</button>
			)}
		</div>
	);
};

export default ButtonsProductCard;
