import { StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles, Metrics, Fonts, Colors } from 'qualificame-kiosk/app/styles';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	imageLogo: {
		height: height < 768 ? 120 : Math.round( (height / 2.8) ),
	},
	resizedLogo: {
		height: height < 768 ? 60 : Math.round( (height / 5.6) ),
	},
	inputContainer: {
		width: (Metrics.screenHeight / 4),
	}
});
