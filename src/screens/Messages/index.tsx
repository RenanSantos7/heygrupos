import {
	FlatList,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StatusBar,
	TextInput,
	TouchableHighlight,
	View,
} from 'react-native';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { AppStackParams } from '../../routes/app.routes';
import { CurrentUserMsg, Message, SystemMsg } from './components/Message';
import { IMessage } from '../../@types';
import { useAuthContext } from '../../contexts/authContext';
import InputMsg from './components/Input';
import SendIcon from '../../components/Icons/Send';
import styles from './styles';
import theme from '../../defaultStyles';

interface MessagesProps {
	route: RouteProp<AppStackParams, 'Messages'>;
}

export default function Messages({ route }: MessagesProps) {
	const params = route.params;
	const { currentUser } = useAuthContext();

	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		const unsubscriberListener = firestore()
			.collection('MESSAGE_THREADS')
			.doc(params.id)
			.collection('MESSAGES')
			.orderBy('createdAt', 'desc')
			.onSnapshot(({ docs }) => {
				const serverMessages = docs.map(doc => {
					const firebaseData = doc.data();
					const data: IMessage = {
						id: doc.id,
						text: '',
						createdAt: firestore.FieldValue.serverTimestamp(),
						...firebaseData,
					};

					if (!firebaseData.system) {
						data.user = {
							...firebaseData.user,
							name: firebaseData.user.displayName,
						};
					}

					return data;
				});

				setMessages(serverMessages);
			});

		return () => unsubscriberListener();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />

			<View style={styles.msgContainer}>
				<FlatList
					data={messages}
					renderItem={({ item }) => {
						if (item?.system) {
							return <SystemMsg text={item.text} />;
						}
						if (item.user.id === currentUser.uid) {
							return <CurrentUserMsg text={item.text} />;
						}
						return (
							<Message
								text={item.text}
								userName={item.user.name}
							/>
						);
					}}
					ItemSeparatorComponent={() => (
						<View style={{ height: 6 }} />
					)}
					style={styles.msgList}
				/>
			</View>

			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				keyboardVerticalOffset={100}
				style={styles.msgBar}
			>
				<TextInput
					value={input}
					onChangeText={text => setInput(text)}
					placeholder='Digite sua mensagem...'
					placeholderTextColor={theme.colors.text.light}
					style={styles.input}
					multiline
				/>

				<TouchableHighlight style={styles.sendBtn}>
					<SendIcon />
				</TouchableHighlight>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
