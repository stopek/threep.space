// import React, { useEffect, useRef, useState } from "react";
// import "./style.scss";
//
// import Button from "@mui/material/Button";
// import { Avatar, CardActions, Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import IconButton from "@mui/material/IconButton";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import Card from "@mui/material/Card";
// import { red } from "@mui/material/colors";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
//
// export const MusicContainer: React.FC = () => {
// 	const audioRef = useRef<HTMLAudioElement | null>(null);
// 	const canvasRef = useRef<HTMLCanvasElement | null>(null);
// 	let analyser: AnalyserNode | undefined;
// 	let context: AudioContext | undefined;
// 	let source: MediaElementAudioSourceNode | undefined;
//
// 	const [bars, setBars] = useState<number>(100);
// 	const step = 1;
// 	const barsRef = useRef<number>(bars);
//
// 	const start = () => {
// 		try {
// 			if (!audioRef.current || !canvasRef.current) return;
//
// 			context = new (window.AudioContext || (window as any).webkitAudioContext)();
// 			analyser = context.createAnalyser();
//
// 			if (!source) {
// 				source = context.createMediaElementSource(audioRef.current);
// 				source.connect(analyser);
// 				analyser.connect(context.destination);
// 			}
//
// 			const canvas = canvasRef.current;
//
// 			const ctx = canvas.getContext("2d");
// 			if (ctx) {
// 				frameLooper(ctx, canvas);
// 			}
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	};
//
// 	// const mainCircleMouseMove = (
// 	// 	event: MouseEvent,
// 	// 	ctx: CanvasRenderingContext2D,
// 	// 	circle: Path2D,
// 	// ) => {
// 	// 	// Check whether point is inside circle
// 	// 	if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
// 	// 		ctx.fillStyle = "green";
// 	// 	} else {
// 	// 		ctx.fillStyle = "red";
// 	// 	}
// 	//
// 	// 	ctx.fill(circle);
// 	// };
//
// 	const frameLooper = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
// 		requestAnimationFrame(() => frameLooper(ctx, canvas));
// 		if (!analyser) return;
//
// 		const fbcArray = new Uint8Array(analyser.frequencyBinCount);
// 		analyser.getByteFrequencyData(fbcArray);
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		ctx.beginPath();
//
// 		const fromTop = canvas.height / 2;
// 		const grad = ctx.createLinearGradient(0, fromTop - 300, 0, fromTop + 100);
// 		grad.addColorStop(0, "white");
// 		grad.addColorStop(1, "transparent");
// 		ctx.fillStyle = grad;
// 		ctx.fillRect(0, fromTop, canvas.width, 500);
//
// 		for (let i = 0; i < barsRef.current * step; i += step) {
// 			const width = Math.floor(document.body.offsetWidth / barsRef.current);
// 			const barX = i * width + width / 2;
// 			const circleSize = Math.round(fbcArray[i] * 10) / 10;
// 			const yPos = document.body.offsetHeight / 2;
// 			const opacity = Math.round(Math.min(1, Math.max(0, 7 / circleSize)) * 100) / 100;
//
// 			ctx.beginPath();
// 			ctx.arc(barX, yPos, 1, 0, 2 * Math.PI);
// 			ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
// 			ctx.fill();
//
// 			if (showCircleRef.current) {
// 				ctx.beginPath();
// 				ctx.arc(barX, yPos, circleSize, 0, 2 * Math.PI);
// 				ctx.fillStyle = `rgba(251, 100, 0, ${opacity})`;
// 				ctx.fill();
// 			}
//
// 			if (showLineUpRef.current) {
// 				ctx.beginPath();
// 				ctx.roundRect(barX - width / 4, yPos - 1, width / 2, -circleSize + 2, [0, 0, 5, 5]);
// 				ctx.fillStyle = `rgba(0, 0, 0, .1)`;
// 				ctx.fill();
// 			}
//
// 			if (showLineDownRef.current) {
// 				ctx.beginPath();
// 				ctx.roundRect(barX - width / 4, yPos + 1, width / 2, circleSize - 2, [0, 0, 5, 5]);
// 				ctx.fillStyle = `rgba(255, 255, 255, .1)`;
// 				ctx.fill();
// 			}
// 		}
// 	};
//
// 	const init = () => {
// 		audioRef.current
// 			?.play()
// 			.catch()
// 			.then(() => {
// 				console.log("Start playing");
// 			});
// 	};
//
// 	useEffect(() => {
// 		barsRef.current = bars; // Uaktualnij referencję przy zmianie stanu
// 	}, [bars]);
//
// 	useEffect(() => {
// 		const canvas = canvasRef.current;
// 		if (!canvas) {
// 			return;
// 		}
//
// 		canvas.width = document.body.offsetWidth;
// 		canvas.height = document.body.offsetHeight;
//
// 		const ctx = canvas.getContext("2d");
// 		if (!ctx) {
// 			return;
// 		}
//
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
//
// 		const fromTop = canvas.height / 2;
// 		const grad = ctx.createLinearGradient(0, fromTop - 300, 0, fromTop + 100);
// 		grad.addColorStop(0, "white");
// 		grad.addColorStop(1, "transparent");
// 		ctx.fillStyle = grad;
// 		ctx.fillRect(0, fromTop, canvas.width, 500);
//
// 		for (let i = 0; i < barsRef.current * step; i += step) {
// 			const width = Math.floor(document.body.offsetWidth / bars);
// 			const barX = i * width + width / 2;
// 			const yPos = document.body.offsetHeight / 2;
//
// 			ctx.beginPath();
// 			ctx.arc(barX, yPos, 1, 0, 2 * Math.PI);
// 			ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
// 			ctx.fill();
// 		}
//
// 		if (!audioRef || !audioRef.current) {
// 			return;
// 		}
// 	}, [audioRef, canvasRef, barsRef.current]);
// 	const showCircleRef = useRef<boolean>(true); // Domyślnie true
// 	const showLineUpRef = useRef<boolean>(true); // Domyślnie true
// 	const showLineDownRef = useRef<boolean>(true); // Domyślnie true
// 	return (
// 		<>
// 			<div id="mp3_player" style={{ display: "none" }}>
// 				<div id="audio_box">
// 					<audio
// 						ref={audioRef}
// 						crossOrigin="anonymous"
// 						src="/static/audio/bg.mp3"
// 						controls={true}
// 						loop={true}
// 						autoPlay={false}
// 						onPlaying={start}
// 					/>
// 				</div>
// 			</div>
// 			<canvas ref={canvasRef} id="analyser_render" />
//
// 			<Card
// 				sx={{
// 					position: "absolute",
// 					width: "100%",
// 					bottom: 0,
// 					zIndex: 100,
// 				}}
// 			>
// 				<CardHeader
// 					avatar={
// 						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
// 							R
// 						</Avatar>
// 					}
// 					action={
// 						<IconButton onClick={init}>
// 							<PlayArrowIcon />
// 						</IconButton>
// 					}
// 					title="Shrimp and Chorizo Paella"
// 					subheader="September 14, 2016"
// 				/>
//
// 				<CardContent>
// 					<Slider
// 						valueLabelDisplay="on"
// 						step={step}
// 						value={bars}
// 						onChange={(_, value) =>
// 							setBars(typeof value === "number" ? value : value[0])
// 						}
// 						min={1}
// 						max={1024}
// 					/>
//
// 					<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
// 						<span>
// 							<Checkbox
// 								defaultChecked
// 								onChange={e => (showCircleRef.current = e.target.checked)}
// 							/>{" "}
// 							Show Circle
// 						</span>
// 						<span>
// 							<Checkbox
// 								defaultChecked
// 								onChange={e => (showLineUpRef.current = e.target.checked)}
// 							/>{" "}
// 							Show Line Up
// 						</span>
// 						<span>
// 							<Checkbox
// 								defaultChecked
// 								onChange={e => (showLineDownRef.current = e.target.checked)}
// 							/>{" "}
// 							Show Line Down
// 						</span>
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</>
// 	);
// };
import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	Checkbox,
	FormControl,
	IconButton,
	InputBase,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Slider,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";

function getRandomInt(min: number, max: number): number {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);

	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

interface Config {
	bars: number;
	circleEnabled: boolean;
	downLineEnabled: boolean;
	upLineEnabled: boolean;
	upLineColor: string;
	downLineColor: string;
	effect: string;
	step: number;
	matrix: [string, string, string, string];
}

const gradient = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
	const fromTop = canvas.height / 2;
	const grad = ctx.createLinearGradient(0, fromTop - 200, 0, fromTop + 200);
	grad.addColorStop(0, "rgb(251, 100, 0)");
	grad.addColorStop(1, "transparent");
	ctx.fillStyle = grad;
	ctx.fillRect(0, fromTop - 10, canvas.width, 500);
};

export const MusicContainer = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	let source: MediaElementAudioSourceNode | undefined;
	let analyser: AnalyserNode | undefined;
	let context: AudioContext | undefined;

	const [config, setConfig] = useState<Config>({
		bars: 100,
		circleEnabled: true,
		downLineEnabled: true,
		upLineEnabled: true,
		upLineColor: "#FFF",
		downLineColor: "#000",
		effect: "goo",
		step: 1,
		matrix: ["1 0 0 0 0", "0 1 0 0 0", "0 0 1 0 0", "0 0 0 18 -7"],
	});

	const setMatrix = (value: string, index: number) =>
		setConfig(prev => {
			const matrix = prev.matrix;
			matrix[index] = value;
			return {
				...prev,
				matrix,
			};
		});

	const configRef = useRef<Config>(config);
	const start = () => {
		if (!audioRef.current || !canvasRef.current) return;
		context = new (window.AudioContext || (window as any).webkitAudioContext)();
		analyser = context.createAnalyser();

		if (!source) {
			source = context.createMediaElementSource(audioRef.current);
			source.connect(analyser);
			analyser.connect(context.destination);
		}

		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (ctx) {
			frameLooper(ctx, canvas);
		}
	};

	const frameLooper = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
		requestAnimationFrame(() => frameLooper(ctx, canvas));
		if (!analyser) return;

		const fbcArray = new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData(fbcArray);

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const data: {
			width: number;
			barX: number;
			circleSize: number;
			yPos: number;
			opacity: number;
		}[] = [];

		const total = Math.ceil(configRef.current.bars / configRef.current.step);
		const documentWidth = document.body.offsetWidth;
		const documentHeight = document.body.offsetHeight;

		const forTo = configRef.current.bars * configRef.current.step;
		for (let i = 0; i < forTo; i += configRef.current.step) {
			const width = documentWidth / total;
			const barX = i * width + width / 2;
			const circleSize = fbcArray[i];
			const yPos = documentHeight / 2;
			const opacity = Math.round(Math.min(1, Math.max(0, 5 / circleSize)) * 100) / 100;

			data[i] = {
				barX,
				width,
				circleSize,
				yPos,
				opacity,
			};
		}

		gradient(ctx, canvas);

		if (configRef.current.circleEnabled) {
			data.forEach(({ barX, yPos, opacity, circleSize }) => {
				ctx.beginPath();
				ctx.fillStyle = `rgba(251, 100, 0, ${opacity})`;
				ctx.arc(barX, yPos - 10, circleSize, 0, 2 * Math.PI);
				ctx.fill();
			});
		}

		if (configRef.current.upLineEnabled) {
			ctx.beginPath();
			ctx.fillStyle = configRef.current.upLineColor;
			ctx.globalAlpha = 0.4;
			data.forEach(({ barX, yPos, width, circleSize }) => {
				ctx.roundRect(barX - width / 4, yPos - 1, width / 2, -circleSize, 25);
			});
			ctx.fill();
			ctx.globalAlpha = 1;
		}

		if (configRef.current.downLineEnabled) {
			ctx.beginPath();
			ctx.fillStyle = configRef.current.downLineColor;
			ctx.globalAlpha = 0.4;
			data.forEach(({ barX, yPos, width, circleSize }) => {
				ctx.roundRect(barX - width / 4, yPos + 1, width / 2, circleSize / 3, 25);
			});
			ctx.fill();
			ctx.globalAlpha = 1;
		}

		ctx.beginPath();
		ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
		data.forEach(({ barX, yPos }) => {
			ctx.arc(barX, yPos, 1, 0, 2 * Math.PI);
		});
		ctx.fill();
	};

	const init = (): void => {
		audioRef.current
			?.play()
			.catch()
			.then(() => {
				console.log("Start playing");
			});
	};

	useEffect(() => {
		configRef.current = config;
	}, [config]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const ctx = canvas.getContext("2d");
		if (!ctx) {
			return;
		}

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		gradient(ctx, canvas);

		for (
			let i = 0;
			i < configRef.current.bars * configRef.current.step;
			i += configRef.current.step
		) {
			const width = document.body.offsetWidth / configRef.current.bars;
			const barX = i * width + width / 2;
			const yPos = document.body.offsetHeight / 2;

			ctx.beginPath();
			ctx.arc(barX, yPos, 1, 0, 2 * Math.PI);
			ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
			ctx.fill();
		}
	}, [audioRef, canvasRef, configRef]);

	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" className="svg-filter">
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix in="blur" values={config.matrix.join("  ")} result="goo" />
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>

			<div style={{ filter: `url(#${config.effect})` }} id="canvas-container">
				<canvas ref={canvasRef} id="analyser-render" />
			</div>

			<Card
				sx={{ position: "fixed", width: "100%", bottom: 0, zIndex: 100 }}
				variant="outlined"
			>
				<CardHeader
					action={
						<>
							<IconButton onClick={init}>
								<PlayArrowIcon />
							</IconButton>
							<div id="mp3_player" style={{ display: "none" }}>
								<audio
									ref={audioRef}
									crossOrigin="anonymous"
									src="/static/audio/metallica.mp3"
									controls
									loop
									onPlaying={start}
									onPlay={init}
								/>
							</div>
						</>
					}
					title={
						<div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
							<Checkbox
								size="small"
								checked={config.circleEnabled}
								onChange={e =>
									setConfig(prev => ({
										...prev,
										circleEnabled: e.target.checked,
									}))
								}
							/>
							<Typography>Show Circle</Typography>

							<Checkbox
								size="small"
								checked={config.upLineEnabled}
								onChange={e =>
									setConfig(prev => ({
										...prev,
										upLineEnabled: e.target.checked,
									}))
								}
							/>
							<Typography>Show Line Up</Typography>

							<Checkbox
								size="small"
								checked={config.downLineEnabled}
								onChange={e =>
									setConfig(prev => ({
										...prev,
										downLineEnabled: e.target.checked,
									}))
								}
							/>
							<Typography>Show Line Down</Typography>

							<InputBase
								type="color"
								sx={{ width: 50 }}
								value={config.upLineColor}
								onChange={event =>
									setConfig(prev => ({
										...prev,
										upLineColor: event.target.value,
									}))
								}
							/>
							<Typography>Color Line Up</Typography>

							<InputBase
								type="color"
								sx={{ width: 50 }}
								value={config.downLineColor}
								onChange={event =>
									setConfig(prev => ({
										...prev,
										downLineColor: event.target.value,
									}))
								}
							/>
							<Typography>Color Line Down</Typography>
						</div>
					}
				/>

				<CardContent>
					<Box display="flex" gap={3}>
						<Slider
							step={1}
							value={config.bars}
							valueLabelDisplay="on"
							onChange={(_, value) =>
								setConfig(prev => ({
									...prev,
									bars: typeof value === "number" ? value : prev.bars,
								}))
							}
							min={1}
							max={1024}
							size="small"
						/>

						<Slider
							step={1}
							valueLabelDisplay="on"
							value={config.step}
							onChange={(_, value) =>
								setConfig(prev => ({
									...prev,
									step: typeof value === "number" ? value : prev.bars,
								}))
							}
							min={1}
							max={10}
							size="small"
						/>
					</Box>

					<Box display="flex" gap={3}>
						<FormControl>
							<InputLabel id="demo-simple-select-label">Effect</InputLabel>
							<Select
								size="small"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={config.effect}
								label="Effect"
								onChange={(event: SelectChangeEvent) => {
									setConfig(prev => ({
										...prev,
										effect: event.target.value as string,
									}));
								}}
							>
								<MenuItem value="">Disabled</MenuItem>
								<MenuItem value="goo">Goo</MenuItem>
							</Select>
						</FormControl>

						{config.effect && (
							<Stack
								component="form"
								direction="row"
								spacing={2}
								noValidate
								autoComplete="off"
							>
								<TextField
									label="Matrix[1]"
									variant="outlined"
									size="small"
									value={config.matrix[0]}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										setMatrix(event.target.value, 0);
									}}
								/>
								<TextField
									label="Matrix[2]"
									variant="outlined"
									size="small"
									value={config.matrix[1]}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										setMatrix(event.target.value, 1);
									}}
								/>
								<TextField
									label="Matrix[3]"
									variant="outlined"
									size="small"
									value={config.matrix[2]}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										setMatrix(event.target.value, 2);
									}}
								/>
								<TextField
									label="Matrix[4]"
									variant="outlined"
									size="small"
									value={config.matrix[3]}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										setMatrix(event.target.value, 3);
									}}
								/>
							</Stack>
						)}
					</Box>
				</CardContent>
			</Card>
		</>
	);
};
