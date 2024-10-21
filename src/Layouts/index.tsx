import Head from "next/head";
import React from "react";

import { Sidebar } from "../components/Sidebar";
import { geistMono, jakartaSans } from "../../lib/utils";
import { Navbar } from "../components/Navbar";
import { useAtom } from "jotai";
import { alertValidation, sidebarAtom } from "../../store/Atom";
import { Breadcrumb } from "../components/Fragments/Breadcrumb";

import { AlertShow } from "@/components/Alert/Alert.validation";

export const Layouts = ({ children }: { children: React.ReactNode }) => {
	const [foldSidebar] = useAtom(sidebarAtom);
	const [error] = useAtom(alertValidation);

	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					href="/favicon/favicon.ico"
					type="image/x-icon"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest"></link>

				<title>Dashboard Laborare Indonesia</title>
			</Head>

			<div className={`${geistMono.className} flex p-5 gap-5`}>
				{/* Error Validation */}
				{error && <AlertShow />}
				{/* Sidebar */}
				<div className={`flex-shrink-0 ${foldSidebar ? "w-24" : "w-72"}`}>
					<Sidebar />
				</div>
				<div className="flex-grow overflow-y-auto overflow-x-hidden w-full">
					<Navbar />
					<Breadcrumb />
					<>{children}</>
					<p className="flex mt-3 items-center justify-start ms-5 gap-1 text-zinc-300">
						<span className={`${jakartaSans.className}`}>&copy;</span>
						<span className="text-xs mt-0.5">
							2021 - {new Date().getFullYear()} Laborare
						</span>
					</p>
				</div>
			</div>
		</>
	);
};
