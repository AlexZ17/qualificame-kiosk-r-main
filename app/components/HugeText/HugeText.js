import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HugeTextStyle';
import { Fonts, Colors } from 'qualificame-kiosk/app/styles';

export default class HugeText extends PureComponent {
	render() {
		const textColor = { color: Colors[this.props.color] };
		const weight = { fontWeight: Fonts.weight[this.props.weight] };
		const align = { textAlign: this.props.align };
		
		return (
			<View>
				<Text style={[styles.hugeText, textColor, weight, align]}>
					{this.props.text}
				</Text>
			</View>
		);
	}
}

	HugeText.propTypes = {
		text: PropTypes.string,
		color: PropTypes.string,
		weight: PropTypes.string,
		align: PropTypes.string,
	}

	HugeText.defaultProps = {
		text: '',
		color: "black",
		weight: "regular",
		align: "left"
	}
