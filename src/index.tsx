import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/index.scss";

import "@fontsource/mulish/200.css";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/900.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Root from "./components/Root";

import "./i18n";
import { store } from "./store";
import { Provider } from "react-redux";
import ReactGA from "react-ga4";

const ga = process.env.REACT_APP_GA;
if (ga) {
	ReactGA.initialize(ga);
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<Provider store={store}>
		<Root />
	</Provider>,
);

// If you want your app to work offline and load faster, you can change unregister() to register()
// below. Note this comes with some pitfalls. Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
