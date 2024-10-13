declare namespace Type {
	export type TSkill =
		| "react"
		| "angular"
		| "js_ts"
		| "symfony"
		| "code_igniter"
		| "php_mysql"
		| "linux_bash"
		| "python";

	export type TInsideUrls =
		| "preview"
		| "storybook"
		| "ui"
		| "docs"
		| "multimedia"
		| "github_backend"
		| "github_front"
		| "archive"
		| "github"
		| "window";

	export interface IStackItem {
		name: string;
		url?: string;
	}

	type PartialRecord<K extends keyof any, T> = {
		[P in K]?: T;
	};

	export interface IWork {
		name: string;
		image?: string;
		description: {
			en: string;
			pl: string;
		};
		about?: {
			en: string;
			pl: string;
		};
		category: string[];
		stack: IStackItem["name"][];
		order?: number;
		slug: string;
		inside?: PartialRecord<TInsideUrls, string>;
		last?: boolean;
		old?: boolean;
		urls?: boolean;
	}
}
