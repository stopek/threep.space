import React, { ReactElement, ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { simpleProjects } from "../../simple";

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

const getNameFromSource = (src: string): string => {
	const split = src.split("/");
	return split[split.length - 1];
};

export default function Preview({ children, src }: IPreview): ReactElement {
	const [open, setOpen] = React.useState(false);
	const [currentSrc, setCurrentSrc] = useState<string>(src);
	const [template, setTemplate] = useState<string>("index");

	const name = getNameFromSource(currentSrc);

	const handleClickOpen = () => setOpen(true);
	const handleChangeTemplate = (event: SelectChangeEvent) => setTemplate(event.target.value);
	const handleClose = () => setOpen(false);
	const handleChange = (event: SelectChangeEvent) => {
		setCurrentSrc(event.target.value);
		setTemplate("index");
	};

	const getIframeSource = () => {
		if (currentSrc.startsWith("http")) {
			return currentSrc;
		}

		return `https://inside.threep.space${currentSrc}/${template === "index" ? "" : template}`;
	};

	const iframeSource = getIframeSource();

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
						<Typography sx={{ ml: 2, flex: 4 }} variant="h6" component="div">
							{name}
						</Typography>

						{simpleProjects[currentSrc] && (
							<FormControl sx={{ ml: 2, flex: 2, m: 1, minWidth: 120 }}>
								<InputLabel id="demo-simple-select-helper-label">
									Project
								</InputLabel>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={currentSrc}
									label="Project"
									onChange={handleChange}
								>
									{Object.keys(simpleProjects).map((simple, k) => {
										return (
											<MenuItem value={simple} key={k}>
												{getNameFromSource(simple)}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
						)}

						{currentSrc &&
							simpleProjects[currentSrc] &&
							simpleProjects[currentSrc].length > 1 && (
								<FormControl sx={{ ml: 2, flex: 2, m: 1 }}>
									<InputLabel id="demo-simple-select-helper-label2">
										Template
									</InputLabel>
									<Select
										labelId="demo-simple-select-helper-label2"
										id="demo-simple-select-helper2"
										value={template}
										label="Template"
										onChange={handleChangeTemplate}
									>
										{simpleProjects[currentSrc].map((template, x) => (
											<MenuItem key={x} value={template}>
												{template}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}

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
					key={currentSrc}
					title={`preview ${template}`}
					src={iframeSource}
					style={{
						width: "100%",
						height: "100%",
						border: 0,
						background: "white",
					}}
				/>
			</Dialog>
		</React.Fragment>
	);
}
