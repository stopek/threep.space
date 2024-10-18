import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { hub_urls } from "../../data";
import {
	BottomNavigation,
	BottomNavigationAction,
	BottomNavigationActionProps,
} from "@mui/material";
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
				background: { xs: "transparent" },
				display: "flex",
				flexWrap: "wrap",
				height: "auto",
				mt: 5,
				gap: 3,
			}}
			showLabels
		>
			{hub_urls.map(({ label, Icon, url, to, margin }, key) => {
				const props: Partial<
					BottomNavigationActionProps<
						"button",
						{ href: string; target: string; to: string }
					>
				> = {
					label,
					value: label,
					onClick: onButtonClick,
					icon: <Icon fontSize={margin ? "large" : size} />,
					style: {
						display: "flex",
						flex: 0,
					},
					sx: {
						marginLeft: { sm: margin },
						marginRight: { sm: margin },
					},
				};

				if (url) {
					props.href = url;
					props.target = "_blank";
				} else if (to) {
					props.component = Link;
					props.to = to;
				}

				return <BottomNavigationAction key={key} {...props} />;
			})}
		</BottomNavigation>
	);
};
