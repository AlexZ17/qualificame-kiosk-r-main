import { StyleSheet, Platform, StatusBar } from 'react-native';
import { ApplicationStyles, Fonts, Metrics, Colors } from 'qualificame-kiosk/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	mainContainer: {
		backgroundColor: Colors.black,
	},
	cameraContainer: {
		paddingTop: (Platform.OS != 'ios') ? StatusBar.currentHeight*1.4 : 0,
		flex: 1,
	},
	above: {
		zIndex: 2
	},
	squareContainer: {
		marginTop: (Platform.OS != 'ios') ? StatusBar.currentHeight : 0,
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
		zIndex: 1,
		flexDirection: 'row',
	},
	leftTop: {
		borderTopWidth: 5,
		borderLeftWidth: 5,
		borderColor: Colors.white,
		margin: 30,
		width: 50,
		height: 50,
	},
	rightTop: {
		borderTopWidth: 5,
		borderRightWidth: 5,
		borderColor: Colors.white,
		margin: 30,
		width: 50,
		height: 50,

	},
	rowScanner: {
		flexDirection: 'row',
	},
	leftBottom: {
		borderBottomWidth: 5,
		borderLeftWidth: 5,
		borderColor: Colors.white,
		margin: 30,
		width: 50,
		height: 50,
	},
	rightBottom: {
		borderBottomWidth: 5,
		borderRightWidth: 5,
		borderColor: Colors.white,
		margin: 30,
		width: 50,
		height: 50,

	}
});
