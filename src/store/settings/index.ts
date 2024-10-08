import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppDispatch, useAppSelector } from "../helpers";
import { dark, light } from "../../theme";
import { Theme } from "@mui/material";

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
	getTheme: Theme;
} => {
	const dispatch = useAppDispatch();

	const settings = useAppSelector((state: RootState) => state.settings);
	return {
		settings,
		handleSetTheme: (value: string) => dispatch(setThemeValue(value)),
		getTheme: settings.theme === "dark" ? dark : light,
	};
};
