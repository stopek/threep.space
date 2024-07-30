import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { Titles } from "./styled";
import { Divider } from "@mui/material";

const HubTitles = () => {
	const { t } = useTranslation();

	return (
		<Titles>
			<Typography variant="h4" fontWeight={600} px={5}>
				{t("welcome.first_line")}
			</Typography>

			<Divider>
				<Typography variant="h6" fontWeight={200}>
					{t("welcome.second_line")}
				</Typography>
			</Divider>
		</Titles>
	);
};

export default HubTitles;
