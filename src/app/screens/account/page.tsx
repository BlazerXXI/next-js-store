"use client";
import { Avatar } from "@mui/joy";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Account = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
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
						priority
						src={"/spinner-solid.svg"}
						alt="Vercel Logo"
						width={72}
						height={72}
					/>
				</div>
			) : (
				<section className="account">
					<div className="account__container container">
						<div>
							<Avatar />
							<p>Account Name</p>
							<p>Account Email</p>
							<i>Account status</i>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Account;
