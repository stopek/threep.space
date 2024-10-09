import React, { ReactElement } from "react";
import Typography from "@mui/material/Typography";

export interface IKnowItem {
	title: string;
	description: string;
}

export const KnowItem = ({ title, description }: IKnowItem): ReactElement => (
	<article>
		<Typography gutterBottom variant="h5" component="h3">
			{title}
		</Typography>
		<Typography variant="body2" mb={2}>
			{description}
		</Typography>
	</article>
);
