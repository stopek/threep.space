import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface IStackItem {
	name: string;
	url?: string;
}

export const StackItem = ({ name }: IStackItem) => {
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
