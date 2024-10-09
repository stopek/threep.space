import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { StyledButton } from "./styled";

const CvButton = (): ReactElement => {
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
