import React from "react";
import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { lazyComponent } from "../../common/utils";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { dark, light } from "../../theme";
import { useSettings } from "../../store/settings";
import Cursor from "../Cursor";
import { Background } from "../Background";

const HubContainer = lazyComponent("HubContainer", import("../../containers/HubContainer"));

const PortfolioContainer = lazyComponent(
	"PortfolioContainer",
	import("../../containers/PortfolioContainer"),
);

const NotFoundContainer = lazyComponent(
	"NotFoundContainer",
	import("../../containers/NotFoundContainer"),
);

export const Routes = () => {
	const { settings } = useSettings();

	return (
		<ThemeProvider theme={settings.theme === "dark" ? dark : light}>
			<CssBaseline />
			<Cursor />
			<Background />

			<BrowserRouter>
				<RoutesReact>
					<Route element={<HubContainer />} path="/" />
					<Route element={<PortfolioContainer />} path="/portfolio/:filterId?" />
					<Route element={<NotFoundContainer />} path="*" />
				</RoutesReact>
			</BrowserRouter>
		</ThemeProvider>
	);
};
