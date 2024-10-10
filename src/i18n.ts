import i18n from "i18next";
import { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import common_EN from "./translations/en/common.json";

interface ILanguageCommon {
	value: string;
	title: string;
}

const languagesCommonList: ILanguageCommon[] = [{ value: "en", title: "EN" }];

const resources: Resource = Object.values(languagesCommonList).reduce(
	(prev, obj) => ({
		[obj.value]: {},
	}),
	{},
);

resources.en = { common: common_EN };

i18n.use(initReactI18next)
	.init({
		resources,
		defaultNS: "common",
		lng: "en",
		ns: ["common"],
		interpolation: {
			escapeValue: false,
			formatSeparator: ".",
		},
	})
	.then(() => {
		console.log("Translations have been loaded");
	});

export { languagesCommonList };

export default i18n;
