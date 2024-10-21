import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

import { sidebarAtom } from "../../../store/Atom";
import { useAtom } from "jotai";
import { NavbarMenu } from "./Menu";

export const Navbar = () => {
	const [buttonFold, setButtonFold] = useAtom<boolean>(sidebarAtom);

	const onClickButtonFold = () => {
		setButtonFold((sidebarAtom) => !sidebarAtom);
	};

	return (
		<nav className="relative max-w-full h-auto mx-auto px-8 py-5 bg-zinc-950 rounded-xl border border-zinc-800">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center justify-start gap-5">
					<button
						onClick={onClickButtonFold}
						className={`flex items-center justify-center w-8 h-8  border-zinc-300 bg-zinc-950 shadow shadow-zinc-700 rounded-full border-2 transition-transform ease-in-out duration-300 hover:scale-110`}
					>
						{!buttonFold ? (
							<IconChevronsRight
								size={18}
								stroke={2}
								className="text-zinc-300"
							/>
						) : (
							<IconChevronsLeft
								size={18}
								stroke={2}
								className="text-zinc-300"
							/>
						)}
					</button>
				</div>
				<NavbarMenu />
			</div>
		</nav>
	);
};
