import { ProfilePicture } from "../../ui/ProfilePicture";
import HubTitles from "../../ui/HubTitles";
import { HubMenu } from "../HubMenu";
import Box from "@mui/material/Box";
import React from "react";
import { styled } from "@mui/material";
import Footer from "../Footer";

const FooterContainer = styled(Box)`
	position: absolute;
	bottom: 0;
	z-index: 10;
	padding: 8px;
	min-width: auto;
	gap: 5px;
	display: flex;
	flex-direction: column;
	top: auto;
`;

const Hub = () => (
	<Box display="flex" alignItems="center" flexDirection="column">
		<Box display="flex" flexDirection="column" alignItems="center" component="header">
			<ProfilePicture size={100} />

			<HubTitles />

			<HubMenu size="medium" />
		</Box>

		<FooterContainer component="footer">
			<Footer />
		</FooterContainer>
	</Box>
);

export default Hub;
