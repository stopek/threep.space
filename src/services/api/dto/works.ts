import { IWorkDTO } from "../types";

export const workDTO = (integration: IWorkDTO): Type.IWork => ({
	...integration,
});

export const worksDTO = (works: IWorkDTO[]): Type.IWork[] => works.map(integrationDTO);
