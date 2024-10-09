import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)(() => ({
	position: "absolute",
	bottom: 0,
	zIndex: 10,
	padding: "8px",
	minWidth: "auto",
	gap: "5px",
	display: "flex",
	flexDirection: "column",
	top: "auto",
}));
