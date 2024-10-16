import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

import { sidebarAtom } from "../../../store/Atom";
import { useAtom } from "jotai";

export const Navbar = () => {
	const [buttonFold, setButtonFold] = useAtom<boolean>(sidebarAtom);

	const onClickButtonFold = () => {
		setButtonFold((sidebarAtom) => !sidebarAtom);
	};

	return (
		<nav className="relative max-w-full mx-auto p-5 bg-zinc-950 rounded-3xl">
			<div className="flex items-center justify-between w-full">
				<button
					onClick={onClickButtonFold}
					className="flex items-center justify-center w-8 h-8 border-zinc-100 bg-zinc-950 shadow shadow-zinc-700 rounded-full border-2"
				>
					{buttonFold ? (
						<IconChevronsRight
							size={18}
							stroke={2}
							className="text-zinc-100"
						/>
					) : (
						<IconChevronsLeft
							size={18}
							stroke={2}
							className="text-zinc-100"
						/>
					)}
				</button>
			</div>
		</nav>
	);
};
