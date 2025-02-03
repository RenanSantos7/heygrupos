import {
	FlatList,
	StatusBar,
	TouchableHighlight,
	View,
} from 'react-native';
import {
    NavigationProp,
	RouteProp,
	useNavigation,
} from '@react-navigation/native';

import { AppStackParams } from '../../routes/app.routes';
import { CurrentUserMsg, Message, SystemMsg } from './components/Message';
import { useAuthContext } from '../../contexts/authContext';
import InputMsg from './components/Input';
import SendIcon from '../../components/Icons/Send';
import styles from './styles';

const mensagens = [
	{
		id: '00',
		text: 'Grupo react-native criado. Bem vindo(a) ! ',
		createdAt: '2025-01-01-11:00:00',
		owner: 'Y9TcSi0qg5YNRNsf8Ti0TNVcyWf1',
		system: true,
	},
	{
		id: '01',
		text: 'Um chat para criar um networking com a galera que está buscando aprender RN ',
		createdAt: '2025-01-01-11:00:05',
		owner: 'Y9TcSi0qg5YNRNsf8Ti0TNVcyWf1',
	},
	{
		id: '02',
		text: 'Sejam todos bem vindos 🥰',
		createdAt: '2025-01-01-11:00:01',
		owner: 'Y9TcSi0qg5YNRNsf8Ti0TNVcyWf1',
	},
	{
		id: '03',
		text: 'Opa, tudo certo?',
		createdAt: '2025-01-01-11:01:15',
		owner: '7IOSPcn8DaZtQjekmpRB1oaHHId2',
	},
	{
		id: '04',
		text: 'Tudo certo, e aí?',
		createdAt: '2025-01-01-11:02:57',
		owner: 'Y9TcSi0qg5YNRNsf8Ti0TNVcyWf1',
	},
	{
		id: '05',
		text: 'Fala galera, novo aqui no grupo. tamo junto!',
		createdAt: '2025-01-01-11:10:23',
		owner: '14LFVoLES7Uf5yPOB76PbDr3NVf2',
	},
];

interface MessagesProps {
    route: RouteProp<AppStackParams, 'Messages'>;
}

export default function Messages({ route }:MessagesProps) {
    const params = route.params;
	const { currentUser } = useAuthContext();
	const navigation = useNavigation<NavigationProp<AppStackParams>>();

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />
			<View style={styles.msgBar}>
				<InputMsg placeholder='Digite sua mensagem...' />

				<TouchableHighlight style={styles.sendBtn}>
					<SendIcon />
				</TouchableHighlight>
			</View>

			<View style={styles.msgContainer}>
				<FlatList
					data={mensagens}
					renderItem={({ item }) => {
						if (item?.system) {
							return <SystemMsg text={item.text} />;
						}
						if (item.owner === currentUser.uid) {
							return <CurrentUserMsg text={item.text} />;
						}
						return <Message text={item.text} ownerName='José' />;
					}}
					ItemSeparatorComponent={() => (
						<View style={{ height: 6 }} />
					)}
				/>
			</View>
		</View>
	);
}
