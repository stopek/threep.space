import { default as useSoundPlugin } from "use-sound";
import { PlayFunction, ReturnedValue } from "use-sound/dist/types";
import { createContext } from "react";

export type TSounds = "tap" | "on" | "off" | "menu" | "check";

const useRegistered = (name: string): ReturnedValue =>
	useSoundPlugin(`/static/audio/${name}.mp3`, {
		volume: 0.5,
	});

export const SoundContext = createContext<Record<TSounds, PlayFunction> | null>(null);

const useSound = (): Record<TSounds, PlayFunction> => {
	const [tap] = useRegistered("check");
	const [on] = useRegistered("on");
	const [off] = useRegistered("off");
	const [menu] = useRegistered("expand");
	const [check] = useRegistered("click2");

	return { tap, on, off, menu, check };
};

export default useSound;
