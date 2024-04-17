import { Dropdown, Menu, MenuButton } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonsProductCard from "./ButtonsProductCard";

const ProductItem = (props: IproductItem) => {
	const { id, image, title, price, cart, wishlist, buy, deleteBtn } = props;

	return (
		<>
			{/* TODO: fix ratio image, console retun warning */}
			<Link
				className="flex flex-col justify-between  items-center gap-4 h-full"
				href={`/screens/productPage/${id}`}
				key={id}
			>
				<div className="flex justify-center m-auto">
					<Image
						src={image}
						width={200}
						height={300}
						alt={title}
						className="shop__img  max-w-[200px] h-auto"
					/>
				</div>
				<div className="flex flex-col justify-between gap-4 items-center min-h-[100px] mb-5 font-bold">
					<h3 className="shop__title text-center ">{title}</h3>
					<small>
						{price} <span>$</span>
					</small>
					{/* // TODO: functional add to cart */}
					{/* // TODO: functional add to wishlist */}
				</div>
			</Link>
			{/* TODO: add select button to buy */}
			{deleteBtn && (
				<ButtonsProductCard
					deleteBtn={deleteBtn}
					id={id}
					btnContainerStyle="shop__btnContainer px-4 py-2 justify-end"
				/>
			)}
			{!deleteBtn && (
				<Dropdown>
					<MenuButton>
						<svg
							width="23px"
							height="21px"
							viewBox="0 0 23 21"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>ICON-cart</title>
							<g
								id="0808-Business card"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="BTN/Purchase"
									transform="translate(-13.000000, -14.000000)"
									fillRule="nonzero"
								>
									<g
										id="ICON-basket"
										transform="translate(12.000000, 12.000000)"
									>
										<rect
											id="rectangle"
											fill="#000000"
											opacity="0"
											x="0"
											y="0"
											width="24"
											height="24"
										></rect>
										<path
											d="M7.0774212,18.9926395 C8.08766056,18.9926395 8.90662138,19.8116004 8.90662138,20.8218397 C8.90662138,21.8320791 8.08766056,22.6510399 7.0774212,22.6510399 C6.06718183,22.6510399 5.24822102,21.8320791 5.24822102,20.8218397 C5.24822102,19.8116004 6.06718183,18.9926395 7.0774212,18.9926395 Z M18.0726417,18.9926395 C19.082881,18.9926395 19.9018419,19.8116004 19.9018419,20.8218397 C19.9018419,21.8320791 19.082881,22.6510399 18.0726417,22.6510399 C17.0624023,22.6510399 16.2434415,21.8320791 16.2434415,20.8218397 C16.2434415,19.8116004 17.0624023,18.9926395 18.0726417,18.9926395 Z M1.17443267,2.49165197 C1.49906021,1.99148218 2.16773114,1.8495568 2.66767719,2.17451017 C3.64733797,2.81110008 4.3148453,3.82968869 4.50990294,4.9990376 L5.58968896,14.4573156 C5.65712883,15.0480484 6.15706794,15.4941603 6.75163783,15.4941603 L18.4694998,15.4941603 C19.0426792,15.4941603 19.5313891,15.0787511 19.6237222,14.5130576 L21.0652746,5.68116489 C21.1556925,5.12720531 21.6680507,4.74396606 22.2249912,4.81370734 C22.7263385,4.87648711 23.1001491,5.30310927 23.0992012,5.82942993 L23.0886183,5.95611179 L21.6982271,15.0573509 C21.4655833,16.5223425 20.2213553,17.6131451 18.7344285,17.6521812 L18.6576374,17.6532141 L6.54340335,17.6532141 C5.01073757,17.6532141 3.71149494,16.5257607 3.49485093,15.0033518 L3.48515488,14.9266622 L2.39237826,5.43927195 C2.32653231,4.86738366 2.01850839,4.3512228 1.55178243,4.02538491 L1.49121273,3.98481305 C0.991439345,3.65984946 0.849674211,2.99129799 1.17443267,2.49165197 Z M12.8245656,2.42485311 C13.380613,2.42485311 13.8456887,2.84726083 13.9002042,3.4163949 L13.9040917,3.50437917 L13.9038771,6.42252957 L16.8229909,6.42311514 C17.3628324,6.42338244 17.8133858,6.82083771 17.8903976,7.34444043 L17.9007352,7.45076264 C17.9284077,8.02592825 17.4997692,8.52156459 16.9108119,8.5782797 L16.8228276,8.58216722 L13.9038771,8.5814105 L13.9040917,11.5010665 C13.9038244,12.0409079 13.5063691,12.4914613 12.9827664,12.5684731 L12.8764442,12.5788107 C12.3012786,12.6064833 11.8056422,12.1778448 11.7489271,11.5888874 L11.7450396,11.5009031 L11.7449961,8.5814105 L8.82614033,8.58216718 C8.28629891,8.58189989 7.83574552,8.18444461 7.75873365,7.66084189 L7.74839606,7.55451968 C7.72072354,6.97935407 8.14936205,6.48371773 8.73831938,6.42700262 L8.82630365,6.4231151 L11.7449961,6.42252957 L11.7450396,3.50437917 C11.7450396,2.94543625 12.1698328,2.48570911 12.7141904,2.43042658 L12.8245656,2.42485311 Z"
											id="Form combination"
											fill="currentColor"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</MenuButton>
					<Menu>
						<ButtonsProductCard
							btnContainerStyle="shop__btnContainer px-4 py-2"
							cart={cart}
							wishlist={wishlist}
							buy={buy}
							id={id}
						/>
					</Menu>
				</Dropdown>
			)}
		</>
	);
};

export default ProductItem;
