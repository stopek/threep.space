import React, { useCallback, useEffect } from "react";
import { HeaderTitle } from "../../ui/HeaderTitle";
import { Filters } from "./components/Filters";
import { Work } from "./components/Work";
import Box from "@mui/material/Box";
import { filters_list } from "../../data";
import { useFilter } from "../../store/filter";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import useSound from "../../hooks/useSound";
import { getMultipleStack, isMultipleStack, isStackFilter, stackValue } from "../../common/utils";
import { useApi } from "../../store/api";
import { Loading } from "../../ui/Loading/Loading";
import { Error } from "../../ui/Error";

const filters_list_combined = [...filters_list, "latest", "all", "old"];

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

export const Works = () => {
	const { t } = useTranslation();
	const { filter, handleSetValue } = useFilter();
	const navigate = useNavigate();
	const { filterId, projectName } = useParams();
	const { api, isLoading, hasError, handleFetchWorks } = useApi();
	const { tap } = useSound();

	const filterWorks = useCallback(
		(filter: string): Type.IWork[] => {
			const works = api.works;

			if (works.length === 0) {
				return [];
			}

			if (isStackFilter(filter)) {
				if (isMultipleStack(filter)) {
					const multipleStackValue = getMultipleStack(filter);
					return works.filter(w =>
						w.stack?.some(stackItem => multipleStackValue.includes(stackItem)),
					);
				}

				return works.filter(w => w.stack?.includes(stackValue(filter)));
			} else if (filter === "latest") {
				return works.filter(w => w?.last);
			} else if (filter === "old") {
				return works.filter(w => w?.old);
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

	const scrollToDiv = useCallback(
		(elementId: string) => {
			const element = document.getElementById(elementId);
			if (!element) {
				return;
			}

			if (isLoading || hasError) {
				return;
			}

			window.scroll({
				top: element.offsetTop - 50,
				behavior: "smooth",
			});
		},
		[isLoading],
	);

	const changeFilter = useCallback(
		(value: string[], init?: boolean) => {
			const idDiv = ["portfolio", ...value];
			const redirect = "/portfolio/" + value.join("/");

			handleSetValue(value[0]);

			if (init) {
				const project = document.getElementById(idDiv.join("_"));
				if (project) {
					scrollToDiv(idDiv.join("_"));
					return;
				}
				scrollToDiv(idDiv[0]);
				return;
			}

			navigate(redirect);
			scrollToDiv(idDiv.join("_"));
			tap();
		},
		[navigate, scrollToDiv, handleSetValue, tap],
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

	console.log({ api });

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
							<Work {...item} rounded={item.slug === projectName} />
						</Box>
					))}
				</>
			)}
		</Box>
	);
};
