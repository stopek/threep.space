import React from "react";
import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { isStackFilter, stackValue } from "../../../../common/utils";

export const StackItem = ({ name }: Type.IStackItem) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { filterId } = useParams();

	const goToStack = (name: string) => navigate(`/portfolio/stack:${name}`);

	const isStack = isStackFilter(filterId);
	const currentStack = stackValue(filterId);

	const isCurrentStack = (name: string): boolean => (isStack && currentStack === name) || false;

	return (
		<Chip
			size="small"
			sx={{ fontWeight: 100 }}
			label={t(`technologies.${name}`)}
			variant={isCurrentStack(name) ? "outlined" : "filled"}
			color={isCurrentStack(name) ? "primary" : "default"}
			clickable
			onClick={() => goToStack(name)}
		/>
	);
};
