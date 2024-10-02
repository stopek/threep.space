import React from "react";
import { ErrorBoundarySuspense } from "../ErrorBoundarySuspense/ErrorBoundarySuspense";
import Cursor from "../../ui/Cursor";
import { Background } from "../../ui/Background";
import ScrollToTop from "../../ui/ScrollToTop";
import { Outlet } from "react-router-dom";
import { ThemeButton } from "../../ui/ThemeButton";

export const Layout = () => (
	<ErrorBoundarySuspense>
		<Outlet />

		<Cursor />
		<Background />
		<ScrollToTop />
		<ThemeButton />
	</ErrorBoundarySuspense>
);
