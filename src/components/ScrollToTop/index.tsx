import React, { useCallback } from "react";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import Box from "@mui/material/Box";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTop = () => {
	const trigger = useScrollTrigger({
		threshold: 100,
	});

	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<Zoom in={trigger}>
			<Box
				role="presentation"
				sx={{
					position: "fixed",
					bottom: 22,
					right: 22,
					zIndex: 1,
				}}
			>
				<Fab
					onClick={scrollToTop}
					color="primary"
					size="small"
					aria-label="Scroll back to top"
				>
					<KeyboardArrowUp fontSize="medium" />
				</Fab>
			</Box>
		</Zoom>
	);
};

export default ScrollToTop;
