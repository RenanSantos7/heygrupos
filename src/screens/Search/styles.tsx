import { StyleSheet } from 'react-native';
import theme from '../../defaultStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    searchBar: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    searchInput: {
        backgroundColor: '#EBEBEBB2',
        paddingVertical: 10,
        paddingLeft: 16,
        flex: 1,
        borderRadius: 24,
        height: 48,
    },
    searchBtn: {
        backgroundColor: theme.colors.primary,
        height: 48,
        width: 48,
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultsContainer: {
        flex: 1,
    }
});

export default styles;