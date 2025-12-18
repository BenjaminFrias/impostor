import StarIcon from '../components/decorative/StarIcon';
import type { GameSettings } from '../types';
import { wordBanks } from './wordBanks';

export const DEFAULT_GAME_SETTINGS: GameSettings = {
	players: 3,
	impostors: 1,
	impostorIndex: 3,
	hints: false,
	time: false,
	categories: [
		{
			name: 'Objects',
			words: wordBanks.objects,
			isActive: true,
			icon: StarIcon,
		},
		{
			name: 'Football',
			isActive: true,
			icon: StarIcon,
			words: wordBanks.football,
		},
		{
			name: 'Animals',
			isActive: true,
			icon: StarIcon,
			words: wordBanks.animals,
		},
		{
			name: 'Movies and TV',
			isActive: true,
			words: wordBanks.moviesAndTV,
			icon: StarIcon,
		},
		{
			name: 'Places',
			isActive: true,
			words: wordBanks.places,
			icon: StarIcon,
		},
		{
			name: 'Jobs',
			isActive: true,
			words: wordBanks.jobs,
			icon: StarIcon,
		},
		{
			name: 'Food',
			isActive: true,
			words: wordBanks.food,
			icon: StarIcon,
		},
	],
};
