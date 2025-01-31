import { Alert, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../../../../routes/app.routes';
import { useAuthContext } from '../../../../contexts/authContext';

interface ChatItemProps {
    title: string;
    lastMsg: string;
};

export default function ChatItem(props: ChatItemProps) {
    const navigation = useNavigation<NavigationProp<AppStackParams>>();
    const { isSignedIn } = useAuthContext();

    function handleClick() {
        if (!isSignedIn) {
            navigation.navigate('Login');
        } else {
            // navigation.navigate('Messages')
            Alert.alert('Messagens', 'Tamo trabalhando nisso')
        }
    }

    return (
        <TouchableOpacity onPress={handleClick} style={styles.container} >
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            <Text style={styles.text} numberOfLines={1}>{props.lastMsg}</Text>
        </TouchableOpacity>
    );
};