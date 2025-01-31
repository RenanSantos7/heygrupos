import { StyleSheet } from 'react-native';
import theme from '../../defaultStyles';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 600,
        elevation: 4,
        width: 64,
        height: 64
    },
});

export default styles;