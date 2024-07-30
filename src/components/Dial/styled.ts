import { darken, styled } from "@mui/material";
import Button from "@mui/material/Button";

export const Splash = styled("div")(({ theme }) => ({
	"&:after": {
		background: darken(theme.palette.primary.main, 0.2),
	},
}));

export const CvButton = styled(Button)(({ theme }) => ({
	background: "white",
	borderRadius: 80,
	color: "black",
	padding: "15px 100px",
}));
