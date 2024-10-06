import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./style.scss";
import Typography from "@mui/material/Typography";

function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const MusicContainer: React.FC = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	let analyser: AnalyserNode | undefined;
	let context: AudioContext | undefined;
	let source: MediaElementAudioSourceNode | undefined;

	//
	// const analyzeFrequencies = async (audioUrl: string): Promise<boolean[]> => {
	// 	const audioBuffer = await fetch(audioUrl)
	// 		.then(response => response.arrayBuffer())
	// 		.then(arrayBuffer => {
	// 			console.log({ arrayBuffer });
	// 			const offlineContext = new OfflineAudioContext(2, 48000 * 240, 48000);
	// 			return offlineContext.decodeAudioData(arrayBuffer);
	// 		});
	//
	// 	console.log({ audioBuffer });
	//
	// 	const offlineContext = new OfflineAudioContext(
	// 		2,
	// 		audioBuffer.length,
	// 		audioBuffer.sampleRate,
	// 	);
	//
	// 	const source = offlineContext.createBufferSource();
	// 	source.buffer = audioBuffer;
	//
	// 	const offlineAnalyser = offlineContext.createAnalyser();
	// 	offlineAnalyser.fftSize = 2048; // Zwiększ rozdzielczość FFT
	// 	const frequencyBinCount = offlineAnalyser.frequencyBinCount;
	//
	// 	const frequencyUsage = new Array(frequencyBinCount).fill(false);
	// 	source.connect(offlineAnalyser);
	// 	offlineAnalyser.connect(offlineContext.destination);
	//
	// 	source.start();
	// 	await offlineContext.startRendering();
	//
	// 	// Iterowanie przez cały utwór i sprawdzanie częstotliwości na każdym kroku
	// 	const bufferLength = offlineAnalyser.frequencyBinCount;
	// 	const fbcArray = new Uint8Array(bufferLength);
	//
	// 	// Przechodzimy przez cały utwór, co kilkaset ms
	// 	const stepDuration = 0.1; // co 100ms
	// 	for (let time = 0; time < audioBuffer.duration; time += stepDuration) {
	// 		offlineAnalyser.getByteFrequencyData(fbcArray);
	//
	// 		// Sprawdzamy, które częstotliwości mają jakiekolwiek dane
	// 		for (let i = 0; i < bufferLength; i++) {
	// 			if (fbcArray[i] > 0) {
	// 				frequencyUsage[i] = true;
	// 			}
	// 		}
	// 	}
	//
	// 	return frequencyUsage;
	// };
	//
	//

	const start = async () => {
		try {
			if (!audioRef.current || !canvasRef.current) return;

			// Analiza offline
			const frequencyUsage: boolean[] = []; // await analyzeFrequencies(audioRef.current.src);

			context = new (window.AudioContext || (window as any).webkitAudioContext)();
			analyser = context.createAnalyser();

			if (!source) {
				source = context.createMediaElementSource(audioRef.current);
				source.connect(analyser);
				analyser.connect(context.destination);
			}

			console.log({ analyser });
			const canvas = canvasRef.current;
			canvas.width = document.body.offsetWidth;
			canvas.height = document.body.offsetHeight;

			const ctx = canvas.getContext("2d");
			if (ctx) {
				frameLooper(ctx, canvas, frequencyUsage);
			}

			await audioRef.current.play();
			// audioRef.current.removeEventListener("playing", start);
		} catch (e) {
			console.log(e);
		}
	};

	const step = 2;
	const bars = 100;

	const frameLooper = (
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		frequencyUsage: boolean[],
	) => {
		requestAnimationFrame(() => frameLooper(ctx, canvas, frequencyUsage));
		if (!analyser) return;

		const fbcArray = new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData(fbcArray);
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// console.log({ countFrequencies });
		for (let i = 0; i < bars * step; i += step) {
			// if (!frequencyUsage[i]) {
			// 	continue;
			// }

			const width = Math.floor(document.body.offsetWidth / bars);
			const barX = i * width + width / 2;
			const circleSize = fbcArray[i] / 2;

			ctx.beginPath();
			const yPos = document.body.offsetHeight / 2;
			ctx.arc(barX, yPos, circleSize, 0, 2 * Math.PI);
			const opacity = Math.round(Math.min(1, Math.max(0, 10 / circleSize)) * 100) / 100;
			ctx.fillStyle = `rgba(251, 100, 0, ${opacity})`;
			ctx.fill();

			ctx.beginPath();
			ctx.arc(barX, yPos, 1, 0, 2 * Math.PI);
			ctx.fillStyle = `rgba(255,255,255,0.3)`;
			ctx.fill();
		}
	};

	const init = () => {
		audioRef.current
			?.play()
			.catch()
			.then(() => {
				console.log("Start playing");
			});
	};

	useEffect(() => {
		if (!audioRef || !audioRef.current) {
			return;
		}

		document.addEventListener("click", init, { once: true });

		return () => {
			document.removeEventListener("click", init);
		};
	}, [audioRef]);

	return (
		<>
			<div id="mp3_player" style={{ display: "none" }}>
				<div id="audio_box">
					<audio
						ref={audioRef}
						crossOrigin="anonymous"
						src="/static/audio/bg.mp3"
						controls={true}
						loop={true}
						autoPlay={false}
						onPlaying={start}
					/>
				</div>
			</div>
			<canvas ref={canvasRef} id="analyser_render" />
			<Typography
				variant="h4"
				fontWeight={100}
				sx={{
					opacity: 0.2,
					position: "absolute",
					bottom: 5,
					display: "flex",
					justifyContent: "center",
					width: "100%",
				}}
			>
				Click Mouse
			</Typography>
		</>
	);
};
