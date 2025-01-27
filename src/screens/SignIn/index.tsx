import { StyleSheet, Text, View } from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SignIn</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
});
