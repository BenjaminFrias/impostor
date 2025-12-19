import type React from 'react';

export const PAGES = {
	HOME: 'home',
	SETTINGS: 'settings',
} as const;

type pageKey = keyof typeof PAGES;

export type pageValue = (typeof PAGES)[pageKey];

export type Category = {
	name: string;
	isActive: boolean;
	icon: React.ComponentType<IconProps>;
	words: string[];
};

export type GameSettings = {
	players: number;
	impostors: number;
	impostorIndex: number | undefined;
	hints: boolean;
	time: number | false;
	categories: Category[];
};

export type IconProps = {
	borderColor: '#171717' | '#ffffff';
};
