import { Layout } from "../components/Layout/Layout";
import { NotFoundContainer } from "../containers/NotFoundContainer";
import React from "react";
import { RouteObject } from "react-router-dom";
import { paths } from "./paths";

export const routes: RouteObject[] = [
	{
		path: paths.HUB,
		element: <Layout />,
		children: [
			{
				index: true,
				async lazy() {
					const { HubContainer } = await import("../containers/HubContainer");
					return { Component: HubContainer };
				},
			},
			{
				path: paths.PORTFOLIO_PREVIEW,
				async lazy() {
					const { PortfolioContainer } = await import("../containers/PortfolioContainer");
					return { Component: PortfolioContainer };
				},
			},
			{
				path: "/music",
				async lazy() {
					const { MusicContainer } = await import("../containers/MusicContainer");
					return { Component: MusicContainer };
				},
			},
			{
				path: "*",
				element: <NotFoundContainer />,
			},
		],
	},
];
