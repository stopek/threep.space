import { Link } from "react-router-dom";

import React, { ReactElement } from "react";
import { paths, fillRoute } from "../../../../routing";

const ProjectName = ({
	name,
	slug,
	category,
}: {
	name: string;
	slug: string;
	category: string[];
}): ReactElement => {
	return (
		<Link
			to={fillRoute(paths.PORTFOLIO_PREVIEW, { filterId: category[0], projectName: slug })}
			style={{ cursor: "pointer" }}
		>
			{name}
		</Link>
	);
};

export default ProjectName;
