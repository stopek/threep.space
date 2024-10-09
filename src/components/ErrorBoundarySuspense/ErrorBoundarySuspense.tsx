import React, { PropsWithChildren, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Loader } from "../../ui/Loader";

export const ErrorBoundarySuspense = ({
	children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => (
	<ErrorBoundary>
		<Suspense fallback={<Loader />}>{children}</Suspense>
	</ErrorBoundary>
);
