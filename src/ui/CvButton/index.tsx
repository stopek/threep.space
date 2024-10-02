import React from "react";
import { useTranslation } from "react-i18next";

import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(() => ({
	borderRadius: 130,
	padding: "5px 50px",
}));

const CvButton = () => {
	const { t } = useTranslation();

	return (
		<StyledButton
			variant="contained"
			size="small"
			disableElevation
			disableFocusRipple
			onClick={() => {
				document.location.href = "../../../static/pdf/cv.pdf";
			}}
		>
			{t("txt.get_cv")}
		</StyledButton>
	);
};

export default CvButton;
