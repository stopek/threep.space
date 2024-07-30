import { alpha, styled } from "@mui/material";

export const CursorDot = styled("div")(({ theme }) => ({
	pointerEvents: "none",
	position: "absolute",
	zIndex: 100000,
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	borderRadius: "50%",
	opacity: 1,
	transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
	width: "8px",
	height: "8px",
	backgroundColor: theme.palette.primary.main,
}));

export const CursorDotOutline = styled("div")(({ theme }) => ({
	pointerEvents: "none",
	position: "absolute",
	zIndex: 100000,
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%) scale(0.75)",
	borderRadius: "50%",
	opacity: 1,
	transformOrigin: "center, center",
	transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
	width: "40px",
	height: "40px",
	backgroundColor: alpha(theme.palette.primary.main, 0.4),
	border: `1px dashed ${alpha(theme.palette.primary.main, 0.8)}`,
}));
