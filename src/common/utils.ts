import { FC, lazy, LazyExoticComponent } from "react";

export const lazyComponent = (
	name: string,
	importer: Promise<Record<string, FC>>,
): LazyExoticComponent<FC> =>
	lazy(async () => {
		const component = await importer;
		return { default: component[name] };
	});

export const scrollToDiv = (elementId: string) => {
	const element = document.getElementById(elementId);
	if (!element) {
		return;
	}

	window.scroll({
		top: element.offsetTop,
		behavior: "smooth",
	});
};

export const isStackFilter = (filterId: string | undefined) => filterId?.startsWith("stack:");

export const stackValue = (filterId: string | undefined): string =>
	filterId?.replace("stack:", "") || "";
