import { Action, CaseReducerActions } from "@reduxjs/toolkit";

export interface IApiData extends ILoadingState, IErrorState {
	works: Type.IWork[];
}

export interface ILoadingState {
	state: {
		error: boolean;
		loadings: Record<string, string>;
		crash: boolean;
		not_found: boolean;
	};
}

export interface ISingleErrorState {
	status: string;
	statusText: string;
	type?: string;
}

export interface IErrorState {
	errors: ISingleErrorState[];
}

export interface IUseApi {
	api: IApiData;
	actions: CaseReducerActions<any, any>;
	handleFetchWorks: () => Promise<Action>;
	isLoading: boolean;
	hasError: boolean;
}
