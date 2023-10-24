import Image from "next/image";

const Loading = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<p className="shop__loading fw-bold text-2xl text-center">Loading...</p>
			<Image
				className="shop__loading-image animate-spin"
				priority
				src={"/spinner-solid.svg"}
				alt="Vercel Logo"
				width={72}
				height={72}
			/>
		</div>
	);
};

export default Loading;
