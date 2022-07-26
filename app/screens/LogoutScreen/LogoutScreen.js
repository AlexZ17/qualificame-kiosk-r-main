import React, { Component } from 'react';
import axios from 'axios';

import {
	View,
	Image
} from 'react-native';
import styles from './LogoutScreenStyle';

import BottomWaves from 'qualificame-kiosk/app/components/BottomWaves';
import HugeText from 'qualificame-kiosk/app/components/HugeText';
import HeaderNavbar from 'qualificame-kiosk/app/components/HeaderNavbar';
import PrimaryBtn from 'qualificame-kiosk/app/components/PrimaryBtn';
import SecondaryBtn from 'qualificame-kiosk/app/components/SecondaryBtn';
import SetAuthInfoContainer from 'qualificame-kiosk/app/containers/SetAuthInfoContainer';

export default class LogoutContainer extends Component {
	static navigationOptions = {
		headerShown: false
	}

	render() {
		return (
			<View style={[styles.container]}>
				<HeaderNavbar
					center={
						<Image
							style={{width: 130, height: 40}}
							resizeMode={'stretch'}
							source={require('qualificame-kiosk/assets/logo.png')}
						/>
					}
					statusBar='dark-content'
				/>
				<View style={[styles.container, styles.justifyContentCenter, styles.footerMargin]}>
					<View style={styles.alignItemsCenter}>
						<HugeText
							text='¿Estás seguro de que deseas'
						/>
						<View style={styles.row}>
							<HugeText
								color='purple'
								weight='bold'
								text=' cerrar sesión '
							/>
							<HugeText
								text='?'
							/>
						</View>
					</View>
					<View style={[styles.row, styles.justifyContentCenter, styles.dobleBaseTopMargin]}>
						<SecondaryBtn
							onPress={() => this.props.navigation.goBack()}
							text='Cancelar'
							color='purple'
						/>
						<SetAuthInfoContainer>
						{(logout) =>(
							<PrimaryBtn
								onPress={() => {
									logout();
								}}
								text='Cerrar sesión'
								textColor='white'
								bgColor='solidPurple'
								hasHorizontalMargin
							/>
						)}
						</SetAuthInfoContainer>
					</View>
				</View>
				<BottomWaves color='purple'/>
			</View>
		);
	}
}
