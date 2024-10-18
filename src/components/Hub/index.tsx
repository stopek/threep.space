import { ProfilePicture } from "../../ui/ProfilePicture";
import HubTitles from "../../ui/HubTitles";
import { HubMenu } from "../HubMenu";
import Box from "@mui/material/Box";
import React, { ReactElement } from "react";
import Footer from "../Footer";
import { FooterContainer } from "./styles";

const Hub = (): ReactElement => (
	<Box display="flex" alignItems="center" flexDirection="column">
		<Box display="flex" flexDirection="column" alignItems="center" component="header">
			<ProfilePicture size={100} />

			<HubTitles />

			<HubMenu size="small" />
		</Box>

		<FooterContainer component="footer">
			<Footer />
		</FooterContainer>
	</Box>
);

export default Hub;
