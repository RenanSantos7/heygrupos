import { useMemo, useState } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import styles from './styles';

interface ButtonProps extends PressableProps {
	title: string;
	variant?: 'primary' | 'secondary';
}

type TextStyle = 'primaryTxt' | 'secondaryTxt';

export default function Button({
    variant = 'primary',
    title,
    ...props
}: ButtonProps) {
    const txtStyle = useMemo<TextStyle>(
        () => `${variant}Txt`
    , [variant]);

	return (
        <Pressable
            style={styles[variant]}
            {...props}
        >
            <Text style={styles[txtStyle]}>
                {title}
            </Text>
		</Pressable>
	);
}
