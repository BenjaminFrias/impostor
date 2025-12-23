import { ICON_MAP } from '../data/gameDefaults';
import type { Category } from '../types';
import StarIcon from './decorative/StarIcon';

type CategoryButtonProps = {
	cat: Category;
	onToggle: (cat: Category) => void;
};

export default function CategoryButton({ cat, onToggle }: CategoryButtonProps) {
	const buttonClass = cat.isActive
		? 'category-selected'
		: 'category-unselected';

	const iconNameIndex = cat.name.trim().split(' ').join('').toLowerCase();

	const Icon = ICON_MAP[iconNameIndex] ?? StarIcon;

	const borderColor = cat.isActive ? '#171717' : '#ffffff';

	return (
		<button
			className={`flex flex-col justify-around min-w-25 h-25 shrink-0 rounded-(--button-radius) p-2 border-2 border-custom-white outline-0 ${buttonClass}`}
			key={cat.name}
			onClick={() => onToggle(cat)}
		>
			<div className="w-full h-[55%]">
				<Icon borderColor={borderColor} />
			</div>
			<p className="font-primary font-medium">{cat.name}</p>
		</button>
	);
}
