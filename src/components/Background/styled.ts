import { styled } from "@mui/material";

export const Container = styled("div")`
	filter: blur(100px);
	pointer-events: none;
	position: fixed;
	min-width: 100%;
	margin-top: 0;
	height: 180%;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	z-index: -1;
	opacity: 0.3;
`;

export const Content = styled("div")`
	border-radius: 99999px;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100vw;
	min-width: 1000px;
	height: 100vh;
	transform: translate(-50%, -50%) scale(0.6);
	overflow: hidden;
`;

export const Spinner = styled("div")`
	@keyframes blobs {
		0% {
			transform: translate(-50%, -50%) rotate(0deg) scale(2);
		}
		to {
			transform: translate(-50%, -50%) rotate(1turn) scale(2);
		}
	}

	position: absolute;
	top: 50%;
	left: 50%;
	width: 100vw;
	height: 100vw;
	transform: translate(-50%, -50%);

	animation: blobs 8s linear infinite;
	background: conic-gradient(from 0deg, #08f, #f60, #bbffa1, #4c00ff, #ab2666, #09f);
`;
