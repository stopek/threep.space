import React, { ReactElement } from "react";
import { paths, fillRoute } from "../../../../routing";
import Link from "@mui/material/Link";

import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const ProjectName = ({
	name,
	slug,
	category,
}: {
	name: string;
	slug: string;
	category: string[];
}): ReactElement => (
	<Link
		to={fillRoute(paths.PORTFOLIO_PREVIEW, { filterId: category[0], projectName: slug })}
		component={RouterLink}
		sx={{
			color: ({ palette }) => palette.text.primary,
			paddingRight: 3,
		}}
	>
		<Typography variant="h5" component="span" fontWeight={700}>
			{name}
		</Typography>
	</Link>
);

export default ProjectName;
