import React, { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const NotFound = (): ReactElement => {
	const { t } = useTranslation();

	return (
		<Box
			display="flex"
			height="100%"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
		>
			<Typography variant="h1">404</Typography>
			<Typography variant="h4" component="h2">
				{t("seo.not_found.title")}
			</Typography>

			<Box mt={3}>
				<Button
					variant="contained"
					color="success"
					size="medium"
					href="/"
					disableElevation
					sx={{ borderRadius: 10 }}
				>
					{t("txt.go_homepage")}
				</Button>
			</Box>
		</Box>
	);
};

export default NotFound;
