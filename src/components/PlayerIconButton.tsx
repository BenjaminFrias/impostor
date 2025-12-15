import ImpostorPerson from './decorative/ImpostorPerson';

export default function PlayerIconButton() {
	return (
		<button className="relative flex items-end justify-center  bg-radial-[at_50%_75%] from-primary-red/70 via-primary-red/30 to-primary-red/10 to-90% w-15 h-15 rounded-full outline-0 overflow-hidden">
			<ImpostorPerson
				width="90%"
				height="90%"
				color="#d21313"
				className="relative -bottom-1 z-1"
			/>
		</button>
	);
}
