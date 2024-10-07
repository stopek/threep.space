import { Grid, IconButtonProps, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React from "react";

export const Description = styled(Typography)`
	em {
		display: block;
		margin-bottom: 10px;
	}
	small {
		display: block;
	}

	ol,
	li,
	ul {
		margin: 0;
		padding: 0;
		list-style: square;
	}

	ol {
		margin: 0 0 15px 0;
		padding-left: 16px;
	}
`;

export const ItemGrid = styled(Grid)<{ rounded?: number }>(({ rounded, theme }) =>
	rounded
		? {
				background: "rgba(0, 0, 0, 0.3)",
				paddingTop: theme.spacing(0),
				paddingBottom: theme.spacing(3),
			}
		: {
				paddingTop: theme.spacing(0),
				paddingBottom: theme.spacing(3),
			},
);

interface ExpandMoreProps extends IconButtonProps {
	expand: number;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
	return <IconButton {...props} />;
})(({ theme, expand }) => ({
	position: "absolute",
	right: 0,
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));
