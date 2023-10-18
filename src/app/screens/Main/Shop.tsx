"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "./getProducts";
import Link from "next/link";
import Image from "next/image";

const Shop = () => {
	const [products, setProducts] = useState<IProducts[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProducts.getLimited().then((data) => {
			setProducts(data);
			setLoading(false);
		});
	});

	return (
		<section className="shop">
			<div className="shop__container container">
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
					<ul className="shop__list flex flex-wrap gap-8 justify-center">
						{products.map((product: IProducts) => (
							<li
								className="shop__item w-80 shadow-lg bg-white"
								key={product.id}
							>
								{/* TODO: fix ratio image, console retun warning */}

								<Link
									className="flex flex-col justify-between h-full items-center gap-4 p-4"
									// TODO: create link && dynamic page

									// TODO: add functional "click to preview"

									href={`/screens/productPage/${product.id}`}
									key={product.id}
								>
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

										{/* // TODO: functional add to cart */}
										{/* // TODO: functional add to wishlist */}
									</div>
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};

export default Shop;
