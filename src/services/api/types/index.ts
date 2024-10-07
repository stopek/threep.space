export interface IWorkDTO {
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
	stack: string[];
	order?: number;
	slug: string;
	inside?: string[];
	last?: boolean;
	old?: boolean;
	urls?: boolean;
}
