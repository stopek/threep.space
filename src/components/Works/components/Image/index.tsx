import Box from "@mui/material/Box";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import React from "react";
import { HoverImage, ImageContainer } from "./styled";

interface IImage {
	image?: string;
	title: string;
}

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
