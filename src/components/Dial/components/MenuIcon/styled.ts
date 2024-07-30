import Box from "@mui/material/Box";
import { styled } from "@mui/material";

export const StyledMenuIcon = styled(Box)`
	display: block;
	cursor: pointer;

	transform: rotate(0deg);
	transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

	&__bar,
	&__circle {
		fill: none;
		stroke: currentColor;
		stroke-width: 3;
		stroke-linecap: round;
	}

	&__bar {
		transform: rotate(0deg);
		transform-origin: 50% 50%;
		transition: transform 0.25s ease-in-out;
	}

	&__circle {
		transition: stroke-dashoffset 0.3s linear 0.1s;
		stroke-dashoffset: ${2 * 3.141592653 * 23}; // 23 is the <circle>'s radius
		stroke-dasharray: ${2 * 3.141592653 * 23};
	}
`;
