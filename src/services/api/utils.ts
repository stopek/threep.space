import { endpoints } from "./endpoints";

type TParams = Record<string, string | number | boolean>;

const fillEndpoint = (endpoint: endpoints, params: TParams = {}): string => {
	let outputEndpoint = endpoint.toString();

	Object.keys(params).forEach(key => {
		const regex = new RegExp(`(/)(:${key})`, "gi");
		outputEndpoint = outputEndpoint.replace(regex, "$1" + params[key]);
	});

	return outputEndpoint;
};

export { fillEndpoint };
