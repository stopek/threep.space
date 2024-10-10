import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../../store/filter";
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
	const navigate = useNavigate();
	const { handleSetValue } = useFilter();

	const onClickName = () => {
		navigate(fillRoute(paths.PORTFOLIO_PREVIEW, { filterId: category[0], projectName: slug }));
		handleSetValue(category[0]);
	};

	return (
		<span style={{ cursor: "pointer" }} onClick={onClickName}>
			{name}
		</span>
	);
};

export default ProjectName;
