import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const banners = ["./img/banner.svg", "./vercel.svg"];

let bannerUrl = banners[0];

const bannerNext = () => {
	bannerUrl = banners[banners.indexOf(bannerUrl) + 1];
	bannerUrl == undefined ? (bannerUrl = banners[0]) : bannerUrl;
};

const Banner = () => {
	return (
		<div className="banner  px-4 my-8 max-h-[100px] h-[100px] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.1)] before:-z-10">
			<button className="absolute top-1/2 translate-y-[-50%] left-[-24px] hover:translate-x-[-5px] duration-300 transition-all active:scale-75">
				<ArrowLeft />
			</button>
			<Link
				className="banner__link flex justify-center items-center h-full"
				href={"/"}
			>
				<Image
					src={bannerUrl}
					alt={`banner ${bannerUrl}`}
					width={100}
					height={100}
				/>
			</Link>
			<button
				onClick={bannerNext}
				className="absolute top-1/2 translate-y-[-50%] right-[-24px] hover:translate-x-[5px] duration-300 transition-all active:scale-75"
			>
				<ArrowRight />
			</button>
		</div>
	);
};

export default Banner;
