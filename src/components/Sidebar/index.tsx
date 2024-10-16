import Image from "next/image";

import { jakartaSans } from "../../../lib/utils";
import { IconArrowBadgeRight, IconBox, IconCategoryFilled, IconDeviceMobileCode, IconFlame } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { sidebarAtom } from "../../../store/Atom";

export const Sidebar = () => {
	const router = useRouter();
	const [openMenu, setOpenMenu] = useState<number | null>(null);
	const [foldSidebar] = useAtom(sidebarAtom);
	useEffect(() => {
		const currentPath = router.pathname;
		const menuIndex = dataSidebar.findIndex((category) => category.detail.some((item) => item.url === currentPath));
		if (menuIndex !== -1) {
			setOpenMenu(menuIndex);
		}
	}, [router.pathname]);

	console.log(router.pathname);
	return (
		<nav className="h-screen sticky top-0 left-0 overflow-hidden  bg-zinc-950 rounded-3xl py-5 px-3">
			<div className="flex items-end justify-center gap-2 mb-8">
				<div className={`w-[4.5rem] ${foldSidebar && "w-12"}`}>
					<Image
						width={100}
						height={100}
						style={{ width: "auto", height: "auto" }}
						src={"/logo/logo.png"}
						alt="Logo Laborare Indonesia"
					/>
				</div>
				{!foldSidebar && (
					<h1
						className={`w-full tracking-wider text-lg leading-5 mb-1 font-bold ${jakartaSans.className} text-zinc-100`}
					>
						Laborare <br /> Indonesia
					</h1>
				)}
			</div>

			{dataSidebar.map((data, index) => (
				<div key={index}>
					<button
						type="submit"
						className={`w-full px-5 py-2 bg-zinc-900 rounded-xl mt-5 shadow-md shadow-zinc-800 ease-in-out transition-shadow duration-300 hover:shadow-none group ${
							openMenu === index && "shadow-none"
						}`}
						onClick={() => setOpenMenu(openMenu === index ? null : index)}
					>
						<div className="flex items-center justify-between w-full">
							{foldSidebar ? (
								<h2 className="text-center w-full flex items-center justify-center">{data.icon}</h2>
							) : (
								<>
									<h2 className="font-semibold text-sm">{data.name}</h2>
									<IconArrowBadgeRight
										size={18}
										stroke={2}
										className={`transition-transform ease-in-out duration-300 group-hover:rotate-90 ${
											openMenu === index && "rotate-90"
										}`}
									/>
								</>
							)}
						</div>
					</button>

					<ul className={`py-3 bg-zinc-950 rounded-xl ${openMenu === index ? "block" : "hidden"}`}>
						{data.detail.map((detail, index) => (
							<li key={index}>
								<Link
									href={detail.url}
									className={`border-b text-xs tracking-wider flex items-center  border-zinc-700/60 py-2 px-3 gap-2 ${
										!foldSidebar ? "justify-start" : "justify-center"
									}`}
								>
									{detail.icon}

									{!foldSidebar && <span className="font-semibold">{detail.name}</span>}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}

			<div className={`absolute bottom-5 w-full ${foldSidebar ? "hidden" : "block"}`}>
				<p className="flex items-center justify-start gap-1">
					<span className={`${jakartaSans.className}`}>&copy;</span>
					<span className="text-xs mt-0.5">2021 - {new Date().getFullYear()} | Laborare</span>
				</p>
			</div>
		</nav>
	);
};

const dataSidebar = [
	{
		name: "Layanan",
		icon: (
			<IconFlame
				size={20}
				stroke={2}
			/>
		),
		detail: [
			{
				name: "Data Layanan",
				url: "/products",
				icon: (
					<IconDeviceMobileCode
						size={20}
						stroke={2}
					/>
				),
			},
		],
	},
	{
		name: "Kategori",
		icon: (
			<IconBox
				size={20}
				stroke={2}
			/>
		),
		detail: [
			{
				name: "Data Kategori",
				url: "/categories",
				icon: (
					<IconCategoryFilled
						size={20}
						stroke={2}
					/>
				),
			},
		],
	},
];
