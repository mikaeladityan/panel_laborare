import { useAtom } from "jotai";
import { alertValidation } from "../../../store/Atom";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import { useCallback, useEffect } from "react";

export const AlertShow = () => {
	const [alert, setAlert] = useAtom(alertValidation);
	console.log(alert);
	const closeAlert = useCallback(async () => {
		if (alert) {
			await new Promise((resolve) => setTimeout(resolve, 5000));
			setAlert(undefined);
		}
	}, [alert, setAlert]);
	useEffect(() => {
		closeAlert();
	}, [closeAlert]);
	return (
		alert && (
			<div className="absolute top-5 right-5 z-10 w-auto">
				<div
					className={`px-5 py-3 rounded-xl ${
						alert?.type === "error"
							? "bg-red-900 text-red-200 border-2 border-red-200"
							: alert?.type === "success"
							? "bg-blue-900 text-blue-200 border-2 border-blue-200"
							: "bg-yellow-900 text-yellow-200 border-2 border-yellow-200"
					} flex items-center justify-between w-full ms-auto gap-10`}
				>
					<div className="flex items-center justify-start gap-5">
						<IconAlertCircle size={20} stroke={2.5} />
						<p className="text-sm flex items-center justify-start gap-1">
							<b>
								{alert?.type === "error"
									? "Kesalahan"
									: alert?.type === "success"
									? "Berhasil"
									: "Peringatan"}
								!
							</b>
							{alert?.message}
						</p>
					</div>
					<button onClick={() => setAlert(undefined)}>
						<IconX size={20} stroke={2.5} />
					</button>
				</div>
			</div>
		)
	);
};
