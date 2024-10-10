import { createBrowserRouter, RouterProvider as RouterProviderReact } from "react-router-dom";
import { Loading } from "../ui/Loading/Loading";
import React from "react";
import { routes } from "./";

const router = createBrowserRouter(routes);

const RouterProvider = () => (
	<RouterProviderReact
		router={router}
		future={{ v7_startTransition: true }}
		fallbackElement={<Loading />}
	/>
);

export default RouterProvider;
