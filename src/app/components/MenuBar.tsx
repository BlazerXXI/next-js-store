import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuBar = () => {
	return (
		<>
			<Link className="inline-block logo" href={"/"}>
				<Image src="/vercel.svg" alt="Vercel Logo	" width={72} height={16} />
			</Link>
		</>
	);
};

export default MenuBar;
