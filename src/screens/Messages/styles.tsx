import { StyleSheet } from 'react-native';
import theme from '../../defaultStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        flexDirection: 'column-reverse'
    },
    msgBar: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        gap: 12,
    },
    sendBtn: {
        backgroundColor: theme.colors.secondary.main,
        width: 48,
        height: 48,
        borderRadius: 48,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1
    },
    msgContainer: {
        paddingHorizontal: 20
    }
});

export default styles;