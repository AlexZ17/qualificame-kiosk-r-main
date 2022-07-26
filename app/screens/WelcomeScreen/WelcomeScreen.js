import React, {
	Component,
	useState,
	useEffect,
	useRef
} from 'react';

import { useDispatch } from 'react-redux';

import {
	View,
	Text,
	Button,
	Image,
	Keyboard,
	TextInput
} from 'react-native';

// Used only for demo purposes. Use API Service instead of this.
import axios from 'axios';

import LabeledInput from 'qualificame-kiosk/app/components/LabeledInput'
import BottomWaves from 'qualificame-kiosk/app/components/BottomWaves';
import HeaderNavbar from 'qualificame-kiosk/app/components/HeaderNavbar';
import CameraBtn from 'qualificame-kiosk/app/components/CameraBtn';
import BigText from 'qualificame-kiosk/app/components/BigText';
import PrimaryBtn from 'qualificame-kiosk/app/components/PrimaryBtn';
import { Colors, Metrics } from 'qualificame-kiosk/app/styles';

import QRCode from 'react-native-qrcode-svg';

import styles from './WelcomeScreenStyle';

import { login } from "qualificame-kiosk/app/actions/AuthActions";
import ApiService from 'qualificame-kiosk/app/services/ApiService';

import * as Device from 'expo-device';

export default function WelcomeScreen (props) {

	let [showCode, setShowCode] = useState(false);
	let [code, setCode] = useState('');
	let [uuid, setUuid] = useState('');
	let pollInterval = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		poll();
		if (showCode) startPolling();
		return stopPolling;
	}, [showCode])

	const stopPolling = () => clearInterval(pollInterval.current);

	const startPolling = ()  => {
		stopPolling();
		let interval = setInterval(poll, 2000);
		pollInterval.current = interval;
	}

	const poll = async () => {
		let response = await ApiService.getKiosk(uuid);
		if (!uuid)
			setUuid(response.uuid);
		setCode(response.token);
		if (response.access_token) {
			await dispatch(login(response));
			props.navigation.navigate('AuthLoading', {transition: 'collapseExpand'});
		}
	}


	return (
		<View style={[styles.container, styles.alignItemsCenter, styles.basePaddingAround]}>
			<HeaderNavbar
				statusBar='dark-content'
				center={
					<Image
						style={showCode ? styles.resizedLogo: styles.imageLogo}
						resizeMode={'contain'}
						source={require('qualificame-kiosk/assets/mainLogo.png')}
					/>
				}
				unSet
			/>
			<View style={[styles.container, styles.justifyContentSpaceAround, styles.footerMargin]}>
				<View style={styles.alignItemsCenter}>
					<BigText
						color='dark'
						text='¡Bienvenido! Registra el kiosco para comenzar.'
						align="center"
						weight="medium"
					/>
					<View style={styles.baseTopMargin}>
						{
							showCode
							? <QRCode
								value={`${code}|${Device.modelName}`}
								color={Colors.dark}
								size={Metrics.screenWidth > 768 ? 120 : Math.round(Metrics.screenWidth / 2.8)}
							/>
							: <PrimaryBtn
								text="Iniciar sesión"
								bgColor="green"
								onPress={() => setShowCode(true)}
							/>
						}
					</View>
				</View>
			</View>
			<BottomWaves
				color='green'
				showData={false}
			/>
		</View>
	);
}

WelcomeScreen.navigationOptions = {
	headerShown: false
}
