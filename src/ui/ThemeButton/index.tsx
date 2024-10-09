import React, { ReactElement } from "react";
import { useSettings } from "../../store/settings";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import useSound from "../../hooks/useSound";
import { StyledButton } from "./styled";

export const ThemeButton = (): ReactElement => {
	const { handleSetTheme, isDark } = useSettings();
	const { on, off } = useSound();

	const toggleTheme = () => handleSetTheme(isDark ? "light" : "dark");

	return (
		<StyledButton
			aria-label="change theme"
			color="inherit"
			sx={{ borderRadius: "50%" }}
			onClick={() => {
				if (isDark) {
					on();
				} else {
					off();
				}

				toggleTheme();
			}}
		>
			{isDark ? (
				<Brightness3Icon fontSize="small" />
			) : (
				<WbSunnyRoundedIcon fontSize="small" />
			)}
		</StyledButton>
	);
};
