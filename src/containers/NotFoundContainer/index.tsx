import React, { ReactElement } from "react";
import { Page } from "../../components/Page";
import NotFound from "../../components/NotFound";

export const NotFoundContainer = (): ReactElement => (
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
