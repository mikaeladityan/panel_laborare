import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layouts } from "../Layouts";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layouts>
			<Component {...pageProps} />
		</Layouts>
	);
}
