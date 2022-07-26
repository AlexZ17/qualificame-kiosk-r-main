import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'qualificame-kiosk/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	defaultStyles: {
		borderRadius: 10,
		padding: Metrics.smallMargin,
	},
	shadow: {
		elevation: 2,
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 }
	},
	disabledText: {
		color: Colors.dark
	},
	disabledBg: {
		backgroundColor: Colors.disabled
	},
	borderRadius: {
		borderRadius: 10
	}
});
