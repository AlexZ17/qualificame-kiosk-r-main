import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'qualificame-kiosk/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	choiceBox: {
		width: '100%',
		height: Metrics.screenWidth * 0.45,
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	choiceItem: { 
		width: '50%',
		paddingHorizontal: Metrics.doubleBaseMargin
	}
});
