import React, { StrictMode } from "react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Layout } from "../Layout/Layout";
import { Routes } from "../Routes/Routes";
import ReactGA from "react-ga4";

const ga = process.env.REACT_APP_GA;
if (ga) {
	ReactGA.initialize(ga);
}

const Root = () => (
	<StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<Layout>
					<Routes />
				</Layout>
			</Provider>
		</ErrorBoundary>
	</StrictMode>
);

export default Root;
