import { StyleSheet } from 'react-native';
import theme from '../../../../defaultStyles';

const styles = StyleSheet.create({
    shadow: {
        flex: 1,
        backgroundColor: '#30303030',
    },
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '60%',
        justifyContent: 'space-between',

        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#101010',
    },
    top: {
        paddingTop: 48,
        paddingLeft: 10,
        marginHorizontal: 10,
        position: 'relative'
    },
    btnClose: {
        position: 'absolute',
        top: 48,
        right: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPhoto: {
        borderWidth: 2,
        borderColor: theme.colors.text.light,
        marginBottom: 12,
        width: 64,
        height: 64,
        borderRadius: 64,
    },
    userName: {
        fontSize: 24,
        color: theme.colors.text.main,
    },
    userEmail: {
        fontSize: 13,
        color: theme.colors.text.light,
    },
    bottom: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: theme.colors.text.light,
        marginHorizontal: 10,
        paddingLeft: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        gap: 12,
    },
    outText: {
        color: theme.colors.error,
    },
});

export default styles;