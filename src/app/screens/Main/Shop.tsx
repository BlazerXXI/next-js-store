"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "./getProducts";
import Link from "next/link";
import Image from "next/image";
import ButtonsProductCard from "@/app/components/ButtonsProductCard";
import { Menu } from "@mui/base";
import Dropdown from "@mui/joy/Dropdown";
import { MenuButton } from "@mui/joy";
import Loading from "@/app/loading";
import ProductItem from "@/app/components/ProductItem";

const Shop = () => {
	const [products, setProducts] = useState<IProducts[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getProducts.getAll().then((data) => {
			setIsLoading(true);
			setProducts(data);
		});
	});

	return (
		<section className="shop">
			{!isLoading ? (
				<Loading />
			) : (
				<div className="shop__container container">
					<ul className="shop__list flex flex-wrap gap-8 justify-center">
						{products.map((product: IProducts) => (
							<li
								className="shop__item w-80 shadow-lg bg-white h-auto p-4 flex flex-col gap-4 items-center justify-between rounded	"
								key={product.id}
							>
								<ProductItem {...product} cart wishlist buy />
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
};

export default Shop;
