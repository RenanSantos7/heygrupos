import { ReactNode } from 'react';
import { ColorValue, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

interface PageProps {
	children: ReactNode;
	statusBarColor?: ColorValue;
	clearPadding?: boolean;
}

export default function Page({
	children,
	statusBarColor = '#ffffff',
	clearPadding = false,
}: PageProps) {
	return (
		<SafeAreaView
			style={[
				styles.container,
				clearPadding
					? { paddingHorizontal: 0 }
					: { paddingHorizontal: 20 },
			]}
		>
			<StatusBar barStyle='default' backgroundColor={statusBarColor} />
			{children}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: '#f6f6f6',
	},
});
