import axios from "axios";

export const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.response.use(
	response => response,
	error => {
		if (error.response.status === 401) {
			const { config } = error;
			const delayRetryRequest = new Promise<void>(resolve => {
				setTimeout(() => {
					resolve();
				}, config.retryDelay || 1000);
			});

			return delayRetryRequest.then(() => instance(config));
		}

		throw error;
	},
);

export default instance;
