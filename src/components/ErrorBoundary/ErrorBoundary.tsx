import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): { hasError: boolean } {
		return { hasError: true };
	}

	// componentDidCatch(error: Error, errorInfo: ErrorInfo): void { /* Do something with error. */ }

	render(): ReactNode {
		const { children } = this.props;
		const { hasError } = this.state;

		if (hasError) {
			return (
				<div
					role="alert"
					style={{
						width: "100%",
						height: "100%",
						background: "black",
						display: "flex",
						color: "white",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						fontFamily: "Mulish",
					}}
				>
					<strong style={{ fontSize: 30 }}>Crashed</strong>
					<p style={{ margin: 0, padding: 0 }}>There was an error.</p>
				</div>
			);
		}

		return children;
	}
}
