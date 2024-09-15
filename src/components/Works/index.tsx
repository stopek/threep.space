import { HeaderTitle } from "../HeaderTitle";
import { Filters } from "./components/Filters";
import { Work } from "./components/Work";
import Box from "@mui/material/Box";
import { works_list } from "../../data";
import { useFilter } from "../../store/filter";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";

const filterWorks = (filter: string) => {
	let list = works_list.sort((a, b) => (a?.order && b?.order ? b?.order - a?.order : 0));

	if (filter === "latest") {
		return list.filter(w => w?.last);
	} else if (filter === "old") {
		return list.filter(w => w?.old);
	} else if (filter !== "all") {
		return list.filter(w => w.category?.includes(filter));
	}

	return list;
};

export const Works = () => {
	const { t } = useTranslation();
	const { filter } = useFilter();
	const list = filterWorks(filter.value);

	return (
		<Box mt={5} mb={10} id="portfolio">
			<HeaderTitle title={t("txt.portfolio")} />
			<Filters />

			<Grid container spacing={8} mt={1}>
				{list.map((item, x) => (
					<Grid item xs={12} key={x}>
						<Work {...item} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
