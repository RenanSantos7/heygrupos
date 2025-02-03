import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

interface InputProps extends TextInputProps {
	secret?: boolean;
}

export default function Input({ secret = false, ...props }: InputProps) {
	return (
		<TextInput
			style={styles.input}
			secureTextEntry={secret}
			selectionColor='hsl(0, 0%, 75%)'
			cursorColor='hsl(0, 0%, 50%)'
			placeholderTextColor='#99999B'
			{...props}
		/>
	);
}
