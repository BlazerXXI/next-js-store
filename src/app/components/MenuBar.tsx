import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuBar = () => {
	return (
		<>
			<Link className="inline-block logo" href={"/"}>
				<Image src="/vercel.svg" alt="Vercel Logo	" width={72} height={16} />
			</Link>
			<div>
				{/* <nav className="flex justify-center items-center gap-5">
					<Link href={"/"}>Home</Link>
					<Link href={"/"}>All Products</Link>
				</nav> */}
			</div>
		</>
	);
};

export default MenuBar;
