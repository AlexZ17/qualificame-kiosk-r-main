import React, { PureComponent } from 'react';
import { 
	Text,
	View,
	TouchableOpacity,
	Image
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './ReactionBtnStyle';

export default class ReactionBtn extends PureComponent {
	render() {
		let imgSrc;
		switch (this.props.type) {
			case 'excellent': 
				imgSrc = require('qualificame-kiosk/assets/excellent.png');
				break;
			case 'average':
				imgSrc = require('qualificame-kiosk/assets/average.png');
				break;
			case 'bad':
				imgSrc = require('qualificame-kiosk/assets/bad.png');
				break;
			case 'awful':
				imgSrc = require('qualificame-kiosk/assets/awful.png');
				break;
			default:
				imgSrc = require('qualificame-kiosk/assets/excellent.png');
				break;
		}
		let size = {
			width: this.props.size,
			height: this.props.size
		}
		return (
			<TouchableOpacity activeOpacity={0.7} onPress={() => this.props.onPress()}>
				<Image source={imgSrc} style={size}/>
			</TouchableOpacity>
		);
	}
}

	ReactionBtn.propTypes = {
		size: PropTypes.number,
		onPress: PropTypes.func
	}

	ReactionBtn.defaultProps = {
		size: 100,
		onPress:  () => {}
	}
