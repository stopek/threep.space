import Box from "@mui/material/Box";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import React from "react";
import { Paper, styled } from "@mui/material";

interface IImage {
	image?: string;
	title: string;
}

const ImageContainer = styled(Paper)<{ image?: string }>(({ image }) => ({
	position: "relative",
	borderRadius: "20px",
	maxWidth: "100%",
	overflow: "hidden",
	height: 350,
	transition: "transform 1s cubic-bezier(0.17, 0.67, 0.61, 0.65)",
	"&:hover": image && {
		backdropFilter: "contrast(25%)",
	},
}));

const HoverImage = styled("img")`
	position: absolute;
	min-height: 100%;
	width: 100%;
	transition: transform 1s ease-in-out;
	z-index: 0;
	object-fit: cover;

	&:hover {
		transform: translateY(calc(-100% + 350px));
		transition: transform 1s ease-in-out;
	}
`;

export const Image = ({ image, title }: IImage) => (
	<ImageContainer sx={{ width: { xs: "100%", sm: 500 } }} image={image?.toString()} elevation={2}>
		{image ? (
			<HoverImage src={process.env.REACT_APP_R2 + image} alt={title} loading="lazy" />
		) : (
			<Box display="flex" alignItems="center" justifyContent="center" height="100%">
				<ImagesearchRollerIcon />
			</Box>
		)}
	</ImageContainer>
);
