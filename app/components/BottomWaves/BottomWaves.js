import React, { PureComponent } from 'react';
import {
	ImageBackground,
	View
} from 'react-native';
import PropTypes from 'prop-types';

import TitleText from 'qualificame-kiosk/app/components/TitleText'; 
import SubtitleText from 'qualificame-kiosk/app/components/SubtitleText'; 
import IconText from 'qualificame-kiosk/app/components/IconText'; 

import styles from './BottomWavesStyle';

export default class BottomWaves extends PureComponent {
	render() {
		let imgSrc;
		switch(this.props.color) {
			case 'green':
				imgSrc = require('qualificame-kiosk/assets/waves-green.png')
				break;
			case 'pink':
				imgSrc = require('qualificame-kiosk/assets/waves-pink.png')
				break;
			case 'blue':
				imgSrc = require('qualificame-kiosk/assets/waves-blue.png')
				break;
			case 'purple':
				imgSrc = require('qualificame-kiosk/assets/waves-purple.png')
				break;
			case 'orange':
				imgSrc = require('qualificame-kiosk/assets/waves-orange.png')
				break;
			default:
				imgSrc = require('qualificame-kiosk/assets/waves-green.png')
				break;

		}
		return (
			<React.Fragment>
				<ImageBackground
					source={imgSrc}
					style={[
						styles.absolute,
						styles.setToBot,
						styles.behind,
						styles.footerImage,
						styles.justifyContentFlexEnd,
						styles.alignItemsCenter,
						styles.doubleBaseBottomPadding
					]}
					resizeMode='stretch'
				>
					{this.props.showData && 
						this.props.isBad ? (
							<View style={this.props.isBad && [
								styles.row, styles.fullWidth, styles.baseHorizontalPadding,styles.justifyContentSpaceAround]}>
								<View style={styles.flex1}>
									<TitleText
										color='white'
										text='Tu opinión es muy importante para nosotros'
										align="right"
									/>
									<SubtitleText
										color='white'
										text='¡Ayúdanos a mejorar! Comúnicate a:'
										align="right"
									/>
								</View>
								<View style={[styles.baseLeftMargin, styles.row, styles.smallTopMargin, styles.flex1]}>
									<IconText
										text={this.props.phone}
										iconName='phone'
										color='white'
										AddHorizontalMargin
									/>
									<IconText
										text={this.props.email}
										iconName='mail'
										color='white'
										AddHorizontalMargin
									/>
								</View>
							</View> 
						) : (
							<View>
								<TitleText
									color='white'
									text='Tu opinión es muy importante para nosotros'
									align="center"
								/>
								<View style={[styles.row, styles.smallTopMargin, styles.justifyContentSpaceAround]}>
									<IconText
										text={this.props.phone}
										iconName='phone'
										color='white'
										AddHorizontalMargin
									/>
									<IconText
										text={this.props.email}
										iconName='mail'
										color='white'
										AddHorizontalMargin
									/>
								</View>
							</View> 
						)
					}
				</ImageBackground>
			</React.Fragment>
		);
	}
}

BottomWaves.propTypes = {
	showData: PropTypes.bool,
	email: PropTypes.string,
	phone: PropTypes.string
}

BottomWaves.defaultProps = {
	showData: true,
	email: '',
	phone: ''
}
