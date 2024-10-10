import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Collapse, Divider, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack as CStack } from "../Stack";
import { Description, ExpandMore, ItemGrid } from "./styled";
import { useTranslation } from "react-i18next";
import React, { ReactElement, useEffect, useState } from "react";
import TurnSlightRightIcon from "@mui/icons-material/TurnSlightRight";
import { Image } from "../Image";
import Preview from "../../../Preview";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import ProjectName from "../ProjectName";

interface IWorkComponent extends Type.IWork {
	rounded?: boolean;
}

export const Work = ({
	name,
	image,
	description,
	about,
	stack = [],
	inside = {},
	rounded,
	category,
	slug,
}: IWorkComponent): ReactElement => {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = (): void => setExpanded(!expanded);

	useEffect(() => {
		if (rounded) {
			setExpanded(true);
		}
	}, [rounded]);

	return (
		<ItemGrid
			container
			spacing={3}
			alignItems="center"
			sx={{ position: "relative" }}
			rounded={Number(rounded)}
		>
			<Grid item sm={12} md="auto">
				<Image title={name} image={image} />
			</Grid>

			<Grid item sm={12} md position="relative">
				<Box
					display="flex"
					justifyContent="space-between"
					maxWidth="80%"
					position="relative"
					sx={{ maxWidth: { md: "80%" } }}
				>
					<CardHeader
						title={<ProjectName slug={slug} category={category} name={name} />}
						subheader={<CStack list={stack} />}
					/>

					{about?.en && (
						<ExpandMore
							expand={Number(expanded)}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							sx={{ top: 15 }}
						>
							<ExpandMoreIcon />
						</ExpandMore>
					)}
				</Box>

				<Divider sx={{ maxWidth: { md: "80%" } }} />

				<CardContent>
					{about?.en && (
						<Collapse in={expanded} timeout="auto">
							<Description variant="body2" color="text.secondary">
								<span dangerouslySetInnerHTML={{ __html: about.en }}></span>
							</Description>
						</Collapse>
					)}

					<Description variant="body2" color="text.secondary">
						<span dangerouslySetInnerHTML={{ __html: description.en }}></span>
					</Description>

					{Object.values(inside).length > 0 && (
						<Stack
							direction="row"
							gap={1}
							divider={<Divider orientation="vertical" flexItem />}
							spacing={1}
							mt={1}
						>
							{Object.entries(inside).map(([k, v]) =>
								v.startsWith("/") ? (
									<Preview src={v} key={k}>
										{t(`urls.${k}`)}
									</Preview>
								) : (
									<Button
										key={k}
										variant="contained"
										color="primary"
										href={v}
										endIcon={<TurnSlightRightIcon />}
										target="_blank"
										sx={{ borderRadius: 15 }}
									>
										{t(`urls.${k}`)}
									</Button>
								),
							)}
						</Stack>
					)}
				</CardContent>
			</Grid>
		</ItemGrid>
	);
};
