import { Page } from "../../components/Page";
import React, { ReactElement } from "react";
import Hub from "../../components/Hub";

export const HubContainer = (): ReactElement => (
	<Page seo={{ title: "seo.hub.title", description: "seo.hub.description" }} disableNav>
		<Hub />
	</Page>
);
