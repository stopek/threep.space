import { Page } from "../../components/Page";
import React from "react";
import Hub from "../../components/Hub";

export const HubContainer = () => (
	<Page seo={{ title: "seo.hub.title", description: "seo.hub.description" }} disableNav>
		<Hub />
	</Page>
);
