import { CloseIcon, OutIcon } from '../../../../components/Icons';
import {
	Animated,
	Dimensions,
	Image,
	Modal,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { useAuthContext } from '../../../../contexts/authContext';
import styles from './styles';
import theme from '../../../../defaultStyles';
import { useEffect, useRef } from 'react';

interface DrawerProps {
	visibility: boolean;
	closeModal: () => void;
}

export default function Drawer(props: DrawerProps) {
	const screenWidth = Dimensions.get('window').width;
	const animatedPos = useRef(new Animated.Value(-screenWidth)).current;
	const { currentUser, signOut } = useAuthContext();

	function handleClose() {
		Animated.timing(animatedPos, {
			toValue: -screenWidth,
			duration: 500,
			useNativeDriver: false,
		}).start(() => {
			props.closeModal();
		});
	}

	function handleSignOut() {
		handleClose();
		signOut();
	}

	useEffect(() => {
		Animated.timing(animatedPos, {
			toValue: 0,
			duration: 500,
			delay: 500,
			useNativeDriver: false,
		}).start();
	}, []);

	if (!props.visibility) return null;

	return (
		<TouchableWithoutFeedback onPress={handleClose}>
			<View style={styles.modal}>
				<Animated.View
					style={[
						styles.container,
						{
							left: animatedPos,
						},
					]}
				>
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
				</Animated.View>
			</View>
		</TouchableWithoutFeedback>
	);
}
