import React, { ReactElement } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

interface IHeaderTitle extends TypographyProps {
	title: string;
}

export const HeaderTitle = ({ title, variant = "h4" }: IHeaderTitle): ReactElement => (
	<Box mt={20} mb={5} display="flex" flexDirection="column" alignItems="center">
		<Typography
			variant={variant}
			fontWeight={900}
			component="h2"
			textAlign="center"
			sx={{ textTransform: "uppercase" }}
		>
			{title}
		</Typography>

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
