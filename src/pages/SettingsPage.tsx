import { useState } from 'react';
import type { pageValue, GameSettings, Category } from '../types';
import PlayerIconButton from '../components/PlayerIconButton';
import { DEFAULT_GAME_SETTINGS } from '../data/gameDefaults';

type SettingsProps = {
	onNavigate: (page: pageValue) => void;
};

export default function SettingsPage({ onNavigate }: SettingsProps) {
	const [localSettings, setLocalSettings] = useState<GameSettings>(
		DEFAULT_GAME_SETTINGS
	);

	const removePlayer = () => {
		if (localSettings.players > 3) {
			setLocalSettings({
				...localSettings,
				players: localSettings.players - 1,
			});
		}
	};

	const addPlayer = () => {
		if (localSettings.players < 12) {
			setLocalSettings({
				...localSettings,
				players: localSettings.players + 1,
			});
		}
	};

	const toggleCategory = (selectedCategory: Category) => {
		const newCategories: Category[] = localSettings.categories.map((cat) => {
			if (cat.name === selectedCategory.name) {
				return { ...cat, isActive: !cat.isActive };
			}
			return cat;
		});

		const isValid = newCategories.filter((cat) => cat.isActive);
		if (isValid.length === 0) return;

		setLocalSettings({
			...localSettings,
			categories: newCategories,
		});
	};

	return (
		<div className="relative flex flex-col gap-5 w-screen h-screen bg-black items-start p-5 text-white  overflow-hidden">
			<h2 className="font-secondary text-4xl font-medium mt-5">
				Game settings
			</h2>
			<div className="flex flex-col  gap-3 w-full">
				<h3 className="settings-subtitle">{localSettings.players} players</h3>

				<div className="flex w-full gap-3 flex-wrap">
					{Array.from({ length: localSettings.players }).map((_, i) => (
						<PlayerIconButton
							key={i}
							buttonHandler={removePlayer}
							type="remove"
						/>
					))}

					<PlayerIconButton
						key="addNewPlayer"
						buttonHandler={addPlayer}
						type="add"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-3 w-full">
				<h3 className="settings-subtitle">Categories</h3>
				<div className="flex gap-3">
					{localSettings.categories.map((cat) => {
						const buttonClass = cat.isActive
							? 'category-selected'
							: 'category-unselected';

						const Icon = cat.icon;

						return (
							<button
								className={`flex flex-col justify-around min-w-25 h-25 rounded-(--button-radius) p-2 border-2 border-(--custom-white) outline-0 ${buttonClass}`}
								key={cat.name}
								onClick={() => toggleCategory(cat)}
							>
								<div className="w-full h-[55%]">
									<Icon selected={cat.isActive} />
								</div>
								<p className="font-primary font-medium">
									{cat.name[0].toUpperCase() + cat.name.slice(1)}
								</p>
							</button>
						);
					})}
				</div>
			</div>

			<button onClick={() => onNavigate('home')}>Play</button>
		</div>
	);
}
