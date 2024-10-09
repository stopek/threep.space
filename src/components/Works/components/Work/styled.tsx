import { Grid, IconButtonProps, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React from "react";

export const Description = styled(Typography)(() => ({
	em: {
		display: "block",
		marginBottom: "10px",
	},
	small: {
		display: "block",
	},
	"ol, li, ul": {
		margin: 0,
		padding: 0,
		listStyle: "square",
	},
	ol: {
		margin: "0 0 15px 0",
		paddingLeft: "16px",
	},
}));

export const ItemGrid = styled(Grid)<{ rounded?: number }>(({ rounded, theme }) => ({
	...(rounded
		? {
				backgroundImage: `repeating-linear-gradient(45deg, transparent, ${theme.palette.mode === "light" ? "rgba(128,128,128,0.4)" : "rgba(0,0,0,0.4)"} 30px, transparent 10px, transparent 20px)`,
				paddingTop: theme.spacing(0),
				paddingBottom: theme.spacing(3),
				borderRadius: 20,
				boxShadow: "inset 0px 0px 120px -120px rgba(255, 170, 0, 0.4)",
				transform: "scale(1.05)",
				position: "relative",
			}
		: {
				paddingTop: theme.spacing(0),
				paddingBottom: theme.spacing(3),
			}),
}));

interface ExpandMoreProps extends IconButtonProps {
	expand: number;
}

export const ExpandMore = styled((props: ExpandMoreProps) => <IconButton {...props} />)(
	({ theme, expand }) => ({
		position: "absolute",
		right: 0,
		transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	}),
);
