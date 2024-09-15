import React from "react";
import { ErrorBoundarySuspense } from "../ErrorBoundarySuspense/ErrorBoundarySuspense";
import Cursor from "../Cursor";
import { Background } from "../Background";
import ScrollToTop from "../ScrollToTop";
import { Outlet } from "react-router-dom";
import { ThemeButton } from "../ThemeButton";

export const Layout = () => (
	<ErrorBoundarySuspense>
		<Outlet />

		<Cursor />
		<Background />
		<ScrollToTop />
		<ThemeButton />
	</ErrorBoundarySuspense>
);
