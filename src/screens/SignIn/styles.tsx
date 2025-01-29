import { StyleSheet } from 'react-native';
import theme from '../../defaultStyles';

const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: 48,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        textAlign: 'center'
    },
    error: {
        fontSize: 14,
        fontStyle: 'italic',
        color: theme.colors.error
    },
    form: {
        gap: 14,
    },
    buttonContainer: {
        marginTop: 14,
        gap: 14,
    }
});

export default styles;