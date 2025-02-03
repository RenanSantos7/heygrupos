import { StyleSheet } from 'react-native';
import theme from '../../../../defaultStyles';

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderRadius: 600,
        color: theme.colors.text.main,
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 20,
    },
});

export default styles;