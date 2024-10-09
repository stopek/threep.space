import React, { ReactElement } from "react";
import { HeaderTitle } from "../../ui/HeaderTitle";
import { Skill } from "./components/Skill";
import { Grid } from "@mui/material";
import { skillsData } from "../../data";
import { useTranslation } from "react-i18next";

export const Skills = (): ReactElement => {
	const { t } = useTranslation();

	const sortedSkills = skillsData.sort((a, b) => b.percentage - a.percentage);

	return (
		<>
			<HeaderTitle title={t("txt.skills")} />

			<Grid container spacing={6} justifyContent="center" mb={10}>
				{sortedSkills.map((skill, x) => (
					<Grid item lg={3} md={4} sm={6} xs={12} key={x}>
						<Skill {...skill} />
					</Grid>
				))}
			</Grid>
		</>
	);
};
