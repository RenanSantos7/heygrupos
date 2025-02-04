import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

import { AppStackParams } from '../../../../routes/app.routes';
import { MagnifyingIcon, MenuIcon } from '../../../../components/Icons';
import { useAuthContext } from '../../../../contexts/authContext';
import styles from './styles';

interface HeaderProps {
	openMenu: () => void;
}

export default function Header(props: HeaderProps) {
	const { navigate } = useNavigation<NavigationProp<AppStackParams>>();
	const { isSignedIn, signOut } = useAuthContext();

	return (
		<View style={styles.container}>
			<View style={styles.headerLeft}>
				{isSignedIn && (
					<Pressable
						onPressOut={() => props.openMenu()}
						style={styles.signOutButton}
					>
						<MenuIcon />
					</Pressable>
				)}

				<Text style={styles.title}>Grupos</Text>
			</View>

			<Pressable onPress={() => navigate('Search')}>
				<MagnifyingIcon size={30} />
			</Pressable>
		</View>
	);
}
