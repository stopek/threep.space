import React from "react";
import { Chip } from "@mui/material";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export interface IFilter {
	name: string;
	icon?: ReactElement;
	activeName?: string | null;
	filter?: boolean;
	onClick: (name: string) => any;
}

export const Filter = ({ name, icon, activeName, filter, onClick }: IFilter) => {
	const { t } = useTranslation();

	return (
		<Chip
			icon={icon}
			label={filter ? t(`technologies.${name}`) : t(`txt.${name}`)}
			sx={{ px: 2 }}
			color={activeName === name ? "primary" : "default"}
			clickable
			onClick={() => onClick(name)}
		/>
	);
};
