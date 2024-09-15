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
	inside?: PartialRecord<Type.TInsideUrls, string>;
	last?: boolean;
	old?: boolean;
	urls?: boolean;
}

interface ExpandMoreProps extends IconButtonProps {
	expand: number;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	return <IconButton {...props} />;
})(({ theme, expand }) => ({
	position: "absolute",
	right: 0,
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const ProjectName = ({ name }: { name: string }) => {
	return <span>{name}</span>;
};

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
					sx={{ maxWidth: { sm: "70%" } }}
				>
					<CardHeader
						sx={{
							"& .MuiTypography-root": { fontSize: "1.4rem", fontWeight: 700 },
						}}
						title={<ProjectName name={name} />}
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

				<Divider sx={{ maxWidth: { sm: "70%" } }} />

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
								v.startsWith("/simple") ? (
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
