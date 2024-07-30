import React, { PropsWithChildren } from "react";
import { ErrorBoundarySuspense } from "../ErrorBoundarySuspense/ErrorBoundarySuspense";

export const Layout = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
	<ErrorBoundarySuspense>{children}</ErrorBoundarySuspense>
);
