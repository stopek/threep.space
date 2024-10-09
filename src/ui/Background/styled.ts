import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Container = styled(Box)(() => ({
	filter: "blur(100px)",
	pointerEvents: "none",
	position: "fixed",
	minWidth: "100%",
	marginTop: 0,
	height: "180%",
	top: "50%",
	left: "50%",
	transform: "translateX(-50%) translateY(-50%)",
	zIndex: -1,
	opacity: 0.3,
}));

export const Content = styled(Box)(() => ({
	borderRadius: "99999px",
	position: "absolute",
	top: "50%",
	left: "50%",
	width: "100vw",
	minWidth: "1000px",
	height: "100vh",
	transform: "translate(-50%, -50%) scale(0.6)",
	overflow: "hidden",
}));

export const Spinner = styled(Box)(() => ({
	"@keyframes blobs": {
		"0%": {
			transform: "translate(-50%, -50%) rotate(0deg) scale(2)",
		},
		to: {
			transform: "translate(-50%, -50%) rotate(1turn) scale(2)",
		},
	},
	position: "absolute",
	top: "50%",
	left: "50%",
	width: "100vw",
	height: "100vw",
	transform: "translate(-50%, -50%)",
	animation: "blobs 8s linear infinite",
	background: "conic-gradient(from 0deg, #08f, #f60, #bbffa1, #4c00ff, #ab2666, #09f)",
}));
