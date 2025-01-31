import { StyleSheet } from 'react-native';
import theme from '../../../../defaultStyles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        padding: 20,
        // paddingBottom: 24,
        paddingTop: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    signOutButton: {
        width: 32,
        height: 32
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    }
});

export default styles;