import { Paper, styled } from "@mui/material";

export const ImageContainer = styled(Paper)<{ image?: string }>(({ image }) => ({
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

export const HoverImage = styled("img")(() => ({
	position: "absolute",
	minHeight: "100%",
	width: "100%",
	transition: "transform 1s ease-in-out",
	zIndex: 0,
	objectFit: "cover",
	"&:hover": {
		transform: "translateY(calc(-100% + 350px))",
		transition: "transform 1s ease-in-out",
	},
}));
