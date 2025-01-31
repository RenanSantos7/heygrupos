import {
	ActivityIndicator,
	FlatList,
	FlatListProps,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { IChat } from '../../../../@types';
import ChatItem from '../ChatItem';
import theme from '../../../../defaultStyles';

interface ChatListProps {
	chats: IChat[];
}

export default function ChatList(props: ChatListProps) {
	return (
		<FlatList
			data={props.chats}
			renderItem={({ item }) => (
				<ChatItem
					title={item.name}
					lastMsg={item.lastMessage.text || ''}
				/>
			)}
			ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
		/>
	);
}
