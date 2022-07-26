import React, { Component } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import {
	View,
	Text,
} from 'react-native';

import { scannerData } from "qualificame-kiosk/app/actions/AuthActions";

import HeaderNavbar from 'qualificame-kiosk/app/components/HeaderNavbar';
import styles from './ScannerScreenStyle';
import BodyText from 'qualificame-kiosk/app/components/BodyText';
import CloseBtn from 'qualificame-kiosk/app/components/CloseBtn';
import SetAuthInfoContainer from 'qualificame-kiosk/app/containers/SetAuthInfoContainer';

import { connect } from 'react-redux';

class ScannerScreen extends Component {	
	static navigationOptions = {
		headerShown: false
	}
	state = {
		deniedPermission: false,
		requestingPermission: true,
		scanned: false
	}

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({
			deniedPermission: status != 'granted',
			requestingPermission: false
		 });
	}
	
	render() {
		const { requestingPermission, scanned, deniedPermission } = this.state;

		return (
			<View style={[styles.container, styles.mainContainer]}>
				<View style={styles.above}>
					<HeaderNavbar
						right={
							<CloseBtn 
								onPress={()=> this.props.navigation.goBack()}
							/>
						}
						statusBar="light-content"
					/>
				</View>
				<View style={[styles.justifyContentCenter, styles.squareContainer]}>
					<View style={[styles.column, styles.justifyContentCenter ]}>
						<View style={[styles.rowScanner]}>
							<View style={styles.leftTop}/>
							<View style={styles.rightTop}/>
						</View>
						<View style={[styles.rowScanner]}>
							<View style={styles.leftBottom}/>
							<View style={styles.rightBottom}/>
						</View>
					</View>
				</View>

				{ (requestingPermission && !deniedPermission) && 
					<View style={[styles.above, styles.baseHorizontalMargin]}>
						<BodyText
							text='Requesting for camera permission'
							color='white'
						/>
					</View>
				}

				{ deniedPermission &&
					<View style={[styles.above, styles.baseHorizontalMargin]}>
						<BodyText
							text='No access to camera'
							color='white'
						/>
					</View>
				}
				<View style={[styles.cameraContainer]}>
					<SetAuthInfoContainer>
					{(setLogin) => {
						handleBarCodeScanned = ({ type, data }) => {
							if(type == 256 || type === 'org.iso.QRCode'){
								this.setState({ scanned: true });
								setLogin();
								this.props.scannerData(data);
								this.props.navigation.navigate('AuthLoading');
							}
						};
						return (<BarCodeScanner
							onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
							style={[styles.flex1]}
						/>
					)}}
					</SetAuthInfoContainer>
				</View>
			</View>
		);
	}
}

mapStateToProps = () => ({})

export default connect(mapStateToProps, {
	scannerData
})(ScannerScreen);
