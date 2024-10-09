import { Filter } from "../Filter";
import { Chip, Paper } from "@mui/material";
import { filters_list } from "../../../../data";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useFilter } from "../../../../store/filter";
import React, { ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import GradingIcon from "@mui/icons-material/Grading";
import {
	getMultipleStack,
	isMultipleStack,
	isStackFilter,
	stackValue,
} from "../../../../common/utils";

interface IFilters {
	changeFilter: (value: string[], init?: boolean) => void;
}

export const Filters = ({ changeFilter }: IFilters): ReactElement => {
	const { filter } = useFilter();
	const { t } = useTranslation();
	const { filterId } = useParams();

	const navigate = useNavigate();
	const clearStackFiltering = () => navigate("/portfolio/latest");

	const isStack = isStackFilter(filterId);
	const isMultiple = isMultipleStack(filterId);
	const multipleStack = getMultipleStack(filterId);

	const clearFromMultiple = (name: string): void => {
		const filtered = multipleStack.filter(v => v !== name);

		navigate(`/portfolio/stack:${filtered.join(",")}`);
	};

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
					top: 5,
					zIndex: 1,
					borderRadius: 3,
					opacity: 0.96,
					padding: 0.5,
					margin: 0,
					mx: 0,
					mb: 5,
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					sx={{ gap: 1, flexWrap: "wrap", px: 0, py: 0, width: "100%" }}
					gap={1}
					display="flex"
				>
					<Filter
						disabled={isStack}
						name="latest"
						icon={<AccessTimeFilledIcon />}
						activeName={isStack ? "" : filter.value || "latest"}
						onClick={changeFilter}
					/>

					{filters_list.map((f, x) => (
						<Filter
							disabled={isStack}
							key={x}
							name={f}
							activeName={filter.value}
							onClick={changeFilter}
							filter
						/>
					))}

					<Filter
						disabled={isStack}
						name="all"
						icon={<GradingIcon />}
						onClick={changeFilter}
						activeName={filter.value}
					/>

					<Filter
						disabled={isStack}
						name="old"
						icon={<CatchingPokemonIcon />}
						onClick={changeFilter}
						activeName={filter.value}
					/>

					{isStack &&
						(isMultiple ? (
							<Box marginLeft="auto" display="flex" gap={1}>
								{multipleStack.map((element, index) => (
									<Chip
										key={index}
										label={t(`technologies.${element}`)}
										sx={{ px: 1, borderRadius: "11px" }}
										onDelete={() => clearFromMultiple(element)}
										color="primary"
										variant="outlined"
										clickable
									/>
								))}
							</Box>
						) : (
							<Chip
								label={t(`technologies.${stackValue(filterId)}`)}
								sx={{ px: 1, borderRadius: "11px" }}
								onDelete={clearStackFiltering}
								style={{ marginLeft: "auto" }}
								color="primary"
								variant="outlined"
								clickable
							/>
						))}
				</Box>
			</Paper>
		</>
	);
};
