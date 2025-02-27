import { StyleSheet } from 'react-native';
import theme from '../../defaultStyles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background.card,
        padding: 20,
        paddingVertical: 14,
        elevation: 1,
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        color: theme.colors.text.main
    },
    text: {
        fontSize: 16,
        lineHeight: 27,
        color: theme.colors.text.light
    }
});

export default styles;