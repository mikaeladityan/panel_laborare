import React from "react";

type propsCard = {
	cardHeader: React.ReactNode;
	className?: string;
	children: React.ReactNode;
};

export const Card: React.FC<propsCard> = ({
	cardHeader,
	children,
	className,
}) => {
	return (
		<div
			className={`bg-zinc-950 p-5 pb-8 rounded-xl border border-zinc-800 w-full ${className}`}
		>
			<div className="flex items-center justify-between">{cardHeader}</div>

			<>{children}</>
		</div>
	);
};
