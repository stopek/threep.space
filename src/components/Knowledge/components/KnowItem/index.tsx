import Typography from "@mui/material/Typography";

export interface IKnowItem {
	title: string;
	description: string;
}

export const KnowItem = ({ title, description }: IKnowItem) => {
	return (
		<div>
			<Typography gutterBottom variant="h5" component="div">
				{title}
			</Typography>
			<Typography variant="body2" mb={2}>
				{description}
			</Typography>
		</div>
	);
};
