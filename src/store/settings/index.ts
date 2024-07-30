import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppDispatch, useAppSelector } from "../helpers";

// Slice
export const settingsSlice = createSlice({
	extraReducers: () => {},
	initialState: { theme: "dark" },
	name: "settings",
	reducers: {
		setThemeValue: (state, action: PayloadAction<string>) => {
			state.theme = action.payload;
		},
	},
});
const { setThemeValue } = settingsSlice.actions;

// Hook
export const useSettings = (): {
	settings: { theme: string };
	handleSetTheme: (value: string) => void;
} => {
	const dispatch = useAppDispatch();

	return {
		settings: useAppSelector((state: RootState) => state.settings),
		handleSetTheme: (value: string) => dispatch(setThemeValue(value)),
	};
};
