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
	<Typography variant="h5" component="h3" fontWeight={700}>
		<Link
			to={fillRoute(paths.PORTFOLIO_PREVIEW, { filterId: category[0], projectName: slug })}
			component={RouterLink}
			sx={{
				color: ({ palette }) => palette.text.primary,
				paddingRight: 3,
			}}
		>
			{name}
		</Link>
	</Typography>
);

export default ProjectName;
