import Box from "@mui/material/Box";
import { IStackItem, StackItem } from "../StackItem";

export interface IStack {
	list: IStackItem["name"][];
}

export const Stack = ({ list }: IStack) => (
	<Box display="flex" gap={1} flexWrap="wrap">
		{list.map((stack, x) => (
			<StackItem key={x} name={stack} />
		))}
	</Box>
);
