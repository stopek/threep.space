import { paths } from "./paths";

type TParam = string | number | boolean;
type TParams = Record<string, TParam>;

const fillRoute = (path: paths, params: TParams = {}, search: TParams = {}): paths => {
    let outputRoute = path.toString();

    Object.keys(params).forEach(key => {
        const clearParam = null === params[key];

        const regex = new RegExp(`(/?)(:${key})\\??`, "gi");
        if (typeof params[key] !== "undefined") {
            outputRoute = outputRoute.replace(
                regex,
                clearParam ? "" : "$1" + (params[key] ?? "").toString(),
            );
        }
    });

    if (Object.keys(search).length > 0) {
        outputRoute +=
            "?" +
            Object.entries(search).map(
                ([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value),
            );
    }

    return outputRoute as paths;
};

export { fillRoute };
