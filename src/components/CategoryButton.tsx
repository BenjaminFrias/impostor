import type { Category } from '../types';

type CategoryButtonProps = {
	cat: Category;
	toggleCategory: (cat: Category) => void;
};

export default function CategoryButton({
	cat,
	toggleCategory,
}: CategoryButtonProps) {
	const buttonClass = cat.isActive
		? 'category-selected'
		: 'category-unselected';

	const Icon = cat.icon;
	const borderColor = cat.isActive ? '#171717' : '#ffffff';

	return (
		<button
			className={`flex flex-col justify-around min-w-25 h-25 shrink-0 rounded-(--button-radius) p-2 border-2 border-(--custom-white) outline-0 ${buttonClass}`}
			key={cat.name}
			onClick={() => toggleCategory(cat)}
		>
			<div className="w-full h-[55%]">
				<Icon borderColor={borderColor} />
			</div>
			<p className="font-primary font-medium">
				{cat.name[0].toUpperCase() + cat.name.slice(1)}
			</p>
		</button>
	);
}
