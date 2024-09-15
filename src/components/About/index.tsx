import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ProfilePicture } from "../ProfilePicture";
import { Animation, Description } from "./styled";

export const About = () => {
	const { t } = useTranslation();

	return (
		<Grid
			container
			columnSpacing={12}
			justifyContent="center"
			alignItems="center"
			zIndex={1}
			mt={2}
			mb={2}
			minHeight="50vh"
			id="about"
		>
			<Grid item py={5}>
				<ProfilePicture size={200} />
			</Grid>

			<Grid item md={8}>
				<Typography variant="h3" fontWeight={900} textAlign="left" mb={3}>
					{t("about.welcome")}
					<Animation>{t("about.role")}</Animation>
				</Typography>

				<Grid container spacing={3}>
					<Grid item md={6}>
						<Description variant="body2">{t("about.first")}</Description>
					</Grid>

					<Grid item md={6}>
						<Description variant="body2">{t("about.second")}</Description>
					</Grid>

					<Grid item md={12}>
						<Description variant="body2">
							{t("about.hobby")}
							<a
								href="https://www.instagram.com/purpur.thecat/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t("cat.profile")}
							>
								{t("cat.name")}
							</a>
						</Description>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
