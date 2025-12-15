import type { SVGProps } from 'react';

export default function ImpostorPerson(props: SVGProps<SVGSVGElement>) {
	const shadowColorValues = props.values
		? getFeColorMatrixOffsets(props.values)
		: '';

	const filterId = generateUniqueFilterId();

	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox="0 0 1000 1000"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g filter={`url(#${filterId})`}>
				<path
					d="M402.626 97.9904C494.286 70.0264 631.62 56.6132 656.478 177.79C730.427 243.04 644.64 347.896 623.231 399.381C611.976 426.449 614.866 453.445 600.251 454.841C600.151 482.783 600.071 508.889 600.015 530.766C600.004 533.011 599.999 535.205 599.999 537.347C599.965 550.834 599.928 558.018 599.928 563.076C600.342 580.138 609.12 594.65 626.257 606.62C645.016 612.854 798.98 665.465 826.748 721.925C856.308 782.03 873.332 920.598 873.354 920.78H127.646C127.666 920.612 144.697 782.018 174.253 721.925C202.123 665.261 357.099 612.467 374.866 606.572L400.392 569.7C400.811 567.146 401.039 564.524 401.072 561.833C400.883 546.46 400.802 538.841 400.762 525.266C371.92 529.309 350.79 522.044 337.376 503.47C297.448 448.186 295.066 322.443 302.823 245.845C299.914 244.916 297.141 243.979 294.498 243.04C253.534 228.49 222.413 177.79 284.555 125.954C294.497 153.918 341.021 116.785 402.626 97.9904Z"
					fill={props.color}
				/>
			</g>
			<defs>
				<filter
					id={filterId}
					x="73.6455"
					y="28.9994"
					width="853.709"
					height="949.781"
					filterUnits="userSpaceOnUse"
				>
					<feMorphology
						radius="4"
						operator="dilate"
						in="SourceAlpha"
						result="effect1_dropShadow_56_879"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="25" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix type="matrix" values={shadowColorValues} />
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_56_879"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_56_879"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
}

function getFeColorMatrixOffsets(hexColor: string) {
	const hex = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;

	if (hex.length !== 6) {
		throw new Error('Invalid hex color format. Must be a 6-digit hex string.');
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	const rOffset = (r / 255).toFixed(5);
	const gOffset = (g / 255).toFixed(5);
	const bOffset = (b / 255).toFixed(5);

	const rRow = `0 0 0 0 ${rOffset}`;
	const gRow = `0 0 0 0 ${gOffset}`;
	const bRow = `0 0 0 0 ${bOffset}`;

	const aRow = `0 0 0 1 0`;

	return `${rRow} ${gRow} ${bRow} ${aRow}`;
}

const generateUniqueFilterId = () =>
	`filter-${Math.random().toString(36).substring(2, 9)}`;
