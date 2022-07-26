import React, { Component } from 'react';
import {
	View,
	Image
} from 'react-native';

import BigText from 'qualificame-kiosk/app/components/BigText';
import HeaderNavbar from 'qualificame-kiosk/app/components/HeaderNavbar';
import BottomWaves from 'qualificame-kiosk/app/components/BottomWaves';
import { NavigationActions } from 'react-navigation';

import styles from './CompletedScreenStyle';

export default class CompletedScreen extends Component {
	static navigationOptions = {
		headerShown: false
	}
	componentDidMount () {
		setTimeout(() => {
			this.props.navigation.reset([NavigationActions.navigate({
				routeName:'MainScreen'
			}, {
				transition: 'collapseExpand'
			})], 0)
			//.navigate('',{transition: 'collapseExpand'})
		}, 3500)
	}
	render() {
		const kiosk = this.props.navigation.getParam('kiosk');

		return (
			<View style={styles.container}>
				<HeaderNavbar
					statusBar='dark-content'
					center={
						<Image
							style={{width: 130, height: 40}}
							resizeMode={'stretch'}
							source={require('qualificame-kiosk/assets/logo.png')}
						/>
					}
				/>
				<View style={[styles.container, styles.alignItemsCenter, styles.justifyContentCenter, styles.footerMargin]}>
					<View style={styles.doubleBaseBottomMargin}>
						<BigText
							//text={'¡Gracias por contestar!\n¡Si tienes algún otro comentario, no dudes en contactarnos!'}
							text={'¡Con tu retroalimentación mejoramos para ti!\n\nSi tienes algún comentario adicional\n¡CONTÁCTANOS! '}
							weight='bold'
							align="center"
						/>
					</View>

				</View>
		        <BottomWaves
		        	color='orange'
					email={kiosk.email}
					phone={kiosk.phone}
		        />
			</View>
		);
	}
}
