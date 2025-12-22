import { useState } from 'react';
import './App.css';
import Homepage from '../pages/Homepage';
import { PAGES, type GameSettings, type pageValue } from '../types';
import SettingsPage from '../pages/SettingsPage';
import { DEFAULT_GAME_SETTINGS } from '../data/gameDefaults';
import GameplayPage from '../pages/GameplayPage';

function App() {
	const [currentPage, setCurrentPage] = useState<pageValue>(PAGES.HOME);
	const [gameSettings, setGameSettings] = useState<GameSettings>(
		DEFAULT_GAME_SETTINGS
	);

	const navigate = (page: pageValue) => {
		setCurrentPage(page);
	};

	const onSettingsChange = (newSettings: GameSettings) => {
		const impostorIndex = Math.floor(Math.random() * newSettings.players);
		setGameSettings({ ...newSettings, impostorIndex: impostorIndex });
	};

	switch (currentPage) {
		case PAGES.HOME:
			return <Homepage onNavigate={navigate} />;
		case PAGES.SETTINGS:
			return (
				<SettingsPage
					onNavigate={navigate}
					onSettingsChange={onSettingsChange}
				/>
			);
		case PAGES.GAMEPLAY:
			return <GameplayPage gameSettings={gameSettings} onNavigate={navigate} />;
		case PAGES.DISCUSSION:
			return <div>Discuss</div>;
		default:
			return <Homepage onNavigate={navigate} />;
	}
}

export default App;
