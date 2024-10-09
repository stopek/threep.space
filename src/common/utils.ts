import { FC, lazy, LazyExoticComponent } from "react";

export const lazyComponent = (
	name: string,
	importer: Promise<Record<string, FC>>,
): LazyExoticComponent<FC> =>
	lazy(async () => {
		const component = await importer;
		return { default: component[name] };
	});

export const isStackFilter = (filterId: string | undefined): boolean =>
	filterId?.startsWith("stack:") || false;

export const stackValue = (filterId: string | undefined): string =>
	filterId?.replace("stack:", "") || "";

export const getMultipleStack = (filterId: string | undefined): string[] =>
	stackValue(filterId).split(",");

export const isMultipleStack = (filterId: string | undefined): boolean =>
	isStackFilter(filterId) && getMultipleStack(filterId).length > 1;

export const stackArray = (filterId: string | undefined): string[] => {
	if (isMultipleStack(filterId)) {
		return getMultipleStack(filterId);
	}

	if (isStackFilter(filterId)) {
		const stack = stackValue(filterId);
		return [stack];
	}

	return [];
};

export const isCurrentStack = (filterId: string | undefined, stackName: string): boolean => {
	if (!filterId) {
		return false;
	}

	const isStack = isStackFilter(filterId);
	const currentStack = stackValue(filterId);
	const isMultiple = isMultipleStack(filterId);
	const multipleStack = getMultipleStack(filterId);

	if (!isStack) {
		return false;
	}

	if (isMultiple) {
		return multipleStack.includes(stackName);
	}

	return currentStack === stackName;
};
