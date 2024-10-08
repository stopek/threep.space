import React from "react";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export const Error = () => {
	const { t } = useTranslation();

	return (
		<Alert variant="standard" color="error" icon={false} sx={{ justifyContent: "center" }}>
			<Box
				display="inline-flex"
				flexDirection="column"
				gap={2}
				justifyContent="center"
				alignItems="center"
			>
				{t("messages.error")}
				<Button
					onClick={() => document.location.reload()}
					color="error"
					variant="contained"
					size="small"
				>
					{t("txt.reload")}
				</Button>
			</Box>
		</Alert>
	);
};
