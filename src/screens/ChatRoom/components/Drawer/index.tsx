import { Image, Modal, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useAuthContext } from '../../../../contexts/authContext';
import { CloseIcon, OutIcon } from '../../../../components/Icons';
import theme from '../../../../defaultStyles';
import { useMemo } from 'react';

interface DrawerProps {
	visibility: boolean;
	closeModal: () => void;
}

export default function Drawer(props: DrawerProps) {
	const { currentUser, signOut } = useAuthContext();

	function handleClose() {
		props.closeModal();
	}

	function handleSignOut() {
		handleClose();
		signOut();
	}

	return (
		<Modal
			visible={props.visibility}
			animationType='fade'
			transparent
			statusBarTranslucent
		>
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={styles.container}>
					<View style={styles.top}>
						<Pressable
							style={styles.btnClose}
							onPressOut={handleClose}
						>
							<CloseIcon
								color={theme.colors.text.light}
								size={16}
							/>
						</Pressable>

						<Image
							style={styles.userPhoto}
							source={
								currentUser && currentUser?.photoUrl
									? { uri: currentUser?.photoUrl }
									: require('../../../../assets/profile.png')
							}
						/>

						<Text style={styles.userName}>
							{currentUser && currentUser.name}
						</Text>
						<Text style={styles.userEmail}>
							{currentUser && currentUser.email}
						</Text>
					</View>
					<Pressable style={styles.bottom} onPress={handleSignOut}>
						<OutIcon size={20} color={theme.colors.error} />
						<Text style={styles.outText}>Sair</Text>
					</Pressable>
				</View>
				<Pressable style={styles.shadow} onPressIn={handleClose} />
			</View>
		</Modal>
	);
}
