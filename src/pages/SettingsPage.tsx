import { useState } from 'react';
import type { pageValue, GameSettings, Category } from '../types';
import PlayerIconButton from '../components/PlayerIconButton';
import { DEFAULT_GAME_SETTINGS } from '../data/gameDefaults';
import CategoryButton from '../components/CategoryButton';
import AddNewCategoryBtn from '../components/AddNewCategoryBtn';
import CreateCategoryModal from '../components/CreateCategoryModal';

type SettingsProps = {
	onNavigate: (page: pageValue) => void;
};

export default function SettingsPage({ onNavigate }: SettingsProps) {
	const [localSettings, setLocalSettings] = useState<GameSettings>(
		DEFAULT_GAME_SETTINGS
	);
	const [isCreateCatOpen, setIsCreateCatOpen] = useState(false);

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
				<div className="custom-scrollbar pb-3 flex overflow-x-auto gap-3">
					{/* Add custom categorie button */}
					<AddNewCategoryBtn onClick={() => setIsCreateCatOpen(true)} />
					{localSettings.categories.map((cat) => (
						<CategoryButton
							cat={cat}
							onToggle={toggleCategory}
							key={cat.name}
						/>
					))}
				</div>
			</div>

			{/* show create category modal */}

			<CreateCategoryModal
				isOpen={isCreateCatOpen}
				onClose={() => setIsCreateCatOpen(false)}
				categories={localSettings.categories.map((cat) => cat.name)}
				onSavingCategory={(newCat) => {
					setLocalSettings({
						...localSettings,
						categories: [...localSettings.categories, newCat],
					});
				}}
			/>

			<button onClick={() => onNavigate('home')}>Play</button>
		</div>
	);
}
