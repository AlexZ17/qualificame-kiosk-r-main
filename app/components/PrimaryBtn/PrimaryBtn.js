import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import BodyText from 'qualificame-kiosk/app/components/BodyText';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'qualificame-kiosk/app/styles';


import styles from './PrimaryBtnStyle';

export default class PrimaryBtn extends PureComponent {
	render() {
		let textColor;
		let gradientColors;
		let disabledGradient;
		switch(this.props.bgColor) {
			case 'solidGreen':
				gradientColors = ['#27977F', '#27977F'];
				disabledGradient = ['#6627977F', '#6627977F']
				textColor = "white";
			break;
			case 'solidPurple':
				gradientColors = ['#A1258A', '#A1258A'];
				disabledGradient = ['#66A1258A', '#66A1258A']
				textColor = "white";
			break;
			case 'solidOrange':
				gradientColors = ['#DC2C0E', '#DC2C0E'];
				disabledGradient = ['#66DC2C0E', '#66DC2C0E']
				textColor = "white";
			break;
			case 'solidBlue':
				gradientColors = ['#006BAD', '#006BAD'];
				disabledGradient = ['#66006BAD', '#66006BAD']
				textColor = "white";
			break;
			case 'solidPink':
				gradientColors = ['#C80F3D', '#C80F3D'];
				disabledGradient = ['#66C80F3D', '#66C80F3D']
				textColor = "white";
			break;
			case 'green':
				gradientColors = ['#0F9F92', '#12B184'];
				disabledGradient = ['#58c2ae', '#a0ddd0'];
				textColor = "white";
			break;
			case 'blue':
				gradientColors = ['#154BBA', '#107EC2'];
				disabledGradient = ['#5792d1', '#a0c3e5'];
				textColor = "white";
			break;
			case 'orange':
				gradientColors = ['#E62808', '#FC680A'];
				disabledGradient = ['#f58053', '#fab69d'];
				textColor = "white";
			break;
			case 'pink':
				gradientColors = ['#E31862', '#EB194D'];
				disabledGradient = ['#ec5c88', '#f3a0b8'];
				textColor = "white";
			break;
			default:
				gradientColors = ['#fff', '#fff'];
				disabledGradient = ['#a7a5a5', '#cbcbcb'];
				textColor = "dark";
			break;
		}
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				disabled={this.props.disabled}
				activeOpacity={0.8}
			>
				<View style={[styles.borderRadius, (this.props.hasHorizontalMargin && styles.baseHorizontalMargin), styles.centerObjects, (!this.props.disabled && styles.shadow)]}>
					<LinearGradient colors={this.props.disabled ? disabledGradient : gradientColors} style={[styles.fullWidth, styles.defaultStyles, styles.centerObjects, this.props.btnStyle]} start={[0, 0]} end={[1, 0]}>
						<BodyText 
							text={this.props.text}
							color={textColor}
							weight="medium"
							center
						/>
					</LinearGradient>
				</View>
			</TouchableOpacity>
		);
	}
}

	PrimaryBtn.propTypes = {
		onPress: PropTypes.func,
		text: PropTypes.string,
		bgColor: PropTypes.string,
		disabled: PropTypes.bool,
		hasHorizontalMargin: PropTypes.bool,
	}

	PrimaryBtn.defaultProps = {
		onPress: ()=>{},
		text: "Click me!",
		bgColor: "",
		disabled: false,
		hasHorizontalMargin: false,
	}


