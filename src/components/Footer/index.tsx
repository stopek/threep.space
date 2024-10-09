import Logo from "../../ui/Logo";
import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const Footer = (): ReactElement => {
	const { t } = useTranslation();

	return (
		<Box alignItems="center" justifyContent="center" display="flex" flexDirection="column">
			<Typography variant="subtitle2" component="span" style={{ opacity: 0.2 }}>
				{t("txt.copyright", { year: new Date().getFullYear() })}
			</Typography>

			<Logo />
		</Box>
	);
};

export default Footer;
