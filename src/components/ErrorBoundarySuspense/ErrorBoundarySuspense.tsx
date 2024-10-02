import React, { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Loader } from "../../ui/Loader";

export const ErrorBoundarySuspense = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
	<ErrorBoundary>
		<Suspense fallback={<Loader />}>{children}</Suspense>
	</ErrorBoundary>
);
