import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { hub_urls } from "../../data";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { IHubMenu } from "./types";
import { SoundContext } from "../../hooks/useSound";

export const HubMenu = ({ size = "inherit", onClick }: IHubMenu): ReactElement => {
	const sound = useContext(SoundContext);

	const onButtonClick = (): void => {
		sound?.tap();

		if (onClick) {
			onClick();
		}

		window.scrollTo(0, 0);
	};

	return (
		<BottomNavigation
			sx={{
				background: "transparent",
				display: "flex",
				flexWrap: "wrap",
				mt: 5,
				gap: 1,
			}}
			showLabels
		>
			{hub_urls.map(({ label, Icon, url, to, margin }, key) =>
				url ? (
					<BottomNavigationAction
						key={key}
						label={label}
						value={label}
						style={{
							display: "flex",
							flex: 0,
							marginLeft: margin,
							marginRight: margin,
						}}
						icon={<Icon fontSize={size} />}
						onClick={onButtonClick}
						href={url}
						target="_blank"
					/>
				) : to ? (
					<BottomNavigationAction
						key={key}
						component={Link}
						to={to}
						label={label}
						value={label}
						style={{
							display: "flex",
							flex: 0,
							marginLeft: margin,
							marginRight: margin,
						}}
						icon={<Icon fontSize={size} />}
						onClick={onButtonClick}
					/>
				) : (
					""
				),
			)}
		</BottomNavigation>
	);
};
