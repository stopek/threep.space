import React from "react";
import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";

export const StackItem = ({ name }: Type.IStackItem) => {
	const { t } = useTranslation();

	return (
		<Chip
			size="small"
			sx={{ fontWeight: 100 }}
			label={t(`technologies.${name}`)}
			variant="filled"
		/>
	);
};
