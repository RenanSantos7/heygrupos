import {
	ActivityIndicator,
	FlatList,
	FlatListProps,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { IChat } from '../../../../@types';
import ChatItem from '../../../../components/ChatItem';

interface ChatListProps {
	chats: IChat[];
	deleteRoom: (id: string) => void;
}

export default function ChatList(props: ChatListProps) {
	return (
		<FlatList
			data={props.chats}
			renderItem={({ item }) => (
				<ChatItem
					chat={item}
					deleteRoom={props.deleteRoom}
				/>
			)}
			ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
		/>
	);
}
