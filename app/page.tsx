import Image from "next/image";
import Link from "next/link";
import { LINKS } from "../constants/links";

export default function Home() {
	return (
		<main className="flex flex-col justify-center w-screen mb-12">
			<figure className="relative w-40 h-40 mx-auto mt-8 overflow-hidden border-4 rounded-full border-amber-600">
				<Image
					src={
						"https://v3.jkdelara.com/_next/image?url=%2Ffeature.png&w=640&q=75"
					}
					fill
					alt="me"
				/>
			</figure>
			<h1 className="my-8 text-3xl font-bold text-center">
				<Link href="http://jkbro.dev">jkbro.dev</Link>
			</h1>
			<section
				id="links"
				className="flex flex-col justify-center w-full gap-3 mx-auto md:w-1/2"
			>
				{LINKS.map((link) => (
					<Link
						href={link.url}
						key={link.name}
						className="mx-2 p-4 font-bold text-center no-underline transition-all rounded-full outline outline-amber-800/60 bg-amber-600 hover:bg-amber-500 hover:scale-[101%]"
					>
						{link.name}
					</Link>
				))}
			</section>
		</main>
	);
}
