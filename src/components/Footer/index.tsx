import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const FooterText = styled(Typography)`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.3;
	font-weight: 200;
`;

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<FooterText variant="subtitle2">
			{t("txt.copyright", { year: new Date().getFullYear() })}
		</FooterText>
	);
};
