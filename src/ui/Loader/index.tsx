import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = () => (
	<Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open>
		<CircularProgress color="inherit" />
	</Backdrop>
);
