import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function MagnifyingIcon({
	size = 24,
	color = '#ffffff',
	strokeWidth = 3,
}: IconProps) {
	return (
		<Svg width={size} height={size} viewBox='0 0 30 30' fill='none'>
			<Path
				d='M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M26.25 26.25L20.8125 20.8125'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}
