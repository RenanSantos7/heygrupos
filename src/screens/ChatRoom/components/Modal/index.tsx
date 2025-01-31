import { Dispatch, SetStateAction, useState } from 'react';
import {
	Modal,
	ModalProps,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './styles.tsx';
import Input from '../../../../components/Input/index.tsx';
import Button from '../../../../components/Button/index.tsx';
import { useAuthContext } from '../../../../contexts/authContext.tsx';

interface NewProps extends ModalProps {
	setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ModalNewGroup(props: NewProps) {
	const { currentUser } = useAuthContext();

	const [groupName, setGroupName] = useState('');

	function handleButtonCreate() {
		if (groupName === '') return;
		createRoom();
	}

	function createRoom() {
		firestore()
			.collection('MESSAGE_THREADS')
			.add({
				name: groupName,
				owner: currentUser.uid,
				lastMessage: {
					text: `Grupo ${groupName} criado. Bem vindo(a)!`,
					createdAt: firestore.FieldValue.serverTimestamp(),
				},
			})
			.then(docRef => {
				docRef
					.collection('MESSAGES')
					.add({
						text: `Grupo ${groupName} criado. Bem vindo(a)!`,
						createdAt: firestore.FieldValue.serverTimestamp,
						system: true,
					})
					.then(() => {
						setGroupName('');
						props.setVisible(false);
					});
			})
			.catch(error => {
				console.error(error);
			});
	}

	return (
		<Modal animationType='none' transparent {...props}>
			<View style={styles.container}>
				<TouchableWithoutFeedback
					onPress={() => props.setVisible(false)}
				>
					<View style={styles.shadow} />
				</TouchableWithoutFeedback>
				<View style={styles.content}>
					<Text style={styles.title}>Criar novo grupo</Text>
					<Input
						value={groupName}
						onChangeText={text => setGroupName(text)}
						placeholder='Nome para o grupo'
					/>

                    <Button
                        title='Criar sala'
                        onPress={handleButtonCreate}
                    />

					<Button
						title='Voltar'
						onPress={() => props.setVisible(false)}
						variant='secondary'
					/>
				</View>
			</View>
		</Modal>
	);
}
