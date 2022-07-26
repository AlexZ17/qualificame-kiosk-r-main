import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'qualificame-kiosk/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	border: {
		borderTopWidth: 0,
		borderWidth: 1,
		borderRadius: 5,
		paddingVertical: Metrics.smallMargin
	},
	labelPosition: {
		position: 'absolute',
		left: Metrics.baseMargin,
		top: -10,
		zIndex: 999,
		backgroundColor: Colors.white,
		marginHorizontal: Metrics.tinyMargin
	},
	line: {
		left: -1,
		borderTopWidth: 1,
		borderLeftWidth:1,
		borderRadius:5,
		width: 16,
		height: 44,
		borderColor: Colors.white
	},
	lineRight: {
		flex:1,
		right: -1,
		borderTopWidth: 1,
		borderRightWidth:1,
		borderRadius:5,
		height: 44,
		borderColor: Colors.white
	},
	absContainer: {
		position: 'absolute',
		zIndex: -1
	},
	alignSelfTop: {
		top: -(Metrics.smallMargin)
	},
	customHeight: {
		height: 27
	}

});
