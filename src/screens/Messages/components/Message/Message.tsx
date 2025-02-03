import { Text, View, StyleSheet } from 'react-native';
import { MessageComponentProp } from './types';
import theme from '../../../../defaultStyles';

export default function Message(props: MessageComponentProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.owner}>{props.userName}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        width: '75%',
        padding: 10,
        borderRadius: 6,
        marginRight: 1,
        backgroundColor: '#fff',
        elevation: 1,
    },
    text: {
        fontSize: 16,
    },
    owner: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.colors.primary
    }
});