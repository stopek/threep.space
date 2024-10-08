import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppDispatch, useAppSelector } from "../helpers";
import { IWorkDTO } from "../../services/api/types";
import { worksDTO } from "../../services/api/dto/works";
import { setStateMatchers } from "./helpers";
import { ISingleErrorState, IUseApi } from "./types";
import { initialState } from "./config";
import { fetchWorks } from "./thunks";

export const apiSlice = createSlice({
	extraReducers: builder => {
		builder.addCase(fetchWorks.fulfilled, (state, action: PayloadAction<IWorkDTO[]>) => {
			state.works = worksDTO(action.payload);
		});

		// @todo - handle errors list
		setStateMatchers(builder);
	},
	initialState,
	name: "api",
	reducers: {
		clearError(state, action: PayloadAction<number>) {
			state.errors = state.errors.filter((_, index) => index !== action.payload);
		},
		clearErrors(state) {
			state.errors = initialState.errors;
		},
		addError(state, action: PayloadAction<ISingleErrorState>) {
			state.errors = [
				{
					...action.payload,
					type: action.payload.type || action.type,
				},
				...state.errors,
			];
		},
	},
});

const actions = apiSlice.actions;

export const useApi = (): IUseApi => {
	const dispatch = useAppDispatch();

	const api = useAppSelector((state: RootState) => state.api);

	const isLoading = Object.values(api.state.loadings).length > 0;
	const hasError = api.state.error;

	const handleFetchWorks = () => dispatch(fetchWorks());

	return {
		api,
		actions,
		isLoading,
		hasError,
		handleFetchWorks,
	};
};
