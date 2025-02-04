import {
	SafeAreaView,
	StatusBar,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { MagnifyingIcon } from '../../components/Icons';
import { useAuthContext } from '../../contexts/authContext';
import styles from './styles';
import { NavigationProp, useIsFocused, useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../../routes/app.routes';

export default function Search() {
	const { currentUser, isSignedIn } = useAuthContext();
	const { navigate } = useNavigation<NavigationProp<AppStackParams>>();
	const isFocused = useIsFocused();

	const [query, setQuery] = useState('');

	function handleSearch() {
		if (query !== '') {
			console.log(`Buscar gurpos com ${query}`);
		}
	}

	useEffect(() => {
		
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />
			<View style={styles.searchBar}>
				<TextInput
					value={query}
					onChangeText={text => setQuery(text)}
					placeholder='Digite o nome da sala'
					autoCapitalize='none'
					autoFocus
					style={styles.searchInput}
				/>
				<TouchableOpacity
					style={styles.searchBtn}
					activeOpacity={0.75}
					onPress={handleSearch}
				>
					<MagnifyingIcon />
				</TouchableOpacity>
			</View>

			<View style={styles.resultsContainer} />
		</SafeAreaView>
	);
}
