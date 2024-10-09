import { SvgIconOwnProps, SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IHubMenu {
	size?: SvgIconOwnProps["fontSize"];
	onClick?: () => void;
}

export interface IBaseMenuItem {
	Icon: OverridableComponent<SvgIconTypeMap>;
	label: string;
	margin?: number;
}

export type TMenuItem =
	| (IBaseMenuItem & { url: string; to?: never })
	| (IBaseMenuItem & { to: string; url?: never });
