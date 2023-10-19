"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../Main/getProducts";
import NotFound from "../NotFound";
import ButtonsProductCard from "@/app/components/ButtonsProductCard";

const Product = ({
	params,
}: {
	params: {
		slug: number;
	};
}) => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState<IProducts[]>([]);
	const [product, setProduct] = useState<IProducts>();

	useEffect(() => {
		getProducts.getLimited().then((data) => {
			setProducts(data);
			setProduct(data[params.slug - 1]);
			setLoading(false);
		});
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
			) : product !== undefined ? (
				<section className="product">
					<div className="product__container container flex md:flex-row flex-col gap-8 shadow-lg py-8 px-4">
						<div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
							<Image
								src={product.image}
								width={200}
								height={300}
								alt={product.title}
								className="shop__img md:min-w-[400px] min-w-[200px] h-auto object-contain"
							/>
						</div>
						<div className="flex flex-col justify-between items-start min-h-[100px] gap-6">
							<div className="flex flex-col justify-between items-start min-h-[100px] gap-4">
								<h3 className="shop__title text-center font-bold">
									{product.title}
								</h3>
								<div>
									<span className="font-semibold">Description:</span>
									<h4>{product.description}</h4>
								</div>
								<div>
									<span className="font-semibold">Category:</span>
									<h3 className="font-semibold">{product.category}</h3>
								</div>
							</div>
							<div className="flex max-sm:flex-col flex-row justify-between items-center w-full max-[450px]:gap-4">
								<p className="font-semibold">
									{product.price} <span>$</span>
								</p>
								<ButtonsProductCard cart wishlist buy />
							</div>
						</div>
					</div>
				</section>
			) : (
				<NotFound />
			)}
		</>
	);
};

export default Product;
