import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Collapse, Divider, Grid, IconButtonProps, Stack, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { IStackItem } from "../StackItem";
import { Stack as CStack } from "../Stack";
import { Description } from "./styled";
import { useTranslation } from "react-i18next";
import React from "react";
import TurnSlightRightIcon from "@mui/icons-material/TurnSlightRight";
import { Image } from "../Image";
import Preview from "../../../Preview";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

type TInside =
	| "preview"
	| "storybook"
	| "ui"
	| "docs"
	| "multimedia"
	| "github_backend"
	| "github_front"
	| "archive"
	| "github";

type PartialRecord<K extends keyof any, T> = {
	[P in K]?: T;
};

export interface IWork {
	name: string;
	image?: string;
	description: {
		en: string;
		pl: string;
	};
	about?: {
		en: string;
		pl: string;
	};
	category?: string[];
	stack: IStackItem["name"][];
	order?: number;
	slug: string;
	inside?: PartialRecord<TInside, string>;
	last?: boolean;
	urls?: boolean;
}

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	position: "absolute",
	right: 0,
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export const Work = ({ name, image, description, about, stack = [], inside = {} }: IWork) => {
	const { t } = useTranslation();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => setExpanded(!expanded);

	return (
		<Grid container spacing={3} alignItems="center" sx={{ position: "relative" }}>
			<Grid item xs={12} sm="auto">
				<Image title={name} image={image} />
			</Grid>

			<Grid item xs={12} md position="relative">
				<Box
					display="flex"
					justifyContent="space-between"
					maxWidth="70%"
					position="relative"
				>
					<CardHeader
						sx={{
							"& .MuiTypography-root": { fontSize: "1.4rem", fontWeight: 700 },
							small: {
								fontSize: "0.9rem",
								lineHeight: 0.4,
								display: "block",
								fontWeight: 100,
							},
						}}
						title={name}
						subheader={<CStack list={stack} />}
					/>

					{about?.en && (
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							sx={{ top: 15 }}
						>
							<ExpandMoreIcon />
						</ExpandMore>
					)}
				</Box>

				<Divider style={{ maxWidth: "70%" }} />

				<CardContent>
					<Description variant="body2" color="text.secondary">
						<span dangerouslySetInnerHTML={{ __html: description.en }}></span>
					</Description>

					{about?.en && (
						<Collapse in={expanded} timeout="auto">
							<Description variant="body2" color="text.secondary">
								<span dangerouslySetInnerHTML={{ __html: about.en }}></span>
							</Description>
						</Collapse>
					)}

					{Object.values(inside).length > 0 && (
						<Stack
							direction="row"
							gap={1}
							divider={<Divider orientation="vertical" flexItem />}
							spacing={1}
							mt={1}
						>
							{Object.entries(inside)
								.filter(([k1]) => !["multimedia", "docs"].includes(k1))
								.map(([k, v]) =>
									v.includes("inside.") ? (
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
		</Grid>
	);
};
