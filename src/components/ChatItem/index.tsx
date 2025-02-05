import { Alert, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { AppStackParams } from '../../routes/app.routes';
import { IChat } from '../../@types';
import { useAuthContext } from '../../contexts/authContext';
import styles from './styles';

interface ChatItemProps {
    chat: IChat;
    deleteRoom?: (id: string) => void
}

export default function ChatItem({ chat, deleteRoom }: ChatItemProps) {
	const { navigate } = useNavigation<NavigationProp<AppStackParams>>();
	const { isSignedIn, currentUser } = useAuthContext();

	function handleClick() {
		if (isSignedIn) {
			navigate('Messages',
				{
					id: chat.id,
					chatName: chat.name,
				}
			);
		} else {
			navigate('Login');
		}
	}

	function handleLongPress() {
		if (!deleteRoom) return
		
		if (chat.owner === currentUser.uid) {
			Alert.alert(
				'Atenção',
				'Tem certeza de que quer deletar essa sala?',
				[
					{ text: 'Não', style: 'cancel' },
					{
						text: 'Sim',
						style: 'destructive',
						onPress: () => {
							deleteRoom(chat.id);
						},
					},
				],
				{ cancelable: true }
			);
		} else {
			Alert.alert(
				'Atenção',
				'Você não pode deletar esta sala pois não é proprietário dela.'
			);
		}
	}

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handleClick}
			onLongPress={handleLongPress}
		>
			<Text style={styles.title} numberOfLines={1}>
				{chat.name}
			</Text>
			<Text style={styles.text} numberOfLines={1}>
				{chat.lastMessage.text}
			</Text>
		</TouchableOpacity>
	);
}
