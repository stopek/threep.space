import React from "react";
import { Page } from "../../components/Page";
import NotFound from "../../components/sections/NotFound";

export const NotFoundContainer = () => (
	<Page
		seo={{
			title: "seo.not_found.title",
			description: "seo.not_found.description",
			full: true,
		}}
		disableNav
	>
		<NotFound />
	</Page>
);
