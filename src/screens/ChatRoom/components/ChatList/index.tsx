import { FlatList, FlatListProps, Text, View } from 'react-native';
import { IChat } from '../../../../@type';
import ChatItem from '../ChatItem';

interface ChatListProps {
	chats: IChat[];
}

export default function ChatList(props: ChatListProps) {
	return (
		<FlatList
			data={props.chats}
			renderItem={({ item }) => (
				<ChatItem title={item.name} lastMsg={item.lastMsg} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
		/>
	);
}
