import { IconProps } from './types';
import Svg, { Path } from 'react-native-svg';

export default function MenuIcon({
	size = 30,
	color = '#ffffff',
	strokeWidth = 2,
}: IconProps) {
	return (
        <Svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
        >
			<Path
				d='M4 6H20M4 12H20M4 18H20'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}
