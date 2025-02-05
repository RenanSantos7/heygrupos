import { StyleSheet } from 'react-native';
import theme from '../../defaultStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    msgContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    // msgList: {
    //     flexDirection: 'column-reverse',
    // }, 
    msgBar: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        gap: 12,
    },
    input: {
        flex: 1,
        borderRadius: 24,
        color: theme.colors.text.main,
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 20,
        maxHeight: 130,
        minHeight: 48
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
});

export default styles;