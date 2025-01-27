import { Alert, Text, View } from 'react-native';
import Page from '../../components/layout/Page';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useState } from 'react';

export default function SignIn() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState<'login' | 'signup'>('login');

	return (
		<Page>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>HeyGrupos</Text>
				<Text style={styles.text}>
					Ajude, colabore, faça networking!
				</Text>
			</View>

			{status === 'login' ? (
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

					<Button
						title='Acessar'
						onPress={() => Alert.alert('Olá', 'Mundo!')}
					/>

					<Button
						title='Criar uma nova conta'
						variant='secondary'
						onPress={() => setStatus('signup')}
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

					<Button
						title='Acessar'
						onPress={() => Alert.alert('Olá', 'Mundo!')}
					/>

					<Button
						title='Faça login'
						variant='secondary'
						onPress={() => setStatus('login')}
					/>
				</View>
			)}
		</Page>
	);
}
