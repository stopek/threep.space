import { CaseReducerActions } from "@reduxjs/toolkit";
import { AppDispatch } from "../helpers";

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

export enum EIgnoreTypes {
	PENDING = "pending",
}

export type TIgnoreTypes = Partial<Record<EIgnoreTypes, string[]>>;

export interface IUseApi {
	api: IApiData;
	actions: CaseReducerActions<any, any>;
	handleFetchWorks: () => AppDispatch;
	isLoading: boolean;
	hasError: boolean;
}
