import StarIcon from '../components/decorative/StarIcon';
import type { GameSettings } from '../types';

export const DEFAULT_GAME_SETTINGS: GameSettings = {
	players: 3,
	impostors: 1,
	impostorIndex: 3,
	hints: false,
	time: false,
	categories: [
		{
			name: 'objects',
			words: ['car', 'pen', 'cup', 'table', 'phone', 'watch', 'book', 'lamp'],
			isActive: true,
			icon: StarIcon,
		},
		{
			name: 'football',
			isActive: false,
			icon: StarIcon,
			words: ['messi', 'stadium', 'referee', 'goal', 'offside', 'cleats'],
		},
		{
			name: 'animals',
			isActive: false,
			icon: StarIcon,
			words: ['lion', 'tiger', 'elephant', 'zebra', 'penguin', 'shark'],
		},
		{
			name: 'movies',
			isActive: false,
			words: ['director', 'script', 'popcorn', 'camera', 'oscar', 'sequel'],
			icon: StarIcon,
		},
	],
};
