import React, { PropsWithChildren, ReactElement } from "react";
import { HelmetProvider } from "react-helmet-async";
import Dial from "../Dial";
import Container from "@mui/material/Container";
import Helmet, { IHelmet } from "../Helmet";

interface IPage {
	keywords?: string;
	disableNav?: boolean;
	container?: boolean;
	seo: IHelmet;
}

export const Page = ({
	children,
	container,
	disableNav,
	seo,
}: PropsWithChildren<IPage>): ReactElement => {
	const containedPage = container ? <Container maxWidth="xl">{children}</Container> : children;

	return (
		<HelmetProvider>
			<Helmet {...seo} />

			{!disableNav ? <Dial>{containedPage}</Dial> : <>{containedPage}</>}
		</HelmetProvider>
	);
};
