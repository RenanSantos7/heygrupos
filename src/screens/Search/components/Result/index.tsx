import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IChat } from '../../../../@types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../../../../routes/app.routes';
import theme from '../../../../defaultStyles';

interface ResultProps {
	data: IChat;
}

export default function Result({ data }: ResultProps) {
	const { navigate } = useNavigation<NavigationProp<AppStackParams>>();

	return (
		<Pressable
			style={styles.container}
			onPress={() =>
				navigate('Messages', {
					id: data.id,
					chatName: data.name,
				})
			}
		>
			<Text style={styles.title}>{data.name}</Text>
			<Text style={styles.text}>{data.lastMessage.text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 80,
		backgroundColor: '#F6F6F6',
		marginBottom: 8,
		paddingHorizontal: 20,
		paddingVertical: 12,
	},
	title: {
		fontWeight: '700',
		fontSize: 18,
		lineHeight: 27,
		color: theme.colors.text.main,
	},
	text: {
		fontSize: 16,
		lineHeight: 27,
		color: theme.colors.text.light,
	},
});
