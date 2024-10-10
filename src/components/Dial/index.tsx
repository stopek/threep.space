import "./style.scss";
import React, {
	useState,
	useRef,
	useEffect,
	MutableRefObject,
	ReactNode,
	useCallback,
	ReactElement,
	useContext,
} from "react";

import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { NavBackground, ToggleButton } from "./styled";
import { HubMenu } from "../HubMenu";
import CvButton from "../../ui/CvButton";
import { Divider } from "@mui/material";
import { scrollToDiv, scrollTop } from "../../helpers/scroll";
import { dialog_menu_list } from "../../data";
import { SoundContext } from "../../hooks/useSound";

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

export interface IDialItem {
	url?: string;
	translation: string;
	div?: string;
}

const Dial = ({ children }: IDial): ReactElement => {
	const elemRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const [open, setOpen] = useState<boolean>(false);
	const [scale, setScale] = useState<number>(1);
	const [offsetX, setOffsetX] = useState<number>(0);
	const [offsetY, setOffsetY] = useState<number>(0);

	const { t } = useTranslation();
	const sound = useContext(SoundContext);
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

		sound?.menu();
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
		sound?.tap();

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
						{dialog_menu_list.map((v, k) => (
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
