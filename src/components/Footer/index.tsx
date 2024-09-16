import Logo from "../Logo";
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const FooterText = styled(Typography)`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 100;
	opacity: 0.5;
`;

const Footer = () => {
	const { t } = useTranslation();

	return (
		<Box alignItems="center" justifyContent="center" display="flex" flexDirection="column">
			<FooterText variant="subtitle2">
				{t("txt.copyright", { year: new Date().getFullYear() })}
			</FooterText>
			<Logo />
		</Box>
	);
};

export default Footer;
