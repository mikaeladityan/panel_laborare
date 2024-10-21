import { useSetAtom } from "jotai";
import React, { useCallback, useEffect, useState } from "react";
import { alertValidation } from "../../../../store/Atom";
import { BACKEND } from "../../../../lib/utils";
import { IconLoaderQuarter } from "@tabler/icons-react";
import { Categories } from "../Categories/List.categories";
interface FetchProductsFunction {
	(): Promise<Categories[] | void>;
}
type propsModalDeleteCategories = {
	fetchCategories: FetchProductsFunction;
	update: boolean;
	categoryId: number | null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setUpdate: any;
};
export const FormCategories: React.FC<propsModalDeleteCategories> = ({
	fetchCategories,
	update,
	categoryId,
	setUpdate,
}) => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState<string>("");
	const [error, setError] = useState<string | undefined>(undefined);
	const setAlert = useSetAtom(alertValidation);

	// Method created
	const handlerSubmitCreateCategory = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		if (!name) {
			setError("Nama kategori tidak boleh kosong!");
		} else {
			setLoading(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 2000));
				const response = await fetch(`${BACKEND}/categories`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name }),
				});

				const result = await response.json();
				console.log(result.error);
				if (result.error === true) {
					setAlert({ type: "error", message: result.message });
				} else {
					setError(undefined);
					setName("");
					setAlert({ type: "success", message: result.message });
					fetchCategories();
				}

				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (err) {
				setAlert({ type: "error", message: "Terjadi kesalahan!" });
			} finally {
				setLoading(false);
			}
		}
	};

	const handlerSubmitUpdateCategory = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		if (!name) {
			setError("Nama kategori tidak boleh kosong!");
		} else {
			setLoading(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 2000));
				const response = await fetch(`${BACKEND}/categories/${categoryId}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name }),
				});

				const result = await response.json();
				console.log(result.error);
				if (result.error === true) {
					setAlert({ type: "error", message: result.message });
				} else {
					setError(undefined);
					setName("");
					setUpdate(false);
					setAlert({ type: "success", message: result.message });
					fetchCategories();
				}

				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (err) {
				setAlert({ type: "error", message: "Terjadi kesalahan!" });
			} finally {
				setLoading(false);
			}
		}
	};

	// Method Update
	const fetchDetailCategory = useCallback(async () => {
		try {
			const response = await fetch(`${BACKEND}/categories/${categoryId}`);
			const result = await response.json();

			if (result.error === true) {
				setAlert({ type: "error", message: result.message });
			} else {
				setName(result.data.name);
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			setAlert({ type: "error", message: "Terjadi kesalahan" });
		}
	}, [categoryId, setAlert]);
	useEffect(() => {
		if (update) {
			fetchDetailCategory();
		} else {
			setName("");
		}
	}, [update, fetchDetailCategory]);

	return (
		<form
			onSubmit={
				update ? handlerSubmitUpdateCategory : handlerSubmitCreateCategory
			}
		>
			<div className="flex items-center justify-center gap-2 mt-1">
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
					value={name}
					type="text"
					className="w-full px-3 py-2 text-sm bg-black text-zinc-400 border border-zinc-700 rounded-lg focus:outline-none"
				/>

				<button
					type="submit"
					disabled={loading}
					className={`text-sm disabled:opacity-60 bg-zinc-100 text-black px-3 py-2 rounded-lg flex items-center justify-center gap-1 ${
						loading ? "w-7/12" : "w-5/12"
					}`}
				>
					{loading ? (
						<>
							<IconLoaderQuarter
								size={18}
								stroke={2}
								className="animate-spin"
							/>
							Loading
						</>
					) : update ? (
						"Ubah"
					) : (
						"Simpan"
					)}
				</button>
			</div>
			{error && <small className="mt-1 mb-3 text-red-600">{error}</small>}
		</form>
	);
};
