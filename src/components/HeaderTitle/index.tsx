import React from "react";
import Typography from "@mui/material/Typography";
import { TypographyOwnProps } from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box";
import { Divider, styled } from "@mui/material";

interface IHeaderTitle {
	title: string;
	variant?: TypographyOwnProps["variant"];
}

const Header = styled(Typography)`
	text-transform: uppercase;

	small {
		position: relative;
		top: -5px;
		padding: 0 15px;
	}
`;

export const HeaderTitle = ({ title, variant = "h4" }: IHeaderTitle) => (
	<Box mt={20} mb={5} display="flex" flexDirection="column" alignItems="center">
		<Header variant={variant} fontWeight={900} textAlign="center">
			{title}
		</Header>

		<Divider
			sx={{
				marginTop: 2,
				width: 100,
				borderColor: "white",
				borderStyle: "dashed",
			}}
		/>
	</Box>
);
