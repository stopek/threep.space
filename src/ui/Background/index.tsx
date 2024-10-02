import React from "react";
import { Container, Content, Spinner } from "./styled";
import { BoxProps } from "@mui/material";

export const Background = (props: BoxProps) => (
	<Container {...props}>
		<Content>
			<Spinner />
		</Content>
	</Container>
);
