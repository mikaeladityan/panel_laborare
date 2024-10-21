import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Error = {
	type?: string;
	message?: string;
};

export const sidebarAtom = atomWithStorage("sidebarFold", true);
export const alertValidation = atom<Error | undefined>(undefined);
