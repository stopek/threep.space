import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../../store/filter";
import React, { ReactElement } from "react";

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
		navigate("/portfolio/" + category[0] + "/" + slug);
		handleSetValue(category[0]);
	};

	return (
		<span style={{ cursor: "pointer" }} onClick={onClickName}>
			{name}
		</span>
	);
};

export default ProjectName;
