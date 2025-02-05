import {
	NavigationProp,
	useIsFocused,
	useNavigation,
} from '@react-navigation/native';
import {
	FlatList,
	Keyboard,
	SafeAreaView,
	StatusBar,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { AppStackParams } from '../../routes/app.routes';
import { MagnifyingIcon } from '../../components/Icons';
import { useAuthContext } from '../../contexts/authContext';
import styles from './styles';
import { IChat } from '../../@types';
import Result from './components/Result';

export default function Search() {
	const { currentUser, isSignedIn } = useAuthContext();
	const { navigate } = useNavigation<NavigationProp<AppStackParams>>();
	const isFocused = useIsFocused();

	const [query, setQuery] = useState('');
	const [results, setResults] = useState<IChat[]>([]);

	async function handleSearch() {
		if (query !== '') {
			const responseSearch = await firestore()
				.collection('MESSAGE_THREADS')
				.where('name', '>=', query.trim())
				.where('name', '<=', query.trim() + '\uf8ff')
				.get()
				.then(({ docs }) => {
					const threads = docs.map(document => ({
						id: document.id,
						name: '',
						lastMessage: {
							text: '',
						},
						...document.data(),
					}));
					setResults(threads);
					setQuery('');
					Keyboard.dismiss();
				});
		}
	}

	useEffect(() => {}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />
			<View style={styles.searchBar}>
				<TextInput
					value={query}
					onChangeText={text => setQuery(text)}
					placeholder='Digite o nome da sala'
					autoCapitalize='none'
					style={styles.searchInput}
					autoFocus
				/>

				<TouchableOpacity
					style={styles.searchBtn}
					activeOpacity={0.75}
					onPress={handleSearch}
				>
					<MagnifyingIcon />
				</TouchableOpacity>
			</View>

			<FlatList
				data={results}
				renderItem={({item}) => <Result data={item} />}
				style={styles.resultsContainer}
			/>
		</SafeAreaView>
	);
}
