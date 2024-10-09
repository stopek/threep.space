import React, { ReactElement } from "react";
import { HeaderTitle } from "../../ui/HeaderTitle";
import { Grid } from "@mui/material";
import { DesignItem } from "./components/DesignItem";
import { design_items } from "../../data";
import { useTranslation } from "react-i18next";

export const Design = (): ReactElement => {
	const { t } = useTranslation();

	return (
		<>
			<HeaderTitle title={t("txt.design")} />

			<Grid container spacing={5} mb={10}>
				{design_items.map((design, x) => (
					<Grid item sm={6} md={4} xs={12} key={x}>
						<DesignItem {...design} />
					</Grid>
				))}
			</Grid>
		</>
	);
};
