import { ThemeOptions } from "@mui/material/styles/createTheme";
import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const general: ThemeOptions = {
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Mulish"',
			'"Segoe UI"',
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
	shape: {
		borderRadius: 5,
	},
	components: {
		MuiUseMediaQuery: {
			defaultProps: {
				noSsr: true,
			},
		},
	},
};

export const dark = responsiveFontSizes(
	createTheme({
		...general,
		palette: {
			background: {
				default: "#000000",
			},
			mode: "dark",
			primary: {
				main: "#fb6400",
			},
		},
	}),
);

export const light = responsiveFontSizes(
	createTheme({
		...general,
		palette: {
			mode: "light",
			primary: {
				main: "#fb6400",
			},
		},
	}),
);
