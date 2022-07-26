import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const Metrics = {
	tinyMargin: 4, 
	smallMargin: 8,
	baseMargin: 16,
	doubleBaseMargin: 32,
	
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: (Platform.OS === 'ios') ? 64 : 79,
	statusBarHeight: StatusBar.currentHeight,
	
	buttonRadius: 10,
	
	icons: {
		small: 16,
		regular: 24,
		large: 48,
	}
};

export default Metrics;
