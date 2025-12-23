import AnimalsIcon from '../components/decorative/AnimalsIcon';
import FoodIcon from '../components/decorative/FoodIcon';
import FootballIcon from '../components/decorative/FootballIcon';
import JobsIcon from '../components/decorative/JobsIcon';
import MoviesAndTvIcon from '../components/decorative/MoviesAndTvIcon';
import ObjectsIcon from '../components/decorative/ObjectsIcon';
import PlacesIcon from '../components/decorative/PlacesIcon';
import type { GameSettings, IconProps } from '../types';
import { wordBanks } from './wordBanks';

export const ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
	objects: ObjectsIcon,
	football: FootballIcon,
	animals: AnimalsIcon,
	moviesandtv: MoviesAndTvIcon,
	places: PlacesIcon,
	jobs: JobsIcon,
	food: FoodIcon,
};

export const DEFAULT_GAME_SETTINGS: GameSettings = {
	players: 3,
	impostors: 1,
	impostorIndex: 3,
	hints: false,
	time: 0,
	categories: [
		{
			name: 'Objects',
			words: wordBanks.objects,
			isActive: true,
		},
		{
			name: 'Football',
			isActive: true,
			words: wordBanks.football,
		},
		{
			name: 'Animals',
			isActive: true,
			words: wordBanks.animals,
		},
		{
			name: 'Movies and TV',
			isActive: true,
			words: wordBanks.moviesAndTV,
		},
		{
			name: 'Places',
			isActive: true,
			words: wordBanks.places,
		},
		{
			name: 'Jobs',
			isActive: true,
			words: wordBanks.jobs,
		},
		{
			name: 'Food',
			isActive: true,
			words: wordBanks.food,
		},
	],
};
