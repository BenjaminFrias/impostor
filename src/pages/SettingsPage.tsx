import { useState } from 'react';
import type { pageValue, GameSettings, Category } from '../types';
import PlayerIconButton from '../components/PlayerIconButton';
import { DEFAULT_GAME_SETTINGS } from '../data/gameDefaults';
import CategoryButton from '../components/CategoryButton';
import AddNewCategoryBtn from '../components/AddNewCategoryBtn';
import CreateCategoryModal from '../components/CreateCategoryModal';
import StickyFooterBtn from '../components/StickyFooterBtn';

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

	const updateImpostorsAmount = (impostorAmount: number) => {
		setLocalSettings({ ...localSettings, impostors: impostorAmount });
	};

	const toggleHints = () => {
		setLocalSettings({ ...localSettings, hints: !localSettings.hints });
	};

	const toggleTime = () => {
		switch (localSettings.time) {
			case false:
				setLocalSettings({ ...localSettings, time: 3 });
				break;
			case 3:
				setLocalSettings({ ...localSettings, time: 5 });
				break;
			case 5:
				setLocalSettings({ ...localSettings, time: 10 });
				break;
			case 10:
				setLocalSettings({ ...localSettings, time: false });
				break;
		}
	};

	return (
		<div
			className="relative flex flex-col gap-5 w-screen h-screen
			bg-black items-start p-5 text-white  overflow-x-hidden custom-scrollbar"
		>
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
						categories: [newCat, ...localSettings.categories],
					});
				}}
			/>

			<div className="flex flex-col gap-3 w-full">
				<h3 className="settings-subtitle">Impostors</h3>
				<div className="flex gap-3 flex-wrap">
					{Array.from({ length: 4 }).map((_, i) => {
						const isActiveClass =
							localSettings.impostors === i + 1
								? 'bg-custom-white text-gray border-custom-white'
								: 'bg-transparent text-custom-white border-light-gray ';

						return (
							<button
								key={i}
								onClick={() => {
									updateImpostorsAmount(i + 1);
								}}
								className={`flex-1 rounded-(--button-radius) p-3 font-primary font-bold border-2 ${isActiveClass} `}
							>
								{i + 1}
							</button>
						);
					})}
				</div>
			</div>

			<StickyFooterBtn
				label="Play"
				color="red"
				handleClick={() => onNavigate('home')}
			/>

			<div className="flex gap-3 w-full mb-20">
				<button
					className={`flex-1 rounded-(--button-radius) p-3 font-primary font-bold border-2 ${
						localSettings.hints
							? 'bg-custom-white text-gray border-custom-white'
							: 'bg-transparent text-custom-white border-light-gray'
					} `}
					onClick={toggleHints}
				>
					Hints
				</button>
				<button
					className={`flex-1 rounded-(--button-radius) p-3 font-primary font-bold border-2 ${
						localSettings.time
							? 'bg-custom-white text-gray border-custom-white'
							: 'bg-transparent text-custom-white border-light-gray'
					} `}
					onClick={toggleTime}
				>
					{localSettings.time ? `${localSettings.time}min` : 'No time'}
				</button>
			</div>
		</div>
	);
}
