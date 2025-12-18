import { useState } from 'react';
import type { Category } from '../types';
import StarIcon from './decorative/StarIcon';
import StickyFooterBtn from './StickyFooterBtn';

type CreateCategoryModalProps = {
	isOpen: boolean;
	categories: string[];
	onClose: () => void;
	onSavingCategory: (newCat: Category) => void;
};

const DEFAULT_CATEGORY = {
	name: 'custom',
	isActive: true,
	icon: StarIcon,
	words: [],
};

export default function CreateCategoryModal({
	isOpen,
	categories,
	onClose,
	onSavingCategory,
}: CreateCategoryModalProps) {
	const [customCategory, setCustomCategory] = useState<Category>({
		...DEFAULT_CATEGORY,
	});

	const [word, setWord] = useState('');
	const [categoryName, setCategoryName] = useState('');
	const [error, setError] = useState('');

	const handleSaveCategory = () => {
		// Check for name and words
		setCustomCategory({ ...customCategory, name: categoryName });

		if (!customCategory.name || customCategory.name.trim() === '') {
			setError('Your category needs a name');
			return;
		}

		for (const cat of categories) {
			if (customCategory.name.toLowerCase() === cat.toLowerCase()) {
				setError(`${customCategory.name} category already exist`);
				return;
			}
		}

		if (customCategory.words.length < 3) {
			setError('Please add at least 3 words');
			return;
		}

		setWord('');
		setCategoryName('');
		setCustomCategory({ ...DEFAULT_CATEGORY });
		setError('');
		onSavingCategory(customCategory);
		onClose();
	};

	const addWord = (newWord: string) => {
		if (newWord && newWord.length > 1) {
			// Check if word already exist
			for (const word of customCategory.words) {
				if (word === newWord) {
					setError('Word already exist');
					return;
				}
			}

			// Save word
			setCustomCategory({
				...customCategory,
				words: [...customCategory.words, newWord],
			});
		} else {
			setError('Too short (min. 2 characters)');
			return;
		}

		setError('');
		setWord('');
	};

	const removeWord = (wordToRemove: string) => {
		const updatedWords = customCategory.words.filter(
			(cat) => cat !== wordToRemove
		);

		setCustomCategory({ ...customCategory, words: updatedWords });
	};

	return (
		<div
			className={`create-cat-div absolute bottom-0 top-0 inset-0 w-full p-5 bg-gray z-50 transition-transform
					duration-300 ease-in-out transform flex flex-col gap-8 ${
						isOpen ? 'translate-y-0' : 'translate-y-full'
					}`}
		>
			<div className="flex justify-between items-center pr-5">
				<h2 className="font-secondary text-4xl font-medium">
					Create your own category
				</h2>
				<button
					className="relative flex w-7 h-10"
					onClick={() => {
						setError('');
						setWord('');
						setCategoryName('');
						setCustomCategory({ ...DEFAULT_CATEGORY });
						onClose();
					}}
				>
					<div className="absolute flex justify-center items-center w-full h-full rotate-45 z-10">
						<div className="absolute w-1 h-6 bg-light-gray rounded-sm"></div>
						<div className="absolute w-6 h-1 bg-light-gray rounded-sm"></div>
					</div>
				</button>
			</div>

			{error ? (
				<div className="bg-primary-red/10 font-medium text-custom-white text-center font-secondary p-3 border rounded-sm border-primary-red/50">
					{error}
				</div>
			) : null}

			<div className="flex flex-col gap-3 w-full mb-5">
				<label
					className="text-light-gray font-secondary font-medium text-2xl"
					htmlFor="cat-name"
				>
					Name
				</label>
				<input
					type="text"
					name="cat-name"
					id="cat-name"
					value={categoryName}
					onChange={(e) => setCategoryName(e.target.value)}
					className="h-8 font-medium font-primary bg-light-gray/50 rounded-sm outline-0 pl-3 py-5"
					placeholder="Enter category name"
				/>
			</div>

			<div className="flex flex-col gap-3 w-full">
				<label
					className="text-light-gray font-secondary font-medium text-2xl"
					htmlFor="cat-name"
				>
					Add your words
				</label>
				<form
					className="flex gap-3 w-full"
					onSubmit={(e) => {
						e.preventDefault();
						addWord(word);
					}}
				>
					<input
						type="text"
						name="cat-name"
						id="cat-name"
						value={word}
						onChange={(e) => setWord(e.target.value)}
						className="h-8 w-full font-medium font-primary bg-light-gray/50 rounded-sm outline-0 pl-3 py-5"
						placeholder="Enter word"
					/>

					<button
						className="w-20 bg-primary-red rounded-sm text-2xl"
						type="submit"
					>
						+
					</button>
				</form>
			</div>

			<div className="flex gap-2 flex-wrap mb-20 overflow-y-auto">
				{customCategory.words.map((word) => {
					return (
						<button
							key={word}
							className="flex-[100%] bg-custom-white font-secondary font-bold text-gray py-1.5 px-3 rounded-sm"
							onClick={() => removeWord(word)}
						>
							{word}
						</button>
					);
				})}
			</div>

			<StickyFooterBtn
				label="Save"
				color="red"
				handleClick={handleSaveCategory}
			/>
		</div>
	);
}
