import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Layout } from "../Layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { dark, light } from "../../theme";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { useSettings } from "../../store/settings";
import { NotFoundContainer } from "../../containers/NotFoundContainer";
import { Loader } from "../Loader";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				async lazy() {
					const { HubContainer } = await import("../../containers/HubContainer");
					return { Component: HubContainer };
				},
			},
			{
				path: "/portfolio/:filterId?",
				async lazy() {
					const { PortfolioContainer } = await import(
						"../../containers/PortfolioContainer"
					);
					return { Component: PortfolioContainer };
				},
			},
			{
				path: "*",
				element: <NotFoundContainer />,
			},
		],
	},
]);

const Root = () => {
	const { settings } = useSettings();

	return (
		<ErrorBoundary>
			<ThemeProvider theme={settings.theme === "dark" ? dark : light}>
				<CssBaseline />
				<RouterProvider
					router={router}
					future={{ v7_startTransition: true }}
					fallbackElement={<Loader />}
				/>
			</ThemeProvider>
		</ErrorBoundary>
	);
};

export default Root;
