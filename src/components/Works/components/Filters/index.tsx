import { Filter } from "../Filter";
import { Paper } from "@mui/material";
import { filters_list } from "../../../../data";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useFilter } from "../../../../store/filter";
import React from "react";
import { useParams } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import GradingIcon from "@mui/icons-material/Grading";

interface IFilters {
	changeFilter: (value: string[], init?: boolean) => void;
}

export const Filters = ({ changeFilter }: IFilters) => {
	const { filter } = useFilter();
	const { t } = useTranslation();
	const { filterId } = useParams();

	return (
		<>
			{filterId && (
				<Helmet>
					<title>
						{t("seo.portfolio.title")} · {t(`technologies.${filter.value}`)}
					</title>
				</Helmet>
			)}

			<Paper
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
					mb: 5,
					display: "flex",
					alignItems: "center",
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

				<Box sx={{ gap: 1, flexWrap: "wrap", px: 0, py: 0 }} gap={1} display="flex">
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
				</Box>
			</Paper>
		</>
	);
};
