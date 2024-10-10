import React, { ReactElement, useContext, useRef, useState } from "react";
import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { isCurrentStack, stackArray } from "../../../../common/utils";
import { fillRoute, paths } from "../../../../routing";
import { SoundContext } from "../../../../hooks/useSound";

export const StackItem = ({ name }: Type.IStackItem): ReactElement => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { filterId } = useParams();
	const sound = useContext(SoundContext);

	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
	const isLongPress = useRef(false);

	const existsInStackFilter = isCurrentStack(filterId, name);

	const addStack = (): void => {
		sound?.check();
		navigate(
			fillRoute(paths.PORTFOLIO_STACK, {
				stackName: Array.from(new Set(stackArray(filterId).concat(name))).join(","),
			}),
		);
	};

	const goToStack = (): void => {
		if (!isLongPress.current) {
			sound?.check();
			navigate(fillRoute(paths.PORTFOLIO_STACK, { stackName: name }));
		}
	};

	const handleMouseDown = (): void => {
		isLongPress.current = false;
		const timer = setTimeout(() => {
			isLongPress.current = true;
			addStack();
		}, 500);
		setTimerId(timer);
	};

	const handleMouseUp = (): void => {
		if (timerId) {
			clearTimeout(timerId);
			setTimerId(null);
		}
	};

	return (
		<Chip
			size="small"
			sx={{ fontWeight: 100 }}
			label={t(`technologies.${name}`)}
			variant={existsInStackFilter ? "outlined" : "filled"}
			color={existsInStackFilter ? "primary" : "default"}
			clickable
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onClick={goToStack}
		/>
	);
};
