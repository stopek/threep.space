import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export interface IStage {
	icon: string;
	name: string;
	description: string;
}

export const Stage = ({ icon, name, description }: IStage) => {
	const { t } = useTranslation();

	return (
		<Card
			sx={{
				display: "flex",
				gap: 2,
				alignItems: "center",
				p: 2,
				borderRadius: 5,
				width: "100%",
			}}
		>
			<img src={icon} alt={name} />
			<Box>
				<Typography gutterBottom variant="h5" component="div">
					{t(`technologies.${name}`)}
				</Typography>

				<Typography variant="body2" color="text.secondary">
					{t(`stages.${name}`)}
				</Typography>
			</Box>
		</Card>
	);
};
