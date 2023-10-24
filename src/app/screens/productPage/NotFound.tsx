import Link from "next/link";
import React from "react";

const NotFound = (props: INotFound) => {
	const { text } = props;
	return (
		<section className="NotFound">
			<div className="not-found__container container flex flex-col justify-center items-center gap-4">
				<h2>Not Found</h2>
				<p>{text || "Product not found"}</p>
				<Link className="not-found__link underline hover:no-underline" href="/">
					Return Home
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
