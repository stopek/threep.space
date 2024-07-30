/**
 * @author https://medium.com/@josephat94/building-a-custom-hook-to-detect-user-device-in-react-js-e4dd6e0d2d9c
 */
import { useState, useEffect } from "react";

type TDeviceTypes = "mobile" | "desktop";

const useDeviceDetection = () => {
	const [device, setDevice] = useState<TDeviceTypes>();

	useEffect(() => {
		const handleDeviceDetection = () => {
			const userAgent = navigator.userAgent.toLowerCase();
			const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
			const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

			if (isMobile) {
				setDevice("mobile");
			} else if (isTablet) {
				setDevice("mobile");
			} else {
				setDevice("desktop");
			}
		};

		handleDeviceDetection();
		window.addEventListener("resize", handleDeviceDetection);

		return () => {
			window.removeEventListener("resize", handleDeviceDetection);
		};
	}, []);

	return device;
};

export default useDeviceDetection;
