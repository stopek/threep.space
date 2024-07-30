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
	top: 80px;
	z-index: 10;
	padding: 8px;
	min-width: auto;
`;

export const ThemeButton = () => {
	const { handleSetTheme, settings } = useSettings();
	const { play } = useSound();

	const isDark = () => settings.theme === "dark";
	const currentSet = () => handleSetTheme(isDark() ? "light" : "dark");

	return (
		<StyledButton
			aria-label="change theme"
			color="inherit"
			sx={{ borderRadius: "50%" }}
			variant="outlined"
			onClick={() => play(isDark() ? "on" : "off")?.then(currentSet)}
		>
			{isDark() ? (
				<Brightness3Icon fontSize="small" />
			) : (
				<WbSunnyRoundedIcon fontSize="small" />
			)}
		</StyledButton>
	);
};
