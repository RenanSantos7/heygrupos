import { TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native';

import { PlusIcon } from '../Icons';
import styles from './styles';

interface FloatingButtonProps extends TouchableWithoutFeedbackProps {}

export default function FloatingButton(props: FloatingButtonProps) {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<PlusIcon />
		</TouchableOpacity>
	);
}
