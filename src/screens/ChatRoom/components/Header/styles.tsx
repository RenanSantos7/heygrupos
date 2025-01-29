import { StyleSheet } from 'react-native';
import theme from '../../../../defaultStyles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        padding: 20,
        // paddingBottom: 24,
        paddingTop: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    }
});

export default styles;