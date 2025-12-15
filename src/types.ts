export const PAGES = {
	HOME: 'home',
	SETTINGS: 'settings',
} as const;

type pageKey = keyof typeof PAGES;

export type pageValue = (typeof PAGES)[pageKey];
