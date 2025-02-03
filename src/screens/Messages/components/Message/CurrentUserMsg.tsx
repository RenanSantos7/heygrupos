import { Text, View, StyleSheet } from 'react-native';
import { MessageComponentProp } from './types';
import theme from '../../../../defaultStyles';

export default function CurrentUserMsg(props: MessageComponentProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        width: '75%',
        padding: 10,
        borderRadius: 6,
        marginRight: 1,
        backgroundColor: theme.colors.secondary.light,
        elevation: 1,
    },
    text: {
        fontSize: 16,
    },
});