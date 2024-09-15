import React from "react";
import { HeaderTitle } from "../HeaderTitle";
import { Stage } from "./components/Stage";
import { Grid } from "@mui/material";
import { stages_list } from "../../data";

export const Stages = () => (
	<>
		<HeaderTitle title="Stages" />

		<Grid container spacing={5} mb={10}>
			{stages_list.map((stage, x) => (
				<Grid item md={6} lg={3} xs={12} display="flex" key={x}>
					<Stage {...stage} />
				</Grid>
			))}
		</Grid>
	</>
);
