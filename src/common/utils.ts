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
