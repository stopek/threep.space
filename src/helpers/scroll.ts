const scrollTop = () => window.scrollTo(0, 0);

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

export { scrollTop };
