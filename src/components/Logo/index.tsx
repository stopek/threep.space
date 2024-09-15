import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const Logo = () => {
	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<Toolbar sx={{ justifyContent: "center" }}>
			<CodeOffIcon sx={{ display: { md: "flex" }, mr: 1 }} />
			<Typography
				variant="h6"
				noWrap
				component={Link}
				onClick={scrollToTop}
				to="/"
				sx={{
					display: { md: "flex" },
					fontFamily: "monospace",
					fontWeight: 500,
					letterSpacing: ".3rem",
					color: "inherit",
					textDecoration: "none",
				}}
			>
				threep
			</Typography>
		</Toolbar>
	);
};

export default Logo;
