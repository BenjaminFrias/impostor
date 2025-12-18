type StickyFooterBtnProps = {
	label: string;
	color: 'red' | 'white';
	handleClick: () => void;
};

export default function StickyFooterBtn({
	label,
	color,
	handleClick,
}: StickyFooterBtnProps) {
	const btnColor = color === 'red' ? 'primary-red' : 'custom-white';
	const textColor = color === 'red' ? 'custom-white' : 'primary-red';

	return (
		<button
			onClick={handleClick}
			className={`fixed w-full text-${textColor} font-primary text-2xl font-bold right-0 bottom-0 h-20 rounded-t-2xl bg-${btnColor} `}
		>
			{label}
		</button>
	);
}
