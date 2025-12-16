import ImpostorPerson from './decorative/ImpostorPerson';

type PlayerIconBtnProps = {
	buttonHandler: () => void;
	type: 'add' | 'remove';
};

export default function PlayerIconButton({
	buttonHandler,
	type,
}: PlayerIconBtnProps) {
	const buttonClass =
		type === 'remove'
			? 'from-primary-red/70 via-primary-red/30 to-primary-red/10'
			: 'from-white/50 via-white/20 to-white/10';

	const impostorColor = type === 'remove' ? '#d21313' : '#262626';

	return (
		<button
			className={`relative flex items-end justify-center bg-radial-[at_50%_75%] to-90% w-17 h-17 rounded-full
            outline-0 overflow-hidden  ${buttonClass}`}
			onClick={() => buttonHandler()}
		>
			<ImpostorPerson
				width="90%"
				height="90%"
				color={impostorColor}
				className="relative -bottom-2 z-1"
			/>

			{type == 'add' ? (
				<div className="absolute flex justify-center items-center w-full h-full z-10">
					<div className="absolute w-1 h-6 bg-white"></div>
					<div className="absolute w-6 h-1 bg-white"></div>
				</div>
			) : null}
		</button>
	);
}
