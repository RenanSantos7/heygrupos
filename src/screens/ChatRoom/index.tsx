import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, StatusBar, Text, View } from 'react-native';

import { AppStackParams } from '../../routes/app.routes';
import Header from './components/Header';
import styles from './styles';
import theme from '../../defaultStyles';
import ChatList from './components/ChatList';
import { IChat } from '../../@type';

const grupos: IChat[] = [
    { id: '01', name: 'react-native', lastMsg: 'Olá mundo!' },
    { id: '02', name: 'javascript', lastMsg: 'Viram o Temporal?' },
    { id: '03', name: 'react-native', lastMsg: 'Olá mundo!' },
]

export default function ChatRoom() {
	const navigation = useNavigation<NavigationProp<AppStackParams>>();

	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={theme.colors.primary}
				barStyle='light-content'
            />
            
			<Header />

            <ChatList
                chats={grupos}
            />
		</View>
	);
}
