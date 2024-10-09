import "./style.scss";
import React, {
	useState,
	useRef,
	useEffect,
	MutableRefObject,
	ReactNode,
	useCallback,
	ReactElement,
} from "react";

import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import useSound from "../../hooks/useSound";
import { NavBackground, ToggleButton } from "./styled";
import { HubMenu } from "../HubMenu";
import CvButton from "../../ui/CvButton";
import { Divider } from "@mui/material";
import { scrollToDiv, scrollTop } from "../../helpers/scroll";

interface IMenuItem {
	url?: string;
	translation: string;
	external?: string;
	current?: boolean;
	div?: string;
}

interface IDial {
	children: ReactNode;
}

interface IDialItem {
	url?: string;
	translation: string;
	div?: string;
}

const items: IDialItem[] = [
	{
		url: "/",
		translation: "txt.home",
	},
	{
		div: "about",
		translation: "txt.about_me",
	},
	{
		div: "portfolio",
		translation: "txt.my_projects",
	},
];

const Dial = ({ children }: IDial): ReactElement => {
	const elemRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const [open, setOpen] = useState<boolean>(false);
	const [scale, setScale] = useState<number>(1);
	const [offsetX, setOffsetX] = useState<number>(0);
	const [offsetY, setOffsetY] = useState<number>(0);

	const { t } = useTranslation();
	const { tap } = useSound();
	const navigate = useNavigate();

	const handleMenuToggle = (value: boolean): void => setOpen(value);

	const calculateValues = (): void => {
		const elem = elemRef.current;
		if (!elem) return;

		const w: number = window.innerWidth;
		const h: number = window.innerHeight;
		const elemH: number = elem.getBoundingClientRect().height;
		const elemW: number = elem.getBoundingClientRect().width;

		const offsetValue: number = Number(
			getComputedStyle(elem).getPropertyValue("--offset-value"),
		);

		const newOffsetX: number = w / 2 - elemW / 2 - offsetValue;
		const newOffsetY: number = h / 2 - elemH / 2 - offsetValue;

		const radius: number = Math.sqrt(h ** 2 + w ** 2);
		const newScale: number = radius / (elemW / 2) / 2 + 0.1;

		setOffsetX(newOffsetX);
		setOffsetY(newOffsetY);
		setScale(newScale);
	};

	const openMenu = useCallback(() => {
		const elem = elemRef.current;
		if (!elem) return;

		document.body.classList.add("disable-scroll");

		elem.style.setProperty("--translate-y", `-${offsetY}px`);
		elem.style.setProperty("--scale", scale.toString());
	}, [offsetY, scale]);

	const closeMenu = useCallback(() => {
		const elem = elemRef.current;
		if (!elem) return;

		document.body.classList.remove("disable-scroll");

		elem.style.setProperty("--scale", "1");
		elem.style.setProperty("--translate-x", "0");
		elem.style.setProperty("--translate-y", "0");

		setOpen(false);
	}, []);

	const toggleMenu = (): void => setOpen(prevOpen => !prevOpen);

	const onClick = (target: IMenuItem): void => {
		tap();

		handleMenuToggle(false);
		scrollTop();

		if (target.external) {
			document.location.href = target.external;
			return;
		} else if (target.url) {
			navigate(target.url);
			return;
		} else if (target.div) {
			scrollToDiv(target.div);
			return;
		}
	};

	useEffect(() => {
		calculateValues();
		window.addEventListener("resize", calculateValues);

		return () => {
			window.removeEventListener("resize", calculateValues);
		};
	}, []);

	useEffect(() => {
		if (open) {
			openMenu();
			return;
		}

		closeMenu();
	}, [open, offsetX, offsetY, scale, openMenu, closeMenu]);

	return (
		<>
			<NavBackground ref={elemRef} className="btn bg" />

			<ToggleButton
				id="toggle-btn"
				onClick={toggleMenu}
				className={`btn ${open ? "shown" : ""}`}
				sx={{ boxShadow: theme => theme.shadows[10] }}
			>
				<span></span>
				<span></span>
				<span></span>
			</ToggleButton>

			<div className="wrapper">
				<nav>
					<ul>
						{items.map((v, k) => (
							<li key={k}>
								<Link
									className="link"
									onClick={() => onClick(v)}
									color="inherit"
									style={{ textDecoration: "none" }}
								>
									{t(v.translation)}
								</Link>
							</li>
						))}

						<li>
							<Divider sx={{ marginTop: 5 }} />
							<HubMenu size="small" onClick={closeMenu} />
						</li>

						<li>
							<CvButton />
						</li>
					</ul>
				</nav>

				<div id="content">{children}</div>
			</div>
		</>
	);
};

export default Dial;

// const Dial: React.FC = () => {
// 	const { t } = useTranslation();
// 	const { tap } = useSound();
// 	const navigate = useNavigate();
//
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
//
// 	const closeMenu = () => setIsMenuOpen(false);
// 	const handleMenuToggle = (value: boolean) => setIsMenuOpen(value);
// 	const onClick = (target: IMenuItem) => {
// 		tap();
//
// 		handleMenuToggle(false);
//
// 		window.scrollTo(0, 0);
//
// 		if (target.external) {
// 			document.location.href = target.url;
// 			return;
// 		}
//
// 		navigate(target.url);
// 	};
//
// 	const items = [
// 		{
// 			url: "/",
// 			text: "Home",
// 		},
// 	];
//
// 	return (
// 		<div className={`viewport ${isMenuOpen ? "open" : ""}`}>
// 			<nav id="nav" className={`nav ${isMenuOpen ? "nav--open" : ""}`} role="navigation">
// 				<List
// 					sx={{
// 						width: "100%",
// 						textAlign: "center",
// 						fontSize: "2rem",
// 					}}
// 					aria-label="menu"
// 					hidden={!isMenuOpen}
// 					className="nav__menu"
// 				>
// 					{Object.entries(items).map(([k, v]) => (
// 						<ListItem divider key={k}>
// 							<ListItemButton onClick={() => onClick(v)}>
// 								<ListItemText
// 									primary={v.text}
// 									primaryTypographyProps={{
// 										fontSize: "1.8rem",
// 										fontWeight: "300",
// 										textAlign: "center",
// 									}}
// 								/>
// 							</ListItemButton>
// 						</ListItem>
// 					))}
//
// 					<ListItem
// 						sx={{
// 							alignItems: "center",
// 							justifyContent: "center",
// 							py: 2,
// 						}}
// 					>
// 						<CvButton
// 							variant="contained"
// 							color="info"
// 							disableElevation
// 							disableFocusRipple
// 							onClick={() => {
// 								document.location.href = "/static/pdf/cv.pdf";
// 							}}
// 						>
// 							{t("txt.get_cv")}
// 						</CvButton>
// 					</ListItem>
// 				</List>
//
// 				<HubMenu onClick={closeMenu} />
//
// 				<MenuIcon open={isMenuOpen} onClick={handleMenuToggle} />
// 				<Splash className="splash" />
// 			</nav>
// 		</div>
// 	);
// };
//
// export default Dial;
