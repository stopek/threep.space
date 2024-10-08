import { IWorkDTO } from "../types";

export const workDTO = (work: IWorkDTO): Type.IWork => ({
	// @todo - types
	...(work as Type.IWork),
});

export const worksDTO = (works: IWorkDTO[]): Type.IWork[] => works.map(workDTO);
