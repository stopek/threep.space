import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Description = styled(Typography)(({ theme }) => ({
	lineHeight: 1.9,
	a: {
		color: theme.palette.mode === "light" ? "black" : "white",
		padding: theme.spacing(1),
		fontWeight: 600,
	},
}));

export const Hand = styled(Box)(() => ({
	display: "block",
	fontSize: "50%",
	fontWeight: 400,
}));
