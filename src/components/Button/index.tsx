import { useMemo, useState } from 'react';
import {
	ActivityIndicator,
	ActivityIndicatorBase,
	Pressable,
	PressableProps,
	Text,
	View,
} from 'react-native';
import styles from './styles';
import theme from '../../defaultStyles';

interface ButtonProps extends PressableProps {
	title: string;
	variant?: 'primary' | 'secondary';
	loading?: boolean;
}

type TextStyle = 'primaryTxt' | 'secondaryTxt';

export default function Button({
	variant = 'primary',
	title,
	loading,
	...props
}: ButtonProps) {
	const txtStyle = useMemo<TextStyle>(() => `${variant}Txt`, [variant]);

	return (
		<Pressable
			style={[styles[variant], props.disabled && styles.disabled]}
			{...props}
		>
			<Text style={styles[txtStyle]}>{title}</Text>

			{loading ? (
				<ActivityIndicator
					color={
						variant === 'primary' ? 'white' : theme.colors.primary
					}
				/>
			) : null}
		</Pressable>
	);
}
