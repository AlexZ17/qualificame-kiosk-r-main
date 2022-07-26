import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TitleTextStyle';
import { Fonts, Colors } from 'qualificame-kiosk/app/styles';

export default class TitleText extends PureComponent {
	render() {
		const textColor = { color: Colors[this.props.color] };
		const weight = { fontWeight: Fonts.weight[this.props.weight] };
		const align = { textAlign: this.props.align };
		
		return (
			<View>
				<Text style={[styles.titleText, textColor, weight, align]}>
					{this.props.text}
				</Text>
			</View>
		);
	}
}

TitleText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
}

TitleText.defaultProps = {
	text: '',
	color: "black",
	weight: "regular",
	align: "left"
}
