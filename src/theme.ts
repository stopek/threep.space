import { ThemeOptions } from "@mui/material/styles/createTheme";
import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";

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
				default: "#000",
			},
			mode: "dark",
			primary: {
				main: orange[900],
			},
			secondary: {
				main: purple[800],
			},
		},
	}),
);

export const light = responsiveFontSizes(
	createTheme({
		...general,
		palette: {
			background: {
				default: "#fff",
			},
			mode: "light",
			primary: {
				main: orange[900],
			},
			secondary: {
				main: purple[800],
			},
		},
	}),
);
