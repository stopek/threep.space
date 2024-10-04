import React, { useCallback, useEffect } from "react";
import { HeaderTitle } from "../../ui/HeaderTitle";
import { Filters } from "./components/Filters";
import { IWork, Work } from "./components/Work";
import Box from "@mui/material/Box";
import { filters_list, works_list } from "../../data";
import { useFilter } from "../../store/filter";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSound from "../../hooks/useSound";

const filterWorks = (filter: string): IWork[] => {
	const list = works_list.sort((a, b) => (a?.order && b?.order ? b?.order - a?.order : 0));

	if (filter === "latest") {
		return list.filter(w => w?.last);
	} else if (filter === "old") {
		return list.filter(w => w?.old);
	} else if (filter !== "all") {
		return list.filter(w => w.category?.includes(filter));
	}

	return list;
};

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

	return ["latest"];
};

export const Works = () => {
	const { t } = useTranslation();
	const { filter, handleSetValue } = useFilter();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { filterId, projectName } = useParams();
	const { tap } = useSound();
	const list = filterWorks(filter.value);

	const scrollToDiv = useCallback((elementId: string) => {
		console.log({ scrollTo: elementId });
		const element = document.getElementById(elementId);
		if (!element) {
			return;
		}

		window.scroll({
			top: element.offsetTop - 50,
			behavior: "smooth",
		});
	}, []);

	const changeFilter = (value: string[], init?: boolean) => {
		const idDiv = ["portfolio", ...value];
		const redirect = "/portfolio/" + value.join("/");

		handleSetValue(value[0]);
		console.log({ value, idDiv });

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
	};

	useEffect(() => {
		const redirect = redirectFilter(filterId, projectName);
		if (null === redirect) {
			return;
		}

		changeFilter(redirect, true);
	}, [pathname]);

	return (
		<Box mt={0} mb={0} id="portfolio">
			<HeaderTitle title={t("txt.portfolio")} />
			<Filters changeFilter={changeFilter} />

			{list.map((item, x) => (
				<Box key={x} id={`portfolio_${item.stack[0]}_${item.slug}`} mb={2}>
					<Work {...item} rounded={item.slug === projectName} />
				</Box>
			))}
		</Box>
	);
};
