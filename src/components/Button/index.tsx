import Link from "next/link";
import React from "react";

type PropsButton = {
	url: string;
	title: string;
	icon?: React.ReactNode | undefined;
};

export const Button: React.FC<PropsButton> = ({
	url = "/",
	title = "Create",
	icon,
}) => {
	return (
		<Link
			href={url}
			className="px-3 py-2 ms-3 border border-zinc-700 rounded-lg bg-black hover:scale-90 shadow-inner shadow-zinc-600 duration-300 ease-in-out transition-all hover:shadow-zinc-900"
		>
			<span className="flex items-center justify-center gap-1 text-xs font-bold">
				{icon} {title}
			</span>
		</Link>
	);
};
