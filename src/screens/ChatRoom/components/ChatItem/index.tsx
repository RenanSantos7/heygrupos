import { Text, View } from 'react-native';
import styles from './styles';

interface ChatItemProps {
    title: string;
    lastMsg: string;
};

export default function ChatItem(props: ChatItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.lastMsg}</Text>
        </View>
    );
};