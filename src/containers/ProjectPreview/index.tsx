import { About } from "../../components/About";
import { Knowledge } from "../../components/Knowledge";
import { Design } from "../../components/Design";
import { Skills } from "../../components/Skills";
import { Stages } from "../../components/Stages";
import { Works } from "../../components/Works";
import React from "react";
import { Page } from "../../components/Page";
import Footer from "../../components/Footer";

export const ProjectPreview = () => {
	return (
		<Page
			seo={{
				title: "seo.portfolio.title",
				description: "seo.portfolio.description",
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
};
