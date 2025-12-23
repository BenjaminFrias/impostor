import { useEffect, useState } from 'react';
import { PAGES, type GameSettings, type pageValue } from '../types';
import ImpostorPerson from '../components/decorative/ImpostorPerson';
import StickyFooterBtn from '../components/StickyFooterBtn';

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
	const [hasRevealed, setHasRevealed] = useState(false);

	const handleRevealing = () => {
		setHasRevealed(true);
	};

	const impostorIndex = (gameSettings.impostorIndex ?? 0) + 1;

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

			{
				<div
					className={`absolute flex flex-col justify-start items-center inset-0 p-7 pt-20 text-center
                        bg-primary-red overflow-hidden transition-all duration-300 w-screen h-screen z-100 
                        ${hasRevealed ? 'scale-100' : 'scale-0'}`}
				>
					<p className="font-primary text-3xl text-custom-white">
						The Impostor was:
					</p>

					<p className="font-primary text-4xl font-bold text-custom-white mt-5">
						Player {impostorIndex}
					</p>

					<div className="absolute h-[50%] bottom-0 left-0 w-screen">
						<ImpostorPerson width="100%" height="100%" color="#171717" />
					</div>

					<div className="z-10">
						<StickyFooterBtn
							label="Play again"
							color="white"
							handleClick={() => onNavigate(PAGES.SETTINGS)}
						/>
					</div>
				</div>
			}

			<button
				className="absolute bottom-10 left-0 right-0 text-white font-primary font-bold text-3xl z-50"
				onClick={handleRevealing}
			>
				Reveal
			</button>
		</div>
	);
}
