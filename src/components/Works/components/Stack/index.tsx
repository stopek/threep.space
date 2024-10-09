import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import { StackItem } from "../StackItem";

export interface IStack {
	list: Type.IStackItem["name"][];
}

export const Stack = ({ list }: IStack): ReactElement => (
	<Box display="flex" gap={1} flexWrap="wrap">
		{list.map((stack, x) => (
			<StackItem key={x} name={stack} />
		))}
	</Box>
);
