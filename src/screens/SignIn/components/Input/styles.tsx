import { StyleSheet } from 'react-native';
import theme from '../../../../defaultStyles';

const styles = StyleSheet.create({
    input: {
        padding: 16,
        fontSize: 16,
        lineHeight: 24,
        backgroundColor: 'hsla(0, 0%, 92%, 1)',
        borderRadius: 8,
        color: theme.colors.text.main
    },
});

export default styles;