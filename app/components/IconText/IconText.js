import React, { PureComponent } from 'react';
import { Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types';

import styles from './IconTextStyle';
import SubtitleText from 'qualificame-kiosk/app/components/SubtitleText';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'qualificame-kiosk/app/styles';

export default class IconText extends PureComponent {
	render() {
		let color = {color: Colors[this.props.color]}
		return (
			<View style={[styles.row, styles.alignItemsCenter, (this.props.AddVerticalMargin && styles.baseVerticalMargin), (this.props.AddHorizontalMargin && styles.baseHorizontalMargin)]}>
				<Feather
					name={this.props.iconName} 
					size={Platform.OS === 'ios' ? 29:24} 
					style={[color]}
				/>
				<View style={styles.smallHorizontalMargin}>
					<SubtitleText
						text={this.props.text}
						color={this.props.color}
					/>
				</View>
			</View>
		);
	}
}

	IconText.propTypes = {
		iconName: PropTypes.string,
		text: PropTypes.string,
		color: PropTypes.string,
		AddVerticalMargin: PropTypes.bool,
		AddHorizontalMargin: PropTypes.bool,
	}

	IconText.defaultProps = {
		iconName: 'phone',
		text: '',
		color: 'white',
		AddVerticalMargin: false,
		AddHorizontalMargin: false,
	}
