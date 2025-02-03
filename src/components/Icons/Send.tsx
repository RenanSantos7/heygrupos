import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function SendIcon({
	size = 24,
	color = '#fff',
	strokeWidth = 2,
}: IconProps) {
	return (
		<Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
			<Path
				d='M22 2L11 13'
				stroke='white'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M22 2L15 22L11 13L2 9L22 2Z'
				stroke='white'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}
