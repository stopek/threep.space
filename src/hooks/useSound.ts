import { useRef } from "react";
import tap from "../assets/audio/button.mp3";
import on from "../assets/audio/on.mp3";
import off from "../assets/audio/off.mp3";
import menu from "../assets/audio/menu.mp3";

type TSounds = "tap" | "on" | "off" | "menu";

const useSound = () => {
	const sounds = useRef({
		tap: new Audio(tap),
		on: new Audio(on),
		off: new Audio(off),
		menu: new Audio(menu),
	});

	const play = (soundKey: TSounds): Promise<void | HTMLAudioElement> | undefined => {
		const sound = sounds.current[soundKey];
		if (sound) {
			sound.volume = 0.5;
			sound.currentTime = 0;
			return sound
				.play()
				.catch(e => {
					console.warn(`Sound "${soundKey}" throw Error`, e);
				})
				.then(() => {
					console.log(`Play sound ${soundKey}`);
				});
		} else {
			console.warn(`Sound with key "${soundKey}" not found.`);
		}
	};

	return { play };
};

export default useSound;
