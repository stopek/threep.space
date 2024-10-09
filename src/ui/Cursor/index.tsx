import React, { ReactElement } from "react";
import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { CursorDot, CursorDotOutline } from "./styled";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const Cursor = (): ReactElement | null => {
	const device = useDeviceDetection();

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

	const toggleCursorVisibility = useCallback(() => {
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
	}, []);

	const toggleCursorSize = useCallback(() => {
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
	}, []);

	const mouseOverEvent = useCallback(() => {
		cursorEnlarged.current = true;
		toggleCursorSize();
	}, [toggleCursorSize]);

	const mouseOutEvent = useCallback(() => {
		cursorEnlarged.current = false;
		toggleCursorSize();
	}, [toggleCursorSize]);

	const mouseEnterEvent = useCallback(() => {
		cursorVisible.current = true;
		toggleCursorVisibility();
	}, [toggleCursorVisibility]);

	const mouseLeaveEvent = useCallback(() => {
		cursorVisible.current = false;
		toggleCursorVisibility();
	}, [toggleCursorVisibility]);

	const mouseMoveEvent = useCallback(
		(e: any) => {
			if (!dot.current) {
				return;
			}

			cursorVisible.current = true;
			toggleCursorVisibility();

			endX.current = e.pageX;
			endY.current = e.pageY;

			dot.current.style.top = endY.current + "px";
			dot.current.style.left = endX.current + "px";
		},
		[toggleCursorVisibility],
	);

	const animateDotOutlineRef = useRef<() => void>(() => {
		_x.current += (endX.current - _x.current) / delay;
		_y.current += (endY.current - _y.current) / delay;

		if (dotOutline.current) {
			dotOutline.current.style.top = _y.current + "px";
			dotOutline.current.style.left = _x.current + "px";
		}

		requestRef.current = requestAnimationFrame(animateDotOutlineRef.current);
	});

	const clean = useCallback(() => {
		document.body.classList.remove("dot-scroll");

		document.removeEventListener("mousedown", mouseOverEvent);
		document.removeEventListener("mouseup", mouseOutEvent);
		document.removeEventListener("mousemove", mouseMoveEvent);
		document.removeEventListener("mouseenter", mouseEnterEvent);
		document.removeEventListener("mouseleave", mouseLeaveEvent);

		if (requestRef.current) {
			cancelAnimationFrame(requestRef.current);
		}
	}, [mouseOverEvent, mouseOutEvent, mouseMoveEvent, mouseEnterEvent, mouseLeaveEvent]);

	useEffect(() => {
		if (device !== "desktop") {
			clean();
			return;
		}

		document.body.classList.add("dot-scroll");

		document.addEventListener("mousedown", mouseOverEvent);
		document.addEventListener("mouseup", mouseOutEvent);
		document.addEventListener("mousemove", mouseMoveEvent);
		document.addEventListener("mouseenter", mouseEnterEvent);
		document.addEventListener("mouseleave", mouseLeaveEvent);

		animateDotOutlineRef.current();

		return () => {
			clean();
		};
	}, [
		device,
		clean,
		mouseOverEvent,
		mouseOutEvent,
		mouseMoveEvent,
		mouseEnterEvent,
		mouseLeaveEvent,
	]);

	if (device !== "desktop") {
		return null;
	}

	return (
		<>
			<CursorDotOutline ref={dotOutline} />
			<CursorDot ref={dot} />
		</>
	);
};

export default Cursor;
