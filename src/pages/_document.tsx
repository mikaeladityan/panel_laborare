import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html
			lang="en"
			className="scroll-smooth overflow-x-hidden"
		>
			<Head />
			<body className="antialiased bg-black text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
