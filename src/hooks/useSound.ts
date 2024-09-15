import { default as useSoundPlugin } from "use-sound";

const useRegistered = (name: string) =>
	useSoundPlugin(`/static/audio/${name}.mp3`, {
		volume: 0.25,
	});

const useSound = () => {
	const [tap] = useRegistered("button");
	const [on] = useRegistered("on");
	const [off] = useRegistered("off");
	const [menu] = useRegistered("menu");

	return { tap, on, off, menu };
};

export default useSound;
