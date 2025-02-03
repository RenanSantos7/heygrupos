import { StyleSheet, Text, View } from 'react-native';

import theme from '../../../../defaultStyles';
import { MessageComponentProp } from './types';

export default function SystemMsg(props: MessageComponentProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginHorizontal: 'auto',
        borderRadius: 600,
        alignSelf: 'center',
    },
    text: {
        fontSize: 14,
        color: theme.colors.text.light,
        textAlign: 'center'
    }
});