import { useCallback, useEffect, useState } from 'react';
import { PAGES, type GameSettings, type pageValue } from '../types';
import StickyFooterBtn from '../components/StickyFooterBtn';
import ImpostorPerson from '../components/decorative/ImpostorPerson';

type GameplayProps = {
	gameSettings: GameSettings;
	onNavigate: (page: pageValue) => void;
};

export default function GameplayPage({
	gameSettings,
	onNavigate,
}: GameplayProps) {
	const [currentPlayer, setCurrentPlayer] = useState<number>(0);
	const [hasSeenCard, setHasSeenCard] = useState<boolean>(false);
	const [selectedWord, setSelectedWord] = useState<string | null>(null);

	const nextPlayerHandler = () => {
		if (currentPlayer + 1 < gameSettings.players) {
			setCurrentPlayer((prev) => prev + 1);
			setHasSeenCard(false);
		} else {
			onNavigate(PAGES.DISCUSSION);
		}
	};

	const handleDiscoverCard = () => {
		setHasSeenCard(true);
	};

	const getRandomWord = useCallback(() => {
		const activeCategories = gameSettings.categories.filter(
			(cat) => cat.isActive
		);

		const randomCategoryIndex = Math.floor(
			Math.random() * activeCategories.length
		);
		const selectedCategory = activeCategories[randomCategoryIndex];

		const randomWordIndex = Math.floor(
			Math.random() * selectedCategory.words.length
		);

		const randomWord = selectedCategory.words[randomWordIndex];

		setSelectedWord(randomWord);
	}, [gameSettings.categories]);

	useEffect(() => {
		const startGame = () => {
			getRandomWord();
		};
		startGame();
	}, [getRandomWord]);

	const isPlayerImpostor = currentPlayer === gameSettings.impostorIndex;

	return (
		<div
			className="relative flex flex-col w-screen h-screen p-10
            gap-10 items-center overflow-hidden"
		>
			<h2 className="font-primary text-2xl font-light-gray">
				Player {currentPlayer + 1}
			</h2>

			<h2 className="font-primary font-bold text-4xl text-gray text-center mb-8">
				{hasSeenCard
					? isPlayerImpostor
						? null
						: 'The word is'
					: 'Reveal your card'}
			</h2>

			<div className="relative w-55 h-85 perspective:1000px">
				{/* Decorative elements*/}
				<div className="absolute w-full h-full bg-light-gray rounded-(--button-radius) rotate-5 z-10"></div>
				<div className="absolute w-full h-full bg-gray/35 rounded-(--button-radius) -rotate-5"></div>

				{/* Card button */}
				<button
					className={`absolute w-full h-full rounded-(--button-radius) z-50 p-3 font-primary
                        text-[clamp(24px,10cqw,26px)] text-custom-white font-bold duration-500 transition-all
                        transform-style:preserve-3d overflow-hidden
						${
							hasSeenCard
								? isPlayerImpostor
									? 'rotate-y-360 bg-primary-red scale-125'
									: 'rotate-y-360 bg-gray'
								: 'rotate-y-0 bg-gray'
						}
                    `}
					onClick={handleDiscoverCard}
				>
					{hasSeenCard ? (
						isPlayerImpostor ? (
							<p>You're the imposter</p>
						) : (
							selectedWord
						)
					) : (
						'?'
					)}

					{hasSeenCard ? (
						isPlayerImpostor ? (
							<div className="absolute bottom-0 w-full h-full -z-10">
								<ImpostorPerson
									width="100%"
									height="30%"
									color="#171717"
									className="absolute w-full h-full scale-170 -left-3 -bottom-7"
								/>
							</div>
						) : null
					) : null}

					{/* Decorative circles */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -z-20 -translate-y-1/2 rounded-full border border-custom-white/10 w-20 h-20"></div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -z-20 -translate-y-1/2 rounded-full border border-custom-white/10 w-30 h-30"></div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -z-20 -translate-y-1/2 rounded-full border border-custom-white/10 w-40 h-40"></div>
					{gameSettings.hints ? gameSettings.hints : null}
				</button>
			</div>

			{hasSeenCard ? (
				<StickyFooterBtn
					label="Next"
					color="red"
					handleClick={nextPlayerHandler}
				/>
			) : null}
		</div>
	);
}
