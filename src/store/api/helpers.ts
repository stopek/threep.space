import axios from "axios";
import { ActionReducerMapBuilder, createAsyncThunk, Draft } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../helpers";
import { ILoadingState, ISingleErrorState } from "./types";

type TAction = "pending" | "fulfilled" | "rejected";

interface TypeAction {
	type: string;
	payload?: {
		status?: number;
	};
	meta: {
		arg: any;
		requestId: string;
		requestStatus: TAction;
	};
}

const isPendingAction = (props: TypeAction): boolean =>
	props?.meta?.requestStatus.endsWith("pending") || false;

const isFulfilledAction = (props: TypeAction): boolean =>
	props?.meta?.requestStatus.endsWith("fulfilled");

const isRejectedErrorAction = (props: TypeAction): boolean => props.type.endsWith("rejected");

const resolveRejectedError = (error: unknown): ISingleErrorState => {
	if (axios.isAxiosError(error)) {
		const response = error.response;

		return {
			status: response?.status.toString() || "",
			statusText: response?.statusText || error.message,
		};
	}

	if (error instanceof TypeError) {
		return {
			status: error.name,
			statusText: error.message,
		};
	}

	return {
		status: "",
		statusText: "",
	};
};

const thunkWithReject = <Response, Params = undefined>(
	name: string,
	action: (params: Params | undefined) => Promise<Response>,
) =>
	createAsyncThunk<
		Response,
		Params,
		{
			state: RootState;
			dispatch: AppDispatch;
			rejectValue: ISingleErrorState;
		}
	>(name, async (data, { rejectWithValue }) => {
		try {
			return await action(data);
		} catch (error) {
			return rejectWithValue(resolveRejectedError(error));
		}
	});

const setStateMatchers = <T extends ILoadingState>(builder: ActionReducerMapBuilder<T>) =>
	builder
		.addMatcher(isPendingAction, (state: Draft<T>, action: TypeAction) => {
			state.state = {
				error: false,
				loadings: {
					...state.state.loadings,
					[action.meta.requestId]: action.type,
				},
				crash: false,
				not_found: false,
			};
		})
		.addMatcher(isFulfilledAction, (state: Draft<T>, action: TypeAction) => {
			const loadings = state.state.loadings;
			delete loadings?.[action.meta.requestId];

			state.state = { ...state.state, loadings };
		})
		.addMatcher(isRejectedErrorAction, (state: Draft<T>) => {
			state.state = { ...state.state, error: true, loadings: {} };
		});

export { resolveRejectedError, setStateMatchers, thunkWithReject };
