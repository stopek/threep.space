import { About } from "../../components/About";
import { Knowledge } from "../../components/Knowledge";
import { Design } from "../../components/Design";
import { Skills } from "../../components/Skills";
import { Stages } from "../../components/Stages";
import { Works } from "../../components/Works";
import React, { ReactElement } from "react";
import { Page } from "../../components/Page";
import Footer from "../../components/Footer";
import { fillRoute, paths } from "../../routing";

export const PortfolioContainer = (): ReactElement => (
	<Page
		seo={{
			title: "seo.portfolio.title",
			description: "seo.portfolio.description",
			canonical: fillRoute(paths.PORTFOLIO_FILTER, { filterId: "all" }),
		}}
		container
	>
		<About />
		<Skills />
		<Knowledge />
		<Stages />
		<Design />
		<Works />
		<Footer />
	</Page>
);
