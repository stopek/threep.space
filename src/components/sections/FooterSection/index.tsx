import { Footer } from "../../Footer";
import Logo from "../../Logo";
import React from "react";
import Box from "@mui/material/Box";

const FooterSection = () => (
	<Box alignItems="center" justifyContent="center" mt={20} display="flex" flexDirection="column">
		<Footer />
		<Logo />
	</Box>
);

export default FooterSection;
