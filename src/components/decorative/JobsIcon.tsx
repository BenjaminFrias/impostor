import type { IconProps } from '../../types';

export default function JobsIcon({ borderColor }: IconProps) {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask id="path-1-inside-1_139_78" fill="white">
				<rect x="129.25" y="48" width="140" height="73" rx="18" />
			</mask>
			<rect
				x="129.25"
				y="48"
				width="140"
				height="73"
				rx="18"
				stroke={borderColor}
				strokeWidth="40"
				mask="url(#path-1-inside-1_139_78)"
			/>
			<rect
				x="44.25"
				y="168"
				width="311"
				height="174"
				rx="10"
				stroke={borderColor}
				strokeWidth="20"
			/>
			<path
				d="M365.329 99.75H30.8122L27 190.75L198.07 233.75L372 190.75L365.329 99.75Z"
				fill="#D21313"
			/>
			<path
				d="M194.409 233.534L42.1399 195.389C33.2411 193.159 27 185.162 27 175.988V114.75C27 103.704 35.9543 94.75 47 94.75H352C363.046 94.75 372 103.704 372 114.75V175.978C372 185.156 365.752 193.157 356.848 195.381L204.116 233.537C200.929 234.334 197.595 234.332 194.409 233.534Z"
				stroke={borderColor}
				strokeWidth="20"
			/>
			<rect
				x="113.25"
				y="193"
				width="43"
				height="54"
				rx="12"
				fill={borderColor}
			/>
			<rect
				x="255.25"
				y="193"
				width="43"
				height="54"
				rx="12"
				fill={borderColor}
			/>
		</svg>
	);
}
