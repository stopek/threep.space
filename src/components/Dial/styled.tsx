import { alpha, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const CvButton = styled(Button)(() => ({
	borderRadius: 130,
	padding: "5px 50px",
}));

export const NavBackground = styled(Box)(({ theme }) => ({
	background: alpha(theme.palette.background.default, 0.65),
	backdropFilter: "blur(4px)",
}));

export const ToggleButton = styled(Box)(({ theme }) => ({
	color: theme.palette.text.primary,
	background: alpha(theme.palette.text.primary, 0.1),
	zIndex: 1000,
}));
