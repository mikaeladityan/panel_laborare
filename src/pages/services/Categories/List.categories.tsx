import { IconChevronsRight, IconEdit, IconX } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { BACKEND } from "../../../../lib/utils";
import { LoadingSkeleton } from "@/components/Loading/Loading.skeleton";
import { alertValidation } from "../../../../store/Atom";
import { useSetAtom } from "jotai";
import { ModalDeleteCategories } from "../Modal/Delete.categories";
import { FormCategories } from "../Form/Categories.form";

export interface Categories {
	id: number;
	name: string;
}

export const ListCategories = () => {
	const [categories, setCategories] = useState<Categories[]>([]);
	const [loading, setLoading] = useState(false);
	const setAlert = useSetAtom(alertValidation);
	const [update, setUpdate] = useState(false);
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	);

	const fetchCategories = useCallback(async () => {
		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const response = await fetch(`${BACKEND}/categories`);
			const result = await response.json();

			if (result.error) {
				setAlert({ type: "error", message: "Pengambilan data kategori" });
			}

			setCategories(result.data);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			setAlert({ type: "error", message: "Terjadi Kesalahan" });
		} finally {
			setLoading(false);
		}
	}, [setAlert]);
	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);

	return (
		<>
			<FormCategories
				update={update}
				categoryId={selectedCategoryId}
				fetchCategories={fetchCategories}
				setUpdate={setUpdate}
			/>
			{loading ? (
				<LoadingSkeleton />
			) : (
				<ul className="mt-5 text-xs text-zinc-300">
					{categories &&
						categories.map((category) => (
							<li
								key={category.id}
								className="flex items-center justify-between border-b border-zinc-600 py-2"
							>
								<span className="flex items-center justify-start">
									<IconChevronsRight
										size={16}
										stroke={2}
										className="text-zinc-300"
									/>
									{category.name}
								</span>
								<div className="flex items-center justify-end gap-2">
									<Tooltip
										title="Pengaturan"
										position="top"
										trigger="mouseenter"
										size="small"
									>
										{update && selectedCategoryId === category.id ? (
											<button
												onClick={() => {
													setSelectedCategoryId(null);
													setUpdate(false);
												}}
											>
												<IconX
													className="text-red-600"
													size={12}
													stroke={2.5}
												/>
											</button>
										) : (
											<button
												onClick={() => {
													setSelectedCategoryId(category.id);
													setUpdate(true);
												}}
											>
												<IconEdit size={12} stroke={2.5} />
											</button>
										)}
									</Tooltip>
									<ModalDeleteCategories
										key={category.id}
										id={category.id}
										name={category.name}
										fetchCategories={fetchCategories}
									/>
								</div>
							</li>
						))}
				</ul>
			)}
		</>
	);
};
