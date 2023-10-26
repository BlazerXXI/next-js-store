"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import { getProducts } from "../Main/getProducts";
import Loading from "@/app/loading";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import Link from "next/link";

const Cart = () => {
	const [cartProducts, setCartProducts] = useState<IProducts[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	useEffect(() => {
		if (state.cart.id.length === 0) {
			setIsLoading(true);
			return;
		}

		const productsInCart: IProducts[] = [];

		const loadProduct = async (id: number) => {
			try {
				const data = await getProducts.getProductById(id);
				productsInCart.push(data);

				if (productsInCart.length === state.cart.id.length) {
					setIsLoading(false);
					setCartProducts(productsInCart);
				}
			} catch (error) {
				console.error(`Error loading product with ID: ${id}`);
			}
		};

		// Загрузка продуктов для каждого ID в корзине
		state.cart.id.forEach((id) => {
			loadProduct(id);
		});
	}, [state.cart.id]);

	return !isLoading ? (
		<Loading />
	) : (
		<section className="cart">
			<div className="cart__container container min-h-screen">
				<h2 hidden>Cart</h2>
				{cartProducts.length === 0 ? (
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
						<h2 className="cart__empty font-semibold text-2xl">
							Cart is empty
						</h2>
						<Link href="/">
							<Add />
						</Link>
					</div>
				) : (
					<ul className="cart__list">
						{cartProducts.map((product: IProducts) => (
							<li key={product.id} className="cart__item">
								<Image
									src={product.image}
									width={200}
									height={200}
									alt={product.title}
								/>
								<div>
									<p>{product.id}</p>
									<h4>{product.title}</h4>
									<p>{product.price}</p>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};

export default Cart;
