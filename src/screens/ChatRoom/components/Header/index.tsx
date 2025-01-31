import { Pressable, Text, View } from 'react-native';

import { ArrowLeft, Magnifying, Out } from '../../../../components/Icons';
import styles from './styles';
import { useAuthContext } from '../../../../contexts/authContext';

interface HeaderProps {}

export default function Header(props: HeaderProps) {
	const { isSignedIn, signOut } = useAuthContext();

	return (
		<View style={styles.container}>
			<View style={styles.headerLeft}>
				{isSignedIn && (
					<Pressable
						onPressOut={() => signOut()}
						style={styles.signOutButton}
					>
						<Out size={20} />
					</Pressable>
				)}

				<Text style={styles.title}>Grupos</Text>
			</View>

			<Magnifying size={30} />
		</View>
	);
}
