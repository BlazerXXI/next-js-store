import Link from "next/link";
import React from "react";

const NavigationMenu = (props: INavigationMenu) => {
	const { classNames, flexDirection } = props;
	return (
		<nav className={`navigationMenu ${classNames}`}>
			<ul className={`flex gap-4 justify-center md:items-start items-center text-[20px] max-md:h-full ${flexDirection}`}>
				<li>
					<Link className="sidebar__link" rel="stylesheet" href="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="sidebar__link" rel="stylesheet" href="/screens/cart">
						Cart
					</Link>
				</li>
				<li>
					<Link
						className="sidebar__link"
						rel="stylesheet"
						href="/screens/wishlist"
					>
						Wishlist
					</Link>
				</li>
				<li>
					<Link
						className="sidebar__link"
						rel="stylesheet"
						href="/screens/account"
					>
						Account
					</Link>
				</li>
				<li>
					<Link className="sidebar__link" rel="stylesheet" href="/screens/help">
						Help
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationMenu;
