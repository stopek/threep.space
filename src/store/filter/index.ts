import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { ignoreElements, Observable, tap } from "rxjs";
import { RootState, useAppDispatch, useAppSelector } from "../helpers";

export const filterSlice = createSlice({
	extraReducers: () => {},
	initialState: { value: "latest" },
	name: "filter",
	reducers: {
		setFilterValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});
const { setFilterValue } = filterSlice.actions;

export const filterEpic = (actions$: Observable<Action>): Observable<Action> =>
	actions$.pipe(
		ofType(setFilterValue.name),
		tap(action => console.log(`Epic: ${action.type}`)),
		ignoreElements(),
	);

export const useFilter = (): {
	filter: { value: string };
	handleSetValue: (value: string) => void;
} => {
	const dispatch = useAppDispatch();

	return {
		filter: useAppSelector((state: RootState) => state.filter),
		handleSetValue: (value: string) => dispatch(setFilterValue(value)),
	};
};
