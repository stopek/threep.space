import { MutableRefObject, useEffect, useRef } from "react";
import { CursorDot, CursorDotOutline } from "./styled";

const Cursor = () => {
	const delay = 15;

	const dot: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const dotOutline: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const cursorVisible: MutableRefObject<boolean> = useRef(true);
	const cursorEnlarged: MutableRefObject<boolean> = useRef(false);

	const endX: MutableRefObject<number> = useRef(window.innerWidth / 2);
	const endY: MutableRefObject<number> = useRef(window.innerHeight / 2);
	const _x: MutableRefObject<number> = useRef(0);
	const _y: MutableRefObject<number> = useRef(0);

	const requestRef: MutableRefObject<number | null> = useRef(null);

	useEffect(() => {
		document.addEventListener("mousedown", mouseOverEvent);
		document.addEventListener("mouseup", mouseOutEvent);
		document.addEventListener("mousemove", mouseMoveEvent);
		document.addEventListener("mouseenter", mouseEnterEvent);
		document.addEventListener("mouseleave", mouseLeaveEvent);

		animateDotOutline();

		return () => {
			document.removeEventListener("mousedown", mouseOverEvent);
			document.removeEventListener("mouseup", mouseOutEvent);
			document.removeEventListener("mousemove", mouseMoveEvent);
			document.removeEventListener("mouseenter", mouseEnterEvent);
			document.removeEventListener("mouseleave", mouseLeaveEvent);

			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, []);

	const toggleCursorVisibility = () => {
		if (cursorVisible.current) {
			if (dot.current) {
				dot.current.style.opacity = "1";
			}

			if (dotOutline.current) {
				dotOutline.current.style.opacity = "1";
			}

			return;
		}

		if (dot.current) {
			dot.current.style.opacity = "0";
		}

		if (dotOutline.current) {
			dotOutline.current.style.opacity = "0";
		}
	};

	const toggleCursorSize = () => {
		if (cursorEnlarged.current) {
			if (dot.current) {
				dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
			}

			if (dotOutline.current) {
				dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
			}

			return;
		}

		if (dot.current) {
			dot.current.style.transform = "translate(-50%, -50%) scale(1)";
		}

		if (dotOutline.current) {
			dotOutline.current.style.transform = "translate(-50%, -50%) scale(0.75)";
		}
	};

	const mouseOverEvent = () => {
		cursorEnlarged.current = true;
		toggleCursorSize();
	};

	const mouseOutEvent = () => {
		cursorEnlarged.current = false;
		toggleCursorSize();
	};

	const mouseEnterEvent = () => {
		cursorVisible.current = true;
		toggleCursorVisibility();
	};

	const mouseLeaveEvent = () => {
		cursorVisible.current = false;
		toggleCursorVisibility();
	};

	const mouseMoveEvent = (e: any) => {
		if (!dot.current) {
			return;
		}

		cursorVisible.current = true;
		toggleCursorVisibility();

		endX.current = e.pageX;
		endY.current = e.pageY;

		dot.current.style.top = endY.current + "px";
		dot.current.style.left = endX.current + "px";
	};

	const animateDotOutline = () => {
		_x.current += (endX.current - _x.current) / delay;
		_y.current += (endY.current - _y.current) / delay;

		if (dotOutline.current) {
			dotOutline.current.style.top = _y.current + "px";
			dotOutline.current.style.left = _x.current + "px";
		}

		requestRef.current = requestAnimationFrame(animateDotOutline);
	};

	return (
		<>
			<CursorDotOutline ref={dotOutline} />
			<CursorDot ref={dot} />
		</>
	);
};

export default Cursor;
