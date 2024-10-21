import { IconBellFilled, IconMessageFilled } from "@tabler/icons-react";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

export const NavbarMenu = () => {
	return (
		<div className="flex items-center justify-end gap-4">
			<Tooltip
				title="Notifikasi"
				position="left"
				trigger="mouseenter"
				size="small"
			>
				<button type="button" className="relative mt-1">
					<IconBellFilled size={18} className="text-zinc-300" />
					<div className="w-1.5 h-1.5 rounded-full bg-red-600 absolute top-0 right-0"></div>
				</button>
			</Tooltip>

			<Tooltip title="Pesan" position="left" trigger="mouseenter" size="small">
				<button type="button" className="relative mt-1">
					<IconMessageFilled size={18} className="text-zinc-300" />
					<div className="w-1.5 h-1.5 rounded-full bg-red-600 absolute top-0 right-0"></div>
				</button>
			</Tooltip>

			<button className="px-3 py-2 ms-3 border border-zinc-700 rounded-lg bg-black hover:scale-90 shadow-inner shadow-zinc-600 duration-300 ease-in-out transition-all hover:shadow-zinc-900">
				<p className="text-xs text-zinc-300">Hy! Mikael</p>
			</button>
		</div>
	);
};
