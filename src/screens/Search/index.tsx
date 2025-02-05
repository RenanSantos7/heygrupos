import {
	FlatList,
	Keyboard,
	SafeAreaView,
	StatusBar,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { MagnifyingIcon } from '../../components/Icons';
import { IChat } from '../../@types';
import styles from './styles';
import ChatItem from '../../components/ChatItem';

export default function Search() {
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
				renderItem={({item}) => <ChatItem chat={item} />}
				style={styles.resultsContainer}
				ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
			/>
		</SafeAreaView>
	);
}
