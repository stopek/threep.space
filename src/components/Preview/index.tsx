import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ReactNode } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface IPreview {
	children: ReactNode;
	src: string;
}

export default function Preview({ children, src }: IPreview) {
	const [open, setOpen] = React.useState(false);

	const split = src.split("/");
	const name = split[split.length - 1];
	const path = src;

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button
				variant="contained"
				color="success"
				sx={{ borderRadius: 15 }}
				startIcon={<ZoomInIcon />}
				onClick={handleClickOpen}
			>
				{children}
			</Button>
			<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							{name}
						</Typography>
						<IconButton
							edge="end"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>

				<iframe
					key={path}
					src={path}
					style={{
						width: "100%",
						height: "100%",
						border: 0,
					}}
				/>
			</Dialog>
		</React.Fragment>
	);
}
