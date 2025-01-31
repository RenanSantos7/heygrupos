import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(34, 34, 34, 0.4)',
    },
    shadow: {
        flex: 1,
    },
    content: {
        backgroundColor: '#fff',
        padding: 24,
        flex: 1,
        gap: 14,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
    },
    title: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 18
    }
});

export default styles;