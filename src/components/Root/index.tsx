import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Layout } from "../Layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { useSettings } from "../../store/settings";
import { NotFoundContainer } from "../../containers/NotFoundContainer";
import { Loading } from "../../ui/Loading/Loading";

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
				path: "/portfolio/:filterId?/:projectName?",
				async lazy() {
					const { PortfolioContainer } = await import(
						"../../containers/PortfolioContainer"
					);
					return { Component: PortfolioContainer };
				},
			},
			{
				path: "/music",
				async lazy() {
					const { MusicContainer } = await import("../../containers/MusicContainer");
					return { Component: MusicContainer };
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
	const { getTheme } = useSettings();

	return (
		<ErrorBoundary>
			<ThemeProvider theme={getTheme}>
				<CssBaseline />
				<RouterProvider
					router={router}
					future={{ v7_startTransition: true }}
					fallbackElement={<Loading />}
				/>
			</ThemeProvider>
		</ErrorBoundary>
	);
};

export default Root;
