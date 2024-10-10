import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { ReactElement } from "react";
import { useSettings } from "../../store/settings";
import RouterProvider from "../../routing/RouterProvider";

const Root = (): ReactElement => {
	const { getTheme } = useSettings();

	return (
		<ErrorBoundary>
			<ThemeProvider theme={getTheme}>
				<CssBaseline />
				<RouterProvider />
			</ThemeProvider>
		</ErrorBoundary>
	);
};

export default Root;
