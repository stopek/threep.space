import Button from "@mui/material/Button";
import { styled } from "@mui/material";

export const StyledButton = styled(Button)(() => ({
	position: "fixed",
	right: "20px",
	top: "20px",
	zIndex: 10,
	padding: "8px",
	minWidth: "auto",
}));
