import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Link } from "react-router-dom";

const Logo = () => (
	<Toolbar sx={{ justifyContent: "center" }}>
		<CodeOffIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
		<Typography
			variant="h6"
			noWrap
			component={Link}
			to="/"
			sx={{
				display: { xs: "none", md: "flex" },
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

export default Logo;
