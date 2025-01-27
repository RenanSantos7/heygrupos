import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

const buttonStyle: ViewStyle = {
    padding: 16,
    borderRadius: 8,
};

const textStyle: TextStyle = {
	fontSize: 16,
	textAlign: 'center',
};

const styles = StyleSheet.create({
	primary: {
		...buttonStyle,
		backgroundColor: 'hsla(226, 66%, 51%, 1)',
	},
	primaryTxt: {
		...textStyle,
		color: 'white',
		fontWeight: '700',
	},
	secondary: {
		...buttonStyle,
		backgroundColor: 'transparent',
	},
	secondaryTxt: {
		...textStyle,
	},
});

export default styles;
