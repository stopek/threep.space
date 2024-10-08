import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState, useAppDispatch, useAppSelector } from "../helpers";
import { IWorkDTO } from "../../services/api/types";
import { worksDTO } from "../../services/api/dto/works";
import servicesApi from "../../services/api";
import axios from "axios";

interface IApiData {
	works: Type.IWork[];
	loading: boolean;
	error: string | null;
}

const initialState: IApiData = {
	works: [],
	loading: true,
	error: null,
};

export interface ISingleErrorState {
	status: string;
	statusText: string;
	type?: string;
}

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

export const fetchWorks = thunkWithReject("api/fetchWorks", servicesApi.getWorks);

export const apiSlice = createSlice({
	extraReducers: builder => {
		builder
			.addCase(fetchWorks.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchWorks.fulfilled, (state, action: PayloadAction<IWorkDTO[]>) => {
				state.loading = false;
				state.works = worksDTO(action.payload);
			})
			.addCase(fetchWorks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Something went wrong";
			});
	},
	initialState,
	name: "api",
	reducers: {
		setWorks: (state, action: PayloadAction<IWorkDTO[]>) => {
			state.works = worksDTO(action.payload);
		},
	},
});

const { setWorks } = apiSlice.actions;

export const useApi = (): {
	api: IApiData;
	handleSetWorks: (value: IWorkDTO[]) => void;
} => {
	const dispatch = useAppDispatch();

	return {
		api: useAppSelector((state: RootState) => state.api),
		handleSetWorks: (value: IWorkDTO[]) => dispatch(setWorks(value)),
	};
};
