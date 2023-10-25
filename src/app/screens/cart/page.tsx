"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import { getProducts } from "../Main/getProducts";
import Loading from "@/app/loading";
import Image from "next/image";
import Product from "../productPage/[...slug]/page";
import { Add } from "@mui/icons-material";
import Link from "next/link";

// ...

const Cart = () => {
	const [cartProducts, setCartProducts] = useState<IProducts[]>([]); // Список продуктов в корзине
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	useEffect(() => {
		const productsInCart: IProducts[] = [];

		for (let i = 0; i < state.cart.id.length; i++) {
			const id = state.cart.id[i];

			getProducts.getAll().then((data) => {
				productsInCart.push(data[id]);

				if (productsInCart.length === state.cart.id.length) {
					setIsLoading(true);
					setCartProducts(productsInCart);
				}
			});
		}
		setTimeout(() => {
			setIsLoading(true);
		}, 1000);
	}, []);

	return !isLoading ? (
		<Loading />
	) : (
		<section className="cart">
			<div className="cart__container container min-h-screen">
				<h2 hidden>Cart</h2>
				{cartProducts.length === 0 ? (
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
						<h2 className="cart__empty  font-semibold text-2xl">
							Cart is empty
						</h2>
						<Link href="/">
							<Add />
						</Link>
					</div>
				) : (
					<div className="cart__list">
						{cartProducts.map((product: IProducts) => (
							<Product key={product.id} params={{ slug: product.id }} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Cart;
