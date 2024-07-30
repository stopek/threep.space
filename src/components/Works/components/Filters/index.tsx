import { Filter } from "../Filter";
import { ListItem, Paper } from "@mui/material";
import { filters_list } from "../../../../data";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ExpandIcon from "@mui/icons-material/Expand";
import { useFilter } from "../../../../store/filter";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { scrollToDiv } from "../../../../common/utils";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import useSound from "../../../../hooks/useSound";

const filters_list_combined = [...filters_list, "latest", "all"];

export const Filters = () => {
	const { t } = useTranslation();
	const { filter, handleSetValue } = useFilter();
	const navigate = useNavigate();
	const { filterId } = useParams();
	const { play } = useSound();

	const changeFilter = (value: string, init?: boolean) => {
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

		play("tap");
	};

	useEffect(() => {
		if (filterId) {
			if (!filters_list_combined.includes(filterId)) {
				changeFilter("latest", true);
				return;
			}

			changeFilter(filterId, true);
		}
	}, []);

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
					borderRadius: 5,
					opacity: 1,
					padding: 0,
					margin: 0,
					mx: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box p={1} alignItems="center" justifyContent="center">
					<FilterAltIcon sx={{ display: { xs: "none", sm: "flex" } }} color="disabled" />
				</Box>

				<ListItem sx={{ gap: 1, flexWrap: "wrap", px: 0 }}>
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
						icon={<ExpandIcon />}
						onClick={changeFilter}
						activeName={filter.value}
					/>
				</ListItem>
			</Paper>
		</>
	);
};
