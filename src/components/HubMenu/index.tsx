import { Link } from "react-router-dom";
import useSound from "../../hooks/useSound";
import { SvgIconOwnProps, SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { hub_urls } from "../../data";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

interface IHubMenu {
	size?: SvgIconOwnProps["fontSize"];
	onClick?: () => void;
}

interface IBaseMenuItem {
	Icon: OverridableComponent<SvgIconTypeMap>;
	label: string;
}

export type TMenuItem =
	| (IBaseMenuItem & { url: string; to?: never })
	| (IBaseMenuItem & { to: string; url?: never });

export const HubMenu = ({ size = "inherit", onClick }: IHubMenu) => {
	const { tap } = useSound();

	const onButtonClick = () => {
		tap();

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
				mt: 2,
				gap: 1,
			}}
			showLabels
		>
			{hub_urls.map(({ label, Icon, url, to }, key) =>
				url ? (
					<BottomNavigationAction
						key={key}
						label={label}
						value={label}
						style={{
							display: "flex",
							flex: 0,
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
