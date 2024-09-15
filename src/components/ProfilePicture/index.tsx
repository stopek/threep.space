import React from "react";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IProfilePicture {
	size: number;
}

export const ProfilePicture = ({ size }: IProfilePicture) => {
	const { t } = useTranslation();

	return (
		<Avatar
			alt={t("about.name") + " - " + t("about.role")}
			src="/static/images/profile_picture.jpg"
			sx={{ width: size, height: size, display: "inline-flex" }}
		/>
	);
};
