type ErrorProps = {
	msg: string;
};

export default function ErrorMessage({ msg }: ErrorProps) {
	return (
		<div
			className="bg-primary-red/10 font-medium text-custom-white
                    text-center font-secondary p-3 border rounded-(--button-radius) border-primary-red/50"
		>
			{msg}
		</div>
	);
}
