export const PAGES = {
	HOME: 'home',
	SETTINGS: 'settings',
} as const;

type pageKey = keyof typeof PAGES;

export type pageValue = (typeof PAGES)[pageKey];

export type Category = {
	name: string;
	isActive: boolean;
};

export type GameSettings = {
	players: number;
	impostors: number;
	impostorIndex: number | undefined;
	categories: Category[];
	hints: boolean;
	time: number | boolean;
};
