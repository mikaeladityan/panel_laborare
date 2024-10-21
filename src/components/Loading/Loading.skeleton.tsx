export const LoadingSkeleton = () => {
	return (
		<div className="flex flex-col gap-3 p-5 w-full h-auto bg-zinc-900 mt-5 rounded-xl animate-pulse">
			<div className="w-full h-3 bg-zinc-700 rounded-full animate-pulse"></div>
			<div className="w-full h-3 bg-zinc-700 rounded-full animate-pulse"></div>
			<div className="w-full h-3 bg-zinc-700 rounded-full animate-pulse"></div>
			<div className="w-full h-3 bg-zinc-700 rounded-full animate-pulse"></div>
			<div className="w-full h-3 bg-zinc-700 rounded-full animate-pulse"></div>
		</div>
	);
};
