import React, { ReactElement, useContext } from "react";
import { useSettings } from "../../store/settings";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { StyledButton } from "./styled";
import { SoundContext } from "../../hooks/useSound";

export const ThemeButton = (): ReactElement => {
	const { handleSetTheme, isDark } = useSettings();
	const sound = useContext(SoundContext);

	const toggleTheme = () => handleSetTheme(isDark ? "light" : "dark");

	return (
		<StyledButton
			aria-label="change theme"
			color="inherit"
			sx={{ borderRadius: "50%" }}
			onClick={() => {
				if (isDark) {
					sound?.on();
				} else {
					sound?.off();
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
