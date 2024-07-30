import { ProfilePicture } from "../../ProfilePicture";
import HubTitles from "../../../components/HubTitles";
import { HubMenu } from "../../HubMenu";
import Box from "@mui/material/Box";
import React from "react";
import { Divider, styled } from "@mui/material";
import { Footer } from "../../Footer";

const FooterContainer = styled(Box)`
	position: absolute;
	bottom: 0;
	z-index: 10;
	padding: 8px;
	min-width: auto;
	gap: 5px;
	display: flex;
	flex-direction: column;
`;

const Hub = () => (
	<Box
		display="flex"
		alignItems="center"
		justifyContent="center"
		flexDirection="column"
		height="100vh"
	>
		<ProfilePicture size={100} />

		<HubTitles />

		<HubMenu size="medium" />

		<FooterContainer>
			<Footer />
		</FooterContainer>
	</Box>
);

export default Hub;
