import { Filter } from "../Filter";
import { ListItem, Paper } from "@mui/material";
import { filters_list } from "../../../../data";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useFilter } from "../../../../store/filter";
import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import useSound from "../../../../hooks/useSound";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import GradingIcon from "@mui/icons-material/Grading";

const filters_list_combined = [...filters_list, "latest", "all", "old"];

export const Filters = () => {
	const { t } = useTranslation();
	const { filter, handleSetValue } = useFilter();
	const navigate = useNavigate();
	const { filterId } = useParams();
	const { tap } = useSound();

	const scrollToDiv = useCallback((elementId: string) => {
		const element = document.getElementById(elementId);
		if (!element) {
			return;
		}

		window.scroll({
			top: element.offsetTop,
			behavior: "smooth",
		});
	}, []);

	const changeFilter = useCallback(
		(value: string, init?: boolean) => {
			scrollToDiv("portfolio");
			navigate("/portfolio/" + value);
			handleSetValue(value);

			ReactGA.send({
				hitType: "pageview",
				page: document.location.href,
				title: "works:" + value,
			});

			if (init) {
				return;
			}

			tap();
		},
		[navigate, scrollToDiv, handleSetValue, tap],
	);

	useEffect(() => {
		if (filterId) {
			if (!filters_list_combined.includes(filterId)) {
				changeFilter("latest", true);
				return;
			}

			changeFilter(filterId, true);
		}
	}, [filterId, changeFilter]);

	return (
		<>
			{filterId && (
				<Helmet>
					<title>Projects » {t(`technologies.${filter.value}`)}</title>
				</Helmet>
			)}

			<Paper
				component="ul"
				elevation={1}
				sx={{
					position: "sticky",
					top: 15,
					zIndex: 1,
					borderRadius: 3,
					opacity: 1,
					padding: 0.5,
					margin: 0,
					mx: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box
					p={1}
					alignItems="center"
					justifyContent="center"
					sx={{ display: { xs: "none", sm: "flex" } }}
				>
					<FilterAltIcon color="disabled" />
				</Box>

				<ListItem sx={{ gap: 1, flexWrap: "wrap", px: 0, py: 0 }}>
					<Filter
						name="latest"
						icon={<AccessTimeFilledIcon />}
						activeName={filter.value || "latest"}
						onClick={changeFilter}
					/>

					{filters_list.map((f, x) => (
						<Filter
							key={x}
							name={f}
							activeName={filter.value}
							onClick={changeFilter}
							filter
						/>
					))}

					<Filter
						name="all"
						icon={<GradingIcon />}
						onClick={changeFilter}
						activeName={filter.value}
					/>

					<Filter
						name="old"
						icon={<CatchingPokemonIcon />}
						onClick={changeFilter}
						activeName={filter.value}
					/>
				</ListItem>
			</Paper>
		</>
	);
};
