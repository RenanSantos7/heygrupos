import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import ChatRoom from '../screens/ChatRoom';
import Messages from '../screens/Messages';

export type AppStackParams = {
	Login: undefined;
	ChatRoom: undefined;
	Messages: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();

export default function AppRoutes() {
	return (
		//@ts-ignore
		<AppStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='ChatRoom'
		>
			<AppStack.Screen name='Login' component={SignIn} />

			<AppStack.Screen name='ChatRoom' component={ChatRoom} />
			
            <AppStack.Screen name='Messages' component={Messages} />
		</AppStack.Navigator>
	);
}
