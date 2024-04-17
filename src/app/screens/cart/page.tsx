"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import { getProducts } from "../Main/getProducts";
import Loading from "@/app/loading";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import Link from "next/link";
import ProductItem from "@/app/components/ProductItem";

const Cart = () => {
	const [cartProducts, setCartProducts] = useState<IProducts[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	useEffect(() => {
		const productsInCart: IProducts[] = [];

		productsInCart && setIsLoading(false);
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

		state.cart.id.forEach((id) => {
			loadProduct(id);
		});
	}, []);

	console.log(state.cart.id);
	console.log(cartProducts);

	return isLoading ? (
		<Loading />
	) : (
		<section className="cart">
			<div className="cart__container container min-h-screen">
				<h2 className="cart__title text-[27px] py-5 text-center border-b border-black">
					Cart
				</h2>
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
					<ul className="cart__list mt-5">
						{cartProducts.map((product: IProducts) => (
							<li key={product.image + product.id} className="cart__item">
								<ProductItem {...product} deleteBtn />
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};

export default Cart;
