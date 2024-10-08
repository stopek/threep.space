import axios from "axios";
import {
	ActionReducerMapBuilder,
	AsyncThunk,
	createAsyncThunk,
	Draft,
	PayloadAction,
} from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../helpers";
import { IErrorState, ILoadingState, ISingleErrorState, TIgnoreTypes } from "./types";
import HttpStatusCode from "../../@types/HttpStatusCode";

interface TypeAction {
	type: string;
	payload?: {
		status?: number;
	};
}

const isPendingAction = (action: TypeAction) => action.type.endsWith("pending");

const isFulfilledAction = (action: TypeAction) => action.type.endsWith("fulfilled");

const isCrashedAction = (action: TypeAction) =>
	action.type.endsWith("rejected") &&
	action?.payload?.status === HttpStatusCode.INTERNAL_SERVER_ERROR;

const isNotFoundAction = (action: TypeAction) =>
	action.type.endsWith("rejected") && action?.payload?.status === HttpStatusCode.NOT_FOUND;

const isRejectedErrorAction = (action: TypeAction) =>
	action.type.endsWith("rejected") &&
	(!action?.payload?.status ||
		![HttpStatusCode.NOT_FOUND, HttpStatusCode.INTERNAL_SERVER_ERROR].includes(
			action?.payload?.status,
		));

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

const setStateMatchers = <T extends ILoadingState>(
	builder: ActionReducerMapBuilder<T>,
	// @todo - ignoring preload types
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ignoring: TIgnoreTypes,
) =>
	builder
		.addMatcher(isPendingAction, (state: Draft<T>) => {
			state.state = {
				error: false,
				loadings: state.state.loadings,
				crash: false,
				not_found: false,
			};
		})
		.addMatcher(isFulfilledAction, (state: Draft<T>) => {
			state.state = { ...state.state };
		})
		.addMatcher(isCrashedAction, (state: Draft<T>) => {
			state.state = { ...state.state, crash: true, loadings: {} };
		})
		.addMatcher(isRejectedErrorAction, (state: Draft<T>) => {
			state.state = { ...state.state, error: true, loadings: {} };
		})
		.addMatcher(isNotFoundAction, (state: Draft<T>) => {
			state.state = { ...state.state, not_found: true, loadings: {} };
		});

const catchRejected = <T extends IErrorState>(
	builder: ActionReducerMapBuilder<T>,
	thunks: AsyncThunk<any, any, any>[],
) =>
	thunks.forEach(thunk =>
		builder.addCase(thunk.rejected, (state: Draft<T>, action: PayloadAction<any>) => {
			state.errors = [
				{
					...action.payload,
					type: action.type,
				},
				...state.errors,
			];
		}),
	);

export { resolveRejectedError, setStateMatchers, thunkWithReject, catchRejected };
