import React, { ReactElement } from "react";
import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { isCurrentStack } from "../../../../common/utils";
import { fillRoute, paths } from "../../../../routing";

export const StackItem = ({ name }: Type.IStackItem): ReactElement => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { filterId } = useParams();

	const goToStack = (): void => navigate(fillRoute(paths.PORTFOLIO_STACK, { stackName: name }));

	const existsInStackFilter = isCurrentStack(filterId, name);

	return (
		<Chip
			size="small"
			sx={{ fontWeight: 100 }}
			label={t(`technologies.${name}`)}
			variant={existsInStackFilter ? "outlined" : "filled"}
			color={existsInStackFilter ? "primary" : "default"}
			clickable
			onClick={goToStack}
		/>
	);
};
