import React from "react";
import { HeaderTitle } from "../../ui/HeaderTitle";
import { Grid } from "@mui/material";
import { KnowItem } from "./components/KnowItem";
import { knowledge_items } from "../../data";

export const Knowledge = () => (
	<div>
		<HeaderTitle title="Knowledge" />

		<Grid container spacing={5} mb={10}>
			{knowledge_items.map((item, x) => (
				<Grid item md={4} key={x}>
					<KnowItem {...item} />
				</Grid>
			))}
		</Grid>
	</div>
);
