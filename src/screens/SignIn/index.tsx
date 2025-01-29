import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Alert, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { AppStackParams } from '../../routes/app.routes';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Page from '../../components/layout/Page';
import styles from './styles';

export default function SignIn() {
	const navigation = useNavigation<NavigationProp<AppStackParams>>();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [isLoggingIn, setIsLogginIn] = useState(true);
	const [loading, setLoading] = useState(false);

	function handleLogin() {
		if (isLoggingIn) {
			// login
			if (email === '' || password === '') {
				return;
			}
			setLoading(true);
			auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					navigation.goBack();
				})
				.catch(error => {
					console.error(error);
					Alert.alert('Erro', error);
				})
				.finally(() => setLoading(false));
		} else {
			// cadastro
			if (name === '' || email === '' || password === '') {
				return;
			}

			setLoading(true);
			auth()
				.createUserWithEmailAndPassword(email, password)
				.then(snapshot => {
					// também é comum usar 'user'
					snapshot.user
						.updateProfile({
							displayName: name,
						})
						.then(() => {
							navigation.goBack();
						});
				})
				.catch(error => {
					if (error.code === 'auth/email-already-in-use') {
						setErrorMsg('Esse endereço de e-mail já está em uso');
					}

					if (error.code === 'auth/invalid-email') {
						setErrorMsg('Esse endereço de e-mail não é valido!');
					}

					if (error.code === 'auth/internal-error') {
						setErrorMsg('Erro interno. Desculpe :(');
					}

					console.error(error);
					Alert.alert('Erro', error);
				})
				.finally(() => setLoading(false));
		}
	}

	useEffect(() => {
		return () => setErrorMsg('');
	}, []);

	return (
		<Page>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>HeyGrupos</Text>
				<Text style={styles.text}>
					Ajude, colabore, faça networking!
				</Text>
			</View>

			{isLoggingIn ? (
				<View style={styles.form}>
					<Input
						value={email}
						onChangeText={text => setEmail(text)}
						placeholder='Qual seu email?'
						autoFocus
					/>

					<Input
						value={password}
						onChangeText={text => setPassword(text)}
						placeholder='Digite aqui a sua senha'
						secret
					/>
				</View>
			) : (
				<View style={styles.form}>
					<Input
						value={name}
						onChangeText={text => setName(text)}
						placeholder='Seu nome'
						autoFocus
					/>

					<Input
						value={email}
						onChangeText={text => setEmail(text)}
						placeholder='Seu e-mail'
					/>

					<Input
						value={password}
						onChangeText={text => setPassword(text)}
						placeholder='Sua senha'
						secret
					/>

					{errorMsg && (
						<Text style={styles.error}>Mensagem de erro</Text>
					)}
				</View>
			)}

			<View style={styles.buttonContainer}>
				<Button
					title={isLoggingIn ? 'Acessar' : 'Cadastrar'}
					onPress={handleLogin}
					loading={loading}
				/>

				<Button
					title={
						isLoggingIn ? 'Criar nova conta' : 'Já possuo uma conta'
					}
					variant='secondary'
					onPress={() => setIsLogginIn(prev => !prev)}
				/>
			</View>
		</Page>
	);
}
