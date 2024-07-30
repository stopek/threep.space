import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Dial from "../Dial";
import { ThemeButton } from "../ThemeButton";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

interface IPage {
	elements?: ReactNode;
	keywords?: string;
	disableNav?: boolean;
	container?: boolean;
	seo: {
		title: string;
		description: string;
		full?: boolean;
	};
}

const FullSize = styled(Box)`
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
`;

const translate = (t: TFunction, seo: IPage["seo"]): IPage["seo"] => ({
	...seo,
	title: t(seo.title),
	description: t(seo.description),
});

export const Page = ({
	children,
	elements,
	container,
	disableNav,
	seo,
}: PropsWithChildren<IPage>): JSX.Element => {
	const { t } = useTranslation();
	const location = useLocation();

	let { title, description } = translate(t, seo);

	useEffect(() => {
		ReactGA.send({
			hitType: "pageview",
			page: location.pathname,
			title,
		});
	}, [location]);

	return (
		<HelmetProvider>
			{!disableNav && (
				<>
					<Dial />
					<ThemeButton />
				</>
			)}

			<Helmet>
				<meta name="description" content={description} />
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />

				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />

				<meta property="og:site_name" content="Paweł Stopczyński | FullStack Developer" />
				{elements}
			</Helmet>

			{container ? (
				<Container maxWidth="xl">{children}</Container>
			) : (
				<FullSize>{children}</FullSize>
			)}
		</HelmetProvider>
	);
};
