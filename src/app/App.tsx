import { useState } from 'react';
import './App.css';
import Homepage from '../pages/Homepage';
import { PAGES, type pageValue } from '../types';
import SettingsPage from '../pages/SettingsPage';

function App() {
	const [currentPage, setCurrentPage] = useState<pageValue>(PAGES.HOME);

	const navigate = (page: pageValue) => {
		setCurrentPage(page);
	};

	switch (currentPage) {
		case PAGES.HOME:
			return <Homepage onNavigate={navigate} />;
		case PAGES.SETTINGS:
			return <SettingsPage onNavigate={navigate} />;
		default:
			return <Homepage onNavigate={navigate} />;
	}
}

export default App;
