import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { Alert } from 'react-native';
import { IUser } from '../@types';
import isEmptyObj from '../utils/isEmptyObj';

type FirebaseUser = FirebaseAuthTypes.User

interface IAuthContext {
	currentUser: IUser;
	isSignedIn: boolean;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (name: string, email: string, password: string) => Promise<void>;
	signOut: () => void;
}

const AuthContext = createContext<IAuthContext>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [currentUser, setCurrentUser] = useState<IUser>(null);

	async function signIn(email: string, password: string) {
		return auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				setCurrentUser({
					uid: user.uid,
					email: user.email,
					name: user.displayName,
				});
			});
	}

	async function signUp(
		name: string,
		email: string,
		password: string
	): Promise<void> {
		return auth()
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				user.updateProfile({
					displayName: name,
				});
			});
	}

	async function signOut() {
		Alert.alert(
			'Sair',
			'Tem certeza de que deseja sair do HeyChat?',
			[
				{
					text: 'Não',
					style: 'cancel',
				},
				{
					text: 'Sim',
					style: 'destructive',
					onPress: () => {
						auth()
							.signOut()
							.then(() => setCurrentUser(null))
							.then(() => Alert.alert('Aviso', 'Saiu!'));
					},
				},
			],
			{ cancelable: true }
		);
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(() => {
			//@ts-expect-error async function return
			const user: FirebaseUser = auth().currentUser.toJSON();

			setCurrentUser({
				uid: user.uid,
				name: user.displayName,
				email: user.email,
				photoUrl: user.photoURL,
			});
		});
		
		// return subscriber;
	}, []);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				isSignedIn: !!currentUser,
				signIn,
				signUp,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error('AuthContext não está sendo provido neste componente');
	return context;
}
