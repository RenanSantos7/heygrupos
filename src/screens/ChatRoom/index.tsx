import { StatusBar, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { AppStackParams } from '../../routes/app.routes';
import { IChat } from '../../@types';
import { useAuthContext } from '../../contexts/authContext';
import ChatList from './components/ChatList';
import FloatingButton from '../../components/FloatingButton';
import Header from './components/Header';
import Loading from './components/Loading';
import ModalNewGroup from './components/Modal';
import styles from './styles';
import theme from '../../defaultStyles';

export default function ChatRoom() {
	const { isSignedIn } = useAuthContext();
	const { isFocused } = useNavigation<NavigationProp<AppStackParams>>();

	const [modalOpen, setModalOpen] = useState(false);
	const [chats, setChats] = useState<IChat[]>([]);
	const [loading, setLoading] = useState(true);
	const [updateScreen, setUpdateScreen] = useState(false);
	
	async function deleteRoom(id: string) {
		await firestore().collection('MESSAGE_THREADS').doc(id).delete();
		setUpdateScreen(prev => !prev);
	}
	
	useEffect(() => {
		setUpdateScreen(!updateScreen)
	}, [modalOpen]);

	useEffect(() => {
		let isActive = true;

		function getChats() {
			if (isActive) {
				firestore()
					.collection('MESSAGE_THREADS')
					.orderBy('lastMessage.createdAt', 'desc')
					.limit(10)
					.get()
					.then(snapshot => {
						const threads = snapshot.docs.map(documentSnapshot => {
							return {
								id: documentSnapshot.id,
								name: '',
								lastMessage: {
									text: '',
								},
								...documentSnapshot.data(),
							};
						});

						setLoading(false);
						setChats(threads);
					});
			}
		}

		getChats();

		return () => {
			isActive = false;
		};
	}, [isFocused, updateScreen]);

	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={theme.colors.primary}
				barStyle='light-content'
			/>

			<Header />

			{loading ? (
				<Loading />
			) : (
				<ChatList chats={chats} deleteRoom={deleteRoom} />
			)}

			{isSignedIn && (
				<FloatingButton onPress={() => setModalOpen(true)} />
			)}

			<ModalNewGroup
				visible={modalOpen}
				setVisible={setModalOpen}
			/>
		</View>
	);
}
