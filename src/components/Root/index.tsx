import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { ReactElement } from "react";
import { useSettings } from "../../store/settings";
import RouterProvider from "../../routing/RouterProvider";
import useSound, { SoundContext } from "../../hooks/useSound";

const Root = (): ReactElement => {
	const { getTheme } = useSettings();
	const sound = useSound();

	return (
		<ErrorBoundary>
			<ThemeProvider theme={getTheme}>
				<CssBaseline />
				<SoundContext.Provider value={sound}>
					<RouterProvider />
				</SoundContext.Provider>
			</ThemeProvider>
		</ErrorBoundary>
	);
};

export default Root;
