import "./style.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { HubMenu } from "../HubMenu";
import { MenuIcon } from "./components/MenuIcon";
import { CvButton, Splash } from "./styled";
import useSound from "../../hooks/useSound";

interface IMenuItem {
	url: string;
	text: string;
	external?: boolean;
	current?: boolean;
}

const Dial: React.FC = () => {
	const { t } = useTranslation();
	const { play } = useSound();
	const navigate = useNavigate();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);
	const handleMenuToggle = (value: boolean) => setIsMenuOpen(value);
	const onClick = (target: IMenuItem) => {
		play("tap");

		handleMenuToggle(false);

		window.scrollTo(0, 0);

		if (target.external) {
			document.location.href = target.url;
			return;
		}

		navigate(target.url);
	};

	const items = [
		{
			url: "/",
			text: "Home",
		},
	];

	return (
		<div className={`viewport ${isMenuOpen ? "open" : ""}`}>
			<nav id="nav" className={`nav ${isMenuOpen ? "nav--open" : ""}`} role="navigation">
				<List
					sx={{
						width: "100%",
						textAlign: "center",
						fontSize: "2rem",
					}}
					aria-label="menu"
					hidden={!isMenuOpen}
					className="nav__menu"
				>
					{Object.entries(items).map(([k, v]) => (
						<ListItem divider key={k}>
							<ListItemButton onClick={() => onClick(v)}>
								<ListItemText
									primary={v.text}
									primaryTypographyProps={{
										fontSize: "1.8rem",
										fontWeight: "300",
										textAlign: "center",
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}

					<ListItem
						sx={{
							alignItems: "center",
							justifyContent: "center",
							py: 2,
						}}
					>
						<CvButton
							variant="contained"
							color="info"
							disableElevation
							disableFocusRipple
							onClick={() => {
								document.location.href = "/static/pdf/cv.pdf";
							}}
						>
							{t("txt.get_cv")}
						</CvButton>
					</ListItem>
				</List>

				<HubMenu onClick={closeMenu} />

				<MenuIcon open={isMenuOpen} onClick={handleMenuToggle} />
				<Splash className="splash" />
			</nav>
		</div>
	);
};

export default Dial;
