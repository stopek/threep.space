import { IApiData } from "./types";

export const initialState: IApiData = {
	works: [],
	state: {
		loadings: {},
		error: false,
		crash: false,
		not_found: false,
	},
	errors: [],
};
