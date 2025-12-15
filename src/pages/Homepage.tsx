import ImpostorPerson from '../components/decorative/ImpostorPerson';
import type { pageValue } from '../types';

type HomepageType = {
	onNavigate: (page: pageValue) => void;
};

export default function Homepage({ onNavigate }: HomepageType) {
	return (
		<div className="relative flex flex-col w-screen h-screen bg-black items-center text-white justify-center overflow-hidden">
			<div className="absolute top-0 translate-y-[-60%] w-screen h-80 bg-primary-red/50 z-10  rounded-b-full blur-[80px] "></div>
			<h2 className="impostor-title opacity-30!">Player</h2>
			<h2 className="impostor-title opacity-30!">Player</h2>
			<h2 className="impostor-title opacity-40!">Player</h2>
			<h2 className="impostor-title opacity-70!">Player</h2>
			<h2 className="impostor-title opacity-80!">Player</h2>
			<p className="text-primary-red font-primary font-medium text-shadow-primary-red/90 text-shadow-[0_2px_7px_rgb(0_0_0/0.5)] text-xl mt-3">
				Discover who's the...
			</p>
			<h1 className="impostor-title  mb-3 text-primary-red! text-shadow-primary-red/90 text-shadow-[0_2px_7px_rgb(0_0_0/0.5)] opacity-100! z-10!">
				Impostor
			</h1>
			<h2 className="impostor-title opacity-80!">Player</h2>
			<h2 className="impostor-title opacity-70!">Player</h2>
			<h2 className="impostor-title opacity-35!">Player</h2>
			<h2 className="impostor-title opacity-20!">Player</h2>
			<h2 className="impostor-title opacity-10!">Player</h2>
			<h2 className="impostor-title mb-10">Player</h2>

			<ImpostorPerson
				width="100%"
				height="100%"
				color="#d21313"
				values="#d21313"
				className="absolute -bottom-12 z-10 w-screen h-[50%]"
			/>

			<button
				className="absolute bottom-10 left-0 right-0 text-white font-primary font-bold text-3xl z-50"
				onClick={() => onNavigate('settings')}
			>
				Play
			</button>

			<div className="absolute -bottom-8 w-screen h-[250px]">
				<ImpostorPerson
					height="100%"
					color="#060606"
					values="#040404"
					className="absolute -left-20 rotate-5 rotate-y-180"
				/>
				<ImpostorPerson
					height="100%"
					color="#060606"
					values="#040404"
					className="absolute -right-20 -rotate-5 "
				/>
			</div>
			<div className="absolute bottom-0 translate-y-[60%] w-screen h-60 bg-primary-red z-10 rounded-b-full blur-[90px] "></div>
		</div>
	);
}
