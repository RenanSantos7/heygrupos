import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

import { AppStackParams } from '../../routes/app.routes';

export default function ChatRoom() {
    const navigation = useNavigation<NavigationProp<AppStackParams>>();

    return (
        <View style={styles.container}>
            <Text>Chat</Text>

            <Button
                title='Fazer login'
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
});