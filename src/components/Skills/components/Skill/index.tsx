import React, { ReactElement } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export interface ISkill {
	name: Type.TSkill;
	percentage: number;
}

export const Skill = ({ name, percentage }: ISkill): ReactElement => {
	const { t } = useTranslation();

	return (
		<article>
			<Gauge
				height={100}
				value={percentage}
				startAngle={-110}
				endAngle={110}
				sx={{
					[`& .${gaugeClasses.valueText}`]: {
						fontSize: 16,
						transform: "translate(0px, 0px)",
					},
					[`& .${gaugeClasses.valueArc}`]: ({ palette }) => ({
						fill: palette.primary,
					}),
				}}
				text={({ value }) => `${value}%`}
			/>

			<Typography variant="h5" component="h3" textAlign="center" paddingTop={3}>
				{t(`technologies.${name}`)}
			</Typography>

			<Typography variant="body2" textAlign="center" padding={1}>
				{t(`skills.${name}`)}
			</Typography>
		</article>
	);
};
