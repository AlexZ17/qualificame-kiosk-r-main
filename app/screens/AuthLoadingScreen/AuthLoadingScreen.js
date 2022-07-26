import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
	View,
	Image,
} from 'react-native';

import styles from './AuthLoadingScreenStyle';

import { getIsLoggedIn, getAuthData } from 'qualificame-kiosk/app/reducers';
import { getKiosk } from "qualificame-kiosk/app/actions/KioskActions";

import { connect } from 'react-redux';

class AuthLoadingScreen extends Component {

	constructor(props) {
		super(props);
		this._boostrapAsync();
	}

	_boostrapAsync = async () => {
		if (this.props.loggedIn)
			await this.props.getKiosk(this.props.authData.kiosk_id);
		this.props.navigation.navigate(this.props.loggedIn ? 'App':'Auth');
	}

	render() {

		return (
			<View style={styles.container}>
				<Image 
					style={styles.imageFill}
					source={require('qualificame-kiosk/assets/splash.png')}/>
			</View>
		);
	}
}


mapStateToProps = state => ({
	loggedIn: getIsLoggedIn(state),
	authData: getAuthData(state)
});

const mapDispatchToProps = dispatch => {
  return {
	getKiosk (id) {
		dispatch(getKiosk(id))
	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);