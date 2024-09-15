import React from "react";
import { useSettings } from "../../store/settings";
import { styled } from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Button from "@mui/material/Button";
import useSound from "../../hooks/useSound";

const StyledButton = styled(Button)`
	position: fixed;
	right: 20px;
	top: 20px;
	z-index: 10;
	padding: 8px;
	min-width: auto;
`;

export const ThemeButton = () => {
	const { handleSetTheme, settings } = useSettings();
	const { on, off } = useSound();

	const isDark = () => settings.theme === "dark";
	const toggleTheme = () => handleSetTheme(isDark() ? "light" : "dark");

	return (
		<StyledButton
			aria-label="change theme"
			color="inherit"
			sx={{ borderRadius: "50%" }}
			onClick={() => {
				if (isDark()) {
					on();
				} else {
					off();
				}

				toggleTheme();
			}}
		>
			{isDark() ? (
				<Brightness3Icon fontSize="small" />
			) : (
				<WbSunnyRoundedIcon fontSize="small" />
			)}
		</StyledButton>
	);
};
