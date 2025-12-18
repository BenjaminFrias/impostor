type AddBtnProps = {
	onClick: () => void;
};

export default function AddNewCategoryBtn({ onClick }: AddBtnProps) {
	return (
		<button
			className={`flex flex-col justify-center items-center bg-primary-red min-w-25 h-25 shrink-0 rounded-(--button-radius) p-2 outline-0`}
			onClick={() => onClick()}
		>
			<div className="relative flex w-8 h-8 justify-center items-center">
				<div className="absolute w-6 h-1 bg-white "></div>
				<div className="absolute w-1 h-6 bg-white"></div>
			</div>
		</button>
	);
}
