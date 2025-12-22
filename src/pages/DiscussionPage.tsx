import { useEffect, useState } from 'react';
import { PAGES, type GameSettings, type pageValue } from '../types';
import ImpostorPerson from '../components/decorative/ImpostorPerson';

type DiscussionProps = {
	gameSettings: GameSettings;
	onNavigate: (page: pageValue) => void;
};

export default function DiscussionPage({
	gameSettings,
	onNavigate,
}: DiscussionProps) {
	const [starterIndex, setStarterIndex] = useState(0);
	const [time, setTime] = useState({
		min: gameSettings.time,
		sec: 0,
	});
	const [isTimeout, setIsTimeout] = useState(false);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * gameSettings.impostors);

		const setStarter = () => {
			setStarterIndex(randomIndex);
		};
		setStarter();
	}, [gameSettings]);

	useEffect(() => {
		if (gameSettings.time <= 0) return;

		// Start timer
		const timer = setInterval(() => {
			setTime((prevTime) => {
				const { min, sec } = prevTime;

				if (min === 0 && sec === 0) {
					setIsTimeout(true);
					clearInterval(timer);
					return prevTime;
				}

				if (sec <= 0) {
					return { min: min - 1, sec: 59 };
				}

				return { min: min, sec: sec - 1 };
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [gameSettings.time]);

	return (
		<div className="relative flex flex-col w-screen h-screen px-10 pt-20 items-center gap-8 overflow-hidden bg-custom-white">
			<h2 className="font-primary text-3xl text-light-gray text-center">
				Player {starterIndex + 1} starts!
			</h2>

			<h2 className="font-primary font-bold text-5xl text-gray text-center mb-8">
				Say your word and discuss
			</h2>

			{gameSettings.time > 0 ? (
				<p className="text-4xl font-impostor text-primary-red uppercase">
					{isTimeout ? (
						"Time's up"
					) : (
						<>
							{time.min < 1 ? '0' : null}
							{time.min}:{time.sec < 10 ? '0' : null}
							{time.sec}
						</>
					)}
				</p>
			) : null}

			<ImpostorPerson
				width="100%"
				height="100%"
				color="#d21313"
				values="#d21313"
				className="absolute -bottom-12 z-10 w-screen h-[50%]"
			/>

			<button
				className="absolute bottom-10 left-0 right-0 text-white font-primary font-bold text-3xl z-50"
				onClick={() => onNavigate(PAGES.SETTINGS)}
			>
				Reveal
			</button>
		</div>
	);
}
