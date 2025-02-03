import { Pressable, Text, View } from 'react-native';

import { ArrowLeftIcon, MagnifyingIcon, MenuIcon } from '../../../../components/Icons';
import styles from './styles';
import { useAuthContext } from '../../../../contexts/authContext';

interface HeaderProps {
	openMenu: () => void;
}

export default function Header(props: HeaderProps) {
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

			<MagnifyingIcon size={30} />
		</View>
	);
}
