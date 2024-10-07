import { endpoints } from "./endpoints";
import instance from "./instance";
import { IWorkDTO } from "./types";

const servicesApi = {
	getWorks: async (): Promise<IWorkDTO[]> => {
		const response = await instance.get<IWorkDTO[]>(endpoints.WORKS);

		return response?.data || [];
	},
};

export default servicesApi;
