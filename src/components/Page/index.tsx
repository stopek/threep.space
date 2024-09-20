import React, { PropsWithChildren, ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Dial from "../Dial";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import Container from "@mui/material/Container";

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

	const { title, description } = translate(t, seo);

	const containedPage = container ? <Container maxWidth="xl">{children}</Container> : children;

	return (
		<HelmetProvider>
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

			{!disableNav ? <Dial>{containedPage}</Dial> : <>{containedPage}</>}
		</HelmetProvider>
	);
};
