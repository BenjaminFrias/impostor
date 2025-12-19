import AnimalsIcon from '../components/decorative/AnimalsIcon';
import FoodIcon from '../components/decorative/FoodIcon';
import FootballIcon from '../components/decorative/FootballIcon';
import JobsIcon from '../components/decorative/JobsIcon';
import MoviesAndTvIcon from '../components/decorative/MoviesAndTvIcon';
import ObjectsIcon from '../components/decorative/ObjectsIcon';
import PlacesIcon from '../components/decorative/PlacesIcon';
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
			icon: ObjectsIcon,
		},
		{
			name: 'Football',
			isActive: true,
			icon: FootballIcon,
			words: wordBanks.football,
		},
		{
			name: 'Animals',
			isActive: true,
			icon: AnimalsIcon,
			words: wordBanks.animals,
		},
		{
			name: 'Movies and TV',
			isActive: true,
			words: wordBanks.moviesAndTV,
			icon: MoviesAndTvIcon,
		},
		{
			name: 'Places',
			isActive: true,
			words: wordBanks.places,
			icon: PlacesIcon,
		},
		{
			name: 'Jobs',
			isActive: true,
			words: wordBanks.jobs,
			icon: JobsIcon,
		},
		{
			name: 'Food',
			isActive: true,
			words: wordBanks.food,
			icon: FoodIcon,
		},
	],
};
