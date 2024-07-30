import React from "react";
import { StyledMenuIcon } from "./styled";
import useSound from "../../../../hooks/useSound";

interface IMenuIcon {
	open: boolean;
	onClick: (value: boolean) => void;
}
export const MenuIcon = ({ open, onClick }: IMenuIcon) => {
	const { play } = useSound();

	return (
		<StyledMenuIcon
			className="nav__toggle"
			role="button"
			aria-expanded={open ? "true" : "false"}
			aria-controls="menu"
			onClick={event => {
				event.preventDefault();
				onClick(!open);

				if (!open) {
					play("menu");
				}
			}}
		>
			<svg
				className="menuicon"
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 50 50"
			>
				<title>Toggle Menu</title>
				<g>
					<line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
					<line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
					<line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
					<line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />
					<circle className="menuicon__circle" r="23" cx="25" cy="25" />
				</g>
			</svg>
		</StyledMenuIcon>
	);
};
