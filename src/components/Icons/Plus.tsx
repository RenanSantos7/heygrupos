import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './types';

export default function Plus({
	size = 24,
	color = '#ffffff',
	strokeWidth = 2,
}: IconProps) {
	return (
		<Svg width={size} height={size} viewBox='0 0 12.7 12.7'>
			<Rect
				fill='#ffffff'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinejoin='round'
				strokeLinecap='round'
				width={0.001}
				height={10}
				x={6.3495002}
				y={1.4817716}
				ry={0.022255901}
			/>
			<Rect
				fill='#ffffff'
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
				width={0.001}
				height={10}
				x={-6.3505001}
				y={1.4817717}
				ry={1.4817717}
				transform='rotate(-90)'
			/>
		</Svg>
	);
}
