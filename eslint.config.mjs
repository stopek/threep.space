import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
	{
		ignores: ["build/**", "node_modules", "simple", "custom", "!**/eslint.config.js"],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			globals: globals.browser,
		},
		rules: {},
		settings: {},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
		},
	},
	pluginReact.configs.flat.recommended,
];
