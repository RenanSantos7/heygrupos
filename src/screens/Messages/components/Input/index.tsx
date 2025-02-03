import { TextInputProps, TextInput } from 'react-native';

import styles from './styles.tsx'
import theme from '../../../../defaultStyles.tsx';

interface InputMsgProps extends TextInputProps {
    
};

export default function InputMsg(props: InputMsgProps) {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.text.light}
            {...props}
        />
    );
};