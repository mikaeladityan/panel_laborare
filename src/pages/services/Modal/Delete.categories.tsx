import { Card } from "@/components/Card";
import { IconLoaderQuarter, IconTrash, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { BACKEND, jakartaSans } from "../../../../lib/utils";
import { useSetAtom } from "jotai";
import { alertValidation } from "../../../../store/Atom";
import { Categories } from "../Categories/List.categories";

interface FetchProductsFunction {
	(): Promise<Categories[] | void>;
}
type propsModalDeleteCategories = {
	id: number;
	name: string;
	fetchCategories: FetchProductsFunction;
};

export const ModalDeleteCategories: React.FC<propsModalDeleteCategories> = ({
	id,
	name,
	fetchCategories,
}: propsModalDeleteCategories) => {
	const [modal, setModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const setAlert = useSetAtom(alertValidation);

	const handlerDeleteCategory = async () => {
		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1800));
			const response = await fetch(`${BACKEND}/categories/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});

			const result = await response.json();
			console.log(result);
			if (result.error === true) {
				setAlert({ type: "error", message: result.message });
			} else {
				setAlert({ type: "success", message: result.message });
			}

			fetchCategories();
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			setAlert({
				type: "error",
				message: "Terjadi kesalahan dalam penghapusan data",
			});
		} finally {
			setLoading(false);
			setModal(false);
		}
	};
	return (
		<>
			<Tooltip title="Hapus" position="top" trigger="mouseenter" size="small">
				<button type="button" onClick={() => setModal(true)}>
					<IconTrash size={12} stroke={2.5} />
				</button>
			</Tooltip>

			{modal && (
				<div className="fixed w-full h-screen bg-zinc-950/50 top-0 right-0 left-0 flex items-center justify-center">
					<Card
						className="w-4/12"
						cardHeader={
							<>
								<h2 className="text-lg font-semibold">Hapus Data Kategori?</h2>
								<button type="button" onClick={() => setModal(false)}>
									<IconX size={20} stroke={2.5} />
								</button>
							</>
						}
					>
						<table className="w-full table-auto mt-3 mb-1">
							<tbody>
								<tr>
									<th
										className={`${jakartaSans.className} font-bold border border-zinc-600 px-3 py-2`}
									>
										ID
									</th>
									<td className="font-bold border border-zinc-600 px-3 py-2 text-zinc-400">
										{id}
									</td>
								</tr>
								<tr>
									<th
										className={`${jakartaSans.className} font-bold border border-zinc-600 px-3 py-2`}
									>
										Kategori
									</th>
									<td className="font-bold border border-zinc-600 px-3 py-2 text-zinc-400">
										{name}
									</td>
								</tr>
							</tbody>
						</table>

						<small>
							Jika anda menghapus {name} kategori, maka akan menghapus data{" "}
							<b>Produk</b> yang berhubungan
						</small>
						<div className="flex items-center justify-end mt-5">
							<button
								type="button"
								onClick={handlerDeleteCategory}
								disabled={loading}
								className="px-5 py-2 bg-red-900 rounded-xl text-red-100 font-semibold text-xs flex items-center justify-center gap-1 disabled:opacity-70"
							>
								{loading ? (
									<>
										<IconLoaderQuarter
											size={16}
											stroke={2}
											className="animate-spin"
										/>
										Loading...
									</>
								) : (
									"Hapus"
								)}
							</button>
						</div>
					</Card>
				</div>
			)}
		</>
	);
};
