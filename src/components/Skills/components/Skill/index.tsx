import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export interface ISkill {
	name: string;
	percentage: number;
}

export const Skill = ({ name, percentage }: ISkill) => {
	const { t } = useTranslation();

	return (
		<Box display="flex" gap={2} flexDirection="column" alignItems="center">
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

			<Typography variant="h5" textAlign="center">
				{t(`technologies.${name}`)}
			</Typography>

			<Typography variant="body2" textAlign="center">
				{t(`skills.${name}`)}
			</Typography>
		</Box>
	);
};
