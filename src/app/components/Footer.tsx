import React from "react";
import MenuBar from "./MenuBar";

const Footer = () => {
	return (
		<footer>
			<div className="footer__container container flex justify-between items-center min-h-[70px]">
				<MenuBar />
				{/* TODO: add footer information */}
			</div>
		</footer>
	);
};

export default Footer;
