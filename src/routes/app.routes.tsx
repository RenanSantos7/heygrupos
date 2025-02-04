import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import ChatRoom from '../screens/ChatRoom';
import Messages from '../screens/Messages';
import Search from '../screens/Search';

export type AppStackParams = {
	Login: undefined;
	ChatRoom: undefined;
	Messages: {
		id: string;
		chatName: string;
	};
	Search: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();

export default function AppRoutes() {
	return (
		//@ts-ignore
		<AppStack.Navigator
			initialRouteName='ChatRoom'
			screenOptions={{
				headerTitleAlign: 'center'
			}}
		>
			<AppStack.Screen
				name='Login'
				component={SignIn}
				options={{
					title: 'Faça o Login',
				}}
			/>

			<AppStack.Screen
				name='ChatRoom'
				component={ChatRoom}
				options={{
					headerShown: false
				}}
			/>

			<AppStack.Screen
				name='Messages'
				component={Messages}
				options={({ route }) => ({
					title: route.params.chatName === 'Java' ? 'Eca, Java 🤢' : route.params.chatName
				})}
			/>

			<AppStack.Screen
				name='Search'
				component={Search}
				options={{
					title: 'Procurando algum grupo?'
				}}
			/>
		</AppStack.Navigator>
	);
}
