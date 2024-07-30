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
	const { play } = useSound();

	const onButtonClick = () =>
		play("tap")?.then(() => {
			if (onClick) {
				onClick();
			}

			window.scrollTo(0, 0);
		});

	return (
		<BottomNavigation
			sx={{
				background: "transparent",
				display: "flex",
				flexWrap: "wrap",
				mt: 2,
				gap: 3,
			}}
			showLabels
		>
			{hub_urls.map(({ label, Icon, url, to }, key) =>
				url ? (
					<BottomNavigationAction
						label={label}
						value={label}
						style={{
							display: "flex",
							width: 80,
							height: 80,
							flex: 0,
							borderRadius: "50%",
						}}
						icon={<Icon fontSize="medium" />}
						onClick={onButtonClick}
						href={url}
						target="_blank"
					/>
				) : to ? (
					<BottomNavigationAction
						component={Link}
						to={to}
						label={label}
						value={label}
						style={{
							display: "flex",
							width: 80,
							height: 80,
							flex: 0,
							borderRadius: "50%",
						}}
						icon={<Icon fontSize="medium" />}
						onClick={onButtonClick}
					/>
				) : (
					""
				),
			)}
		</BottomNavigation>
	);
};
