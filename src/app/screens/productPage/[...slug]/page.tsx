"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Product = ({
	params,
}: {
	params: {
		slug: string;
	};
}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	});

	return (
		<>
			{loading ? (
				<div className="flex flex-col justify-center items-center gap-10">
					<p className="shop__loading fw-bold text-2xl text-center">
						Loading...
					</p>
					<Image
						className="shop__loading-image animate-spin"
						src={"/spinner-solid.svg"}
						alt="Vercel Logo"
						width={72}
						height={72}
					/>
				</div>
			) : (
				<section className="product">
					<div className="product__container container">
						<h2>
							Params slug = <span>{params.slug}</span>
						</h2>
						{/* 
						<div className="flex justify-center m-auto">
							<Image
								src={product.image}
								width={200}
								height={300}
								alt={product.title}
								className="shop__img  max-w-[200px] h-auto"
							/>
						</div>
						<div className="flex flex-col justify-between items-center min-h-[100px] font-bold">
							<h3 className="shop__title text-center">{product.title}</h3>
							<small>
								{product.price} <span>$</span>
							</small>

						</div>
					*/}
						{/* // TODO: functional add to cart */}
						{/* // TODO: functional add to wishlist */}
					</div>
				</section>
			)}
		</>
	);
};

export default Product;
