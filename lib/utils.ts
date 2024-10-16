import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";

export const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const jakartaSans = Plus_Jakarta_Sans({ display: "swap", subsets: ["latin"] });
