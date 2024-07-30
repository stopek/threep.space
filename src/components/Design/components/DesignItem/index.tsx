import Typography from "@mui/material/Typography";

import { BorderLinearProgress } from "../../../BorderLinearProgress";

export interface IDesignItem {
	name: string;
	description: string;
}

export const DesignItem = ({ name, description }: IDesignItem) => {
	return (
		<>
			<Typography variant="h5">{name}</Typography>

			<BorderLinearProgress variant="determinate" value={75} />

			<Typography variant="body2" my={2}>
				{description}
			</Typography>
		</>
	);
};
