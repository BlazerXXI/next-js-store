import Link from "next/link";

export default function NotFound() {
	return (
		<div className="not-found">
			<div className="not-found__container container flex flex-col justify-center items-center gap-4">
				<h2>Not Found</h2>
				<p>Could not find requested resource</p>
				<Link className="not-found__link underline hover:no-underline" href="/">
					Return Home
				</Link>
			</div>
		</div>
	);
}
