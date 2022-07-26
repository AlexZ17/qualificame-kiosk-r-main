import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'
import { StatusBar, Platform } from 'react-native';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
	screen: {
		imageFill: {
			position:'absolute', 
			top: 0, 
			bottom: 0, 
			right: 0, 
			left: 0, 
			width:null, 
			height:null		
		},
		fill: {
			width: '100%',
			height: '100%'
		},
		container: {
			flex: 1
		},
		card: {
			marginVertical: Metrics.smallMargin,
			padding: Metrics.smallMargin,
			backgroundColor: Colors.white,
			shadowColor: '#000',
			shadowRadius: 4,
			shadowOpacity: 0.1,
			shadowOffset: { width: 0, height: 3 },
			elevation: 1,
			borderRadius: 5,
		},
		absolute: {
			position: 'absolute'
		},
		setToBot: {
			bottom: 0,
			right: 0,
			left: 0
		},
		behind: {
			zIndex: -1
		},
		headerImage: {
			width: Metrics.screenWidth,
			height: (Metrics.screenWidth * .46 ) 
		},
		footerImage: {
			width: Metrics.screenHeight,
			height: (Metrics.screenWidth * .25 ) 
		},
		customSpacer: {
			marginTop: (Metrics.screenWidth * .46 ) - (Metrics.navBarHeight + 27),
		}
	},
	margins: {
		tinyVerticalMargin: {
			marginVertical: Metrics.tinyMargin
		},
		smallVerticalMargin: {
			marginVertical: Metrics.smallMargin
		},
		baseVerticalMargin: {
			marginVertical: Metrics.baseMargin
		},
		smallHorizontalMargin: {
			marginHorizontal: Metrics.smallMargin
		},
		baseHorizontalMargin: {
			marginHorizontal: Metrics.baseMargin
		},
		smallTopMargin: {
			marginTop: Metrics.smallMargin
		},	
		baseTopMargin: {
			marginTop: Metrics.baseMargin
		},	
		dobleBaseTopMargin: {
			marginTop: Metrics.doubleBaseMargin
		},
		tinyRightMargin: {
			marginRight: Metrics.tinyMargin
		},
		smallRightMargin: {
			marginRight: Metrics.smallMargin
		},
		baseRightMargin: {
			marginRight: Metrics.baseMargin
		},
		smallLeftMargin: {
			marginLeft: Metrics.smallMargin
		},
		baseLeftMargin: {
			marginLeft: Metrics.baseMargin
		},
		smallBottomMargin: {
			marginBottom: Metrics.smallMargin
		},
		baseBottomMargin: {
			marginBottom: Metrics.baseMargin
		},
		doubleBaseBottomMargin: {
			marginBottom: Metrics.doubleBaseMargin
		},
		statusBarSpace: {
			paddingTop: (Platform.OS != 'ios') ? StatusBar.currentHeight : 0
		},
		navBarHeight: {
			height: Metrics.navBarHeight,
		},
		basePaddingAround: {
			padding: Metrics.baseMargin
		},
		tinyVerticalPadding: {
			paddingVertical: Metrics.tinyMargin
		},		
		smallVerticalPadding: {
			paddingVertical: Metrics.smallMargin
		},
		baseVerticalPadding: {
			paddingVertical: Metrics.baseMargin
		},
		smallHorizontalPadding: {
			paddingHorizontal: Metrics.smallMargin
		},
		baseHorizontalPadding: {
			paddingHorizontal: Metrics.baseMargin
		},
		footerMargin: {
			marginBottom: (Metrics.screenWidth * .25 )
		},
		smallBottomPadding: {
			paddingBottom: Metrics.smallMargin
		},
		baseBottomPadding: {
			paddingBottom: Metrics.baseMargin
		},
		doubleBaseBottomPadding: {
			paddingBottom: Metrics.doubleBaseMargin
		}
	}, 
	flexBox: {
		column: {
			flexDirection: 'column'
		},
		row: {
			flexDirection: 'row'
		},
		flex1: {
			flex: 1
		},
		flex2: {
			flex:2
		},
		flex: {
			flex:3
		},
		justifyContentFlexStart: {
			justifyContent: 'flex-start'
		},
		justifyContentFlexEnd: {
			justifyContent: 'flex-end'
		},
		justifyContentCenter: {
			justifyContent: 'center'
		},
		justifyContentSpaceBetween: {
			justifyContent: 'space-between'
		},
		justifyContentSpaceAround:{
			justifyContent: 'space-around'
		},
		justifyContentSpaceEvenly:{
			justifyContent: 'space-evenly'
		},
		alignItemFlexStart: {
			alignItems: 'flex-start'
		},
		alignItemsFlexEnd: {
			alignItems: 'flex-end'
		},
		alignItemsCenter: {
			alignItems: 'center'
		},
		alignItemsStretch: {
			alignItems: 'stretch'
		},
		centerObjects: {
			justifyContent: 'center',
			alignItems: 'center'
		},
		alignSelfFlexStart: {
			alignSelf: 'flex-start'
		},
		alignSelfCenter: {
			alignSelf: 'center'
		},
		wrap: {
			flexWrap: 'wrap'
		},
		alignContentFlexStart: {
			alignContent: 'flex-start'
		},
		alignContentFlexEnd: {
			alignContent: 'flex-end'
		},
		alignContentCenter: {
			alignContent: 'center'
		},
		alignContentSpaceBetween: {
			alignContent: 'space-between'
		},
		alignContentSpaceAround: {
			alignContent: 'space-around'
		},
		fullWidth: {
			width: '100%'
		},
		fullHeigth: {
			height: '100%'
		},
		deviceHeight: {
			height: Metrics.screenHeight
		}
	},
	stackNavigatorOptions: {
		removeHeader: {
			headerShown: false
		},
		transparentHeader: {
			headerTransparent: true,
			headerStyle: {
				backgroundColor: Colors.transparent,
				elevation: 0, // remove shadow on Android
				shadowOpacity: 0, // remove shadow on iOS
				borderBottomWidth: 0,
			},
			gesturesEnabled: false,
			headerTintColor: Colors.white
		},
		bottomTab: {
			activeTintColor: Colors.blue,
			inactiveTintColor: Colors.light,
			style: {
				backgroundColor: Colors.white
			}
		}
	}
} 

export default ApplicationStyles
