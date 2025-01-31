import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import theme from '../../defaultStyles';

const buttonStyle: ViewStyle = {
    padding: 16,
	borderRadius: 8,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 16,
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
	disabled: {
		filter: 'grayscale(0.75)'
	},
	danger: {
		...buttonStyle,
		backgroundColor: theme.colors.error
	}
});

export default styles;
