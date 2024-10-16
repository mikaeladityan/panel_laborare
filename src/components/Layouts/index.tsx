import Head from "next/head";
import React from "react";

import { Sidebar } from "../Sidebar";
import { geistMono } from "../../../lib/utils";
import { Navbar } from "../Navbar";
import { useAtom } from "jotai";
import { sidebarAtom } from "../../../store/Atom";
import { Breadcrumb } from "../Fragments/Breadcrumb";

export const Layouts = ({ children }: { children: React.ReactNode }) => {
	const [foldSidebar] = useAtom(sidebarAtom);
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
				<link
					rel="manifest"
					href="/favicon/site.webmanifest"
				></link>

				<title>Dashboard Laborare Indonesia</title>
			</Head>

			<div className={`${geistMono.className} flex p-5  gap-5`}>
				<div className={`w-56 flex-shrink-0 ${foldSidebar && "w-24"}`}>
					<Sidebar />
				</div>
				<div className="flex-grow overflow-y-auto overflow-x-hidden">
					<Navbar />

					<Breadcrumb />

					<div className="bg-zinc-950 rounded-3xl p-5 mt-1">{children}</div>
				</div>
			</div>
		</>
	);
};
