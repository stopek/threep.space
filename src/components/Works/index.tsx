import React, { ReactElement, useCallback, useContext, useEffect } from "react";
import { HeaderTitle } from "../../ui/HeaderTitle";
import { Filters } from "./components/Filters";
import { Work } from "./components/Work";
import Box from "@mui/material/Box";
import { filters_list } from "../../data";
import { useFilter } from "../../store/filter";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getMultipleStack, isMultipleStack, isStackFilter, stackValue } from "../../common/utils";
import { useApi } from "../../store/api";
import { Loading } from "../../ui/Loading/Loading";
import { Error } from "../../ui/Error";
import Helmet from "../Helmet";
import { scrollToDiv } from "../../helpers/scroll";
import { fillRoute, paths } from "../../routing";
import { SoundContext } from "../../hooks/useSound";

const filters_list_combined = [...filters_list, "latest", "all"];

const redirectFilter = (filterId?: string, projectName?: string): string[] | null => {
	if (!filterId) {
		return null;
	}

	if (filters_list_combined.includes(filterId)) {
		if (projectName) {
			return [filterId, projectName];
		}

		return [filterId];
	}

	if (isStackFilter(filterId)) {
		return [filterId];
	}

	return ["latest"];
};

export const Works = (): ReactElement => {
	const { t } = useTranslation();
	const { filter, handleSetValue } = useFilter();
	const navigate = useNavigate();
	const { filterId, projectName } = useParams();
	const { api, isLoading, hasError, handleFetchWorks } = useApi();
	const sound = useContext(SoundContext);

	const filterWorks = useCallback(
		(filter: string): Type.IWork[] => {
			const works = api.works;

			if (works.length === 0) {
				return [];
			}

			if (isStackFilter(filter)) {
				if (isMultipleStack(filter)) {
					return works.filter(w =>
						w.stack?.some(stackItem => getMultipleStack(filter).includes(stackItem)),
					);
				}

				return works.filter(w => w.stack?.includes(stackValue(filter)));
			} else if (filter === "latest") {
				return works.filter(w => w?.last);
			} else if (filter !== "all") {
				return works.filter(w => w.category?.includes(filter));
			}

			return works;
		},
		[api.works],
	);

	const list = filterWorks(filter.value);

	useEffect(() => {
		handleFetchWorks();
	}, []);

	const scrollToDivCallback = useCallback(
		(elementId: string) => {
			if (isLoading || hasError) {
				return;
			}

			scrollToDiv(elementId);
		},
		[isLoading, hasError],
	);

	const changeFilter = useCallback(
		(value: string[], init?: boolean) => {
			const idDiv = ["portfolio", ...value];
			const redirect = fillRoute(paths.PORTFOLIO) + "/" + value.join("/");

			handleSetValue(value[0]);

			if (init) {
				const project = document.getElementById(idDiv.join("_"));
				if (project) {
					scrollToDivCallback(idDiv.join("_"));
					return;
				}
				scrollToDivCallback(idDiv[0]);
				return;
			}

			navigate(redirect);
			scrollToDivCallback(idDiv.join("_"));
			sound?.tap();
		},
		[navigate, scrollToDivCallback, handleSetValue, sound?.tap],
	);

	const setOnLoad = useCallback(() => {
		const redirect = redirectFilter(filterId, projectName);
		if (null === redirect) {
			return;
		}

		changeFilter(redirect, true);
	}, [filterId, projectName, changeFilter]);

	useEffect(() => {
		setOnLoad();
	}, [setOnLoad]);

	if (!!filterId && !isStackFilter(filterId) && !filters_list_combined.includes(filterId)) {
		return <Navigate to={fillRoute(paths.PORTFOLIO_FILTER, { filterId: "latest" })} />;
	}

	return (
		<Box mt={0} mb={5} id="portfolio">
			<HeaderTitle title={t("txt.portfolio")} />

			{hasError ? (
				<Error />
			) : isLoading ? (
				<Loading />
			) : (
				<>
					<Filters changeFilter={changeFilter} />
					{list.map((item, x) => (
						<Box key={x} id={`portfolio_${item.stack[0]}_${item.slug}`} mb={2}>
							<Helmet
								disabled={item.slug !== projectName}
								title="seo.preview.title"
								description="seo.preview.description"
								bindings={{
									name: item.name,
									description: item.description.en,
									category: item.stack
										.map(i => t(`technologies.${i}`))
										.join(", "),
								}}
								canonical={`/projects/${item.stack[0]}`}
							/>

							<Work {...item} rounded={item.slug === projectName} />
						</Box>
					))}
				</>
			)}
		</Box>
	);
};
