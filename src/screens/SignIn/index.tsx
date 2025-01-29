import { Alert, Text, View } from 'react-native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';

import Page from '../../components/layout/Page';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignIn() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggingIn, setIsLogginIn] = useState(true);

	function handleLogin() {
		if (isLoggingIn) {
			// login
		} else {
			// cadastro
		}
	}

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
				</View>
			)}

			<Button
				title={isLoggingIn ? 'Acessar' : 'Cadastrar'}
				onPress={handleLogin}
			/>

			<Button
				title={isLoggingIn ? 'Criar nova conta' : 'Já possuo uma conta'}
				variant='secondary'
				onPress={() => setIsLogginIn(prev => !prev)}
			/>
		</Page>
	);
}
