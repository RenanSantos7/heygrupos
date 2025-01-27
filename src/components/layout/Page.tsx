import { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface PageProps {
	children: ReactNode;
}

export default function Page(props: PageProps) {
	return (
		<SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		paddingHorizontal: 20,
		backgroundColor: 'hsla(0, 0%, 100%, 1)',
	},
});
