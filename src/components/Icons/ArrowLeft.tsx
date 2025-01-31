import { Text, View } from 'react-native';
import { IconProps } from './types';
import Svg, { Path } from 'react-native-svg';

export default function ArrowLeft({
	size = 30,
	color = '#ffffff',
	strokeWidth = 2.5,
}: IconProps) {
	return (
		<Svg width={size} height={size} viewBox='0 0 30 30' fill='none'>
			<Path
				d='M23.75 15H6.25'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M15 23.75L6.25 15L15 6.25'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}
