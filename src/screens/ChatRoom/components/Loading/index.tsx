import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import theme from '../../../../defaultStyles';

export default function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator color={theme.colors.primary} size={50} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 300,
	},
});
