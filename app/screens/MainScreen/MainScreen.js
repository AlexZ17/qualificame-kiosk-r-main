import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	Button,
	Image,
	Alert
} from 'react-native';

import HeaderNavbar from 'qualificame-kiosk/app/components/HeaderNavbar';
import HugeText from 'qualificame-kiosk/app/components/HugeText';
import BigText from 'qualificame-kiosk/app/components/BigText';
import ReactionBtn from 'qualificame-kiosk/app/components/ReactionBtn';
import BottomWaves from 'qualificame-kiosk/app/components/BottomWaves';
import LogoutBtn from 'qualificame-kiosk/app/components/LogoutBtn';

import { getKiosk, getQuestions, getUserData } from 'qualificame-kiosk/app/reducers';
import ApiService from 'qualificame-kiosk/app/services/ApiService';
import { logout } from "qualificame-kiosk/app/actions/AuthActions";

import styles from './MainScreenStyle';

import { useDispatch, useSelector } from 'react-redux';

const typeValues = {
	excellent: 1,
	average: 2,
	bad: 3,
	awful: 4,
}

export default function MainScreen (props) {

	const kiosk = useSelector(getKiosk);
	const questions = useSelector(getQuestions);
	const dispatch = useDispatch();

	async function onEvent (type) {
		try {
			let result = await ApiService.createEvent({
				kiosk_id: kiosk.id,
				value: typeValues[type]
			});

			if (kiosk.enabled_questions && type !== "excellent") {
				props.navigation.navigate('DetailScreen', {
					type,
					kiosk,
					event: result.event,
					question: (type === 'excellent' || type === 'average' ) ? questions.goodQuestion: questions.badQuestion,
					choices: (type === 'excellent'  || type === 'average' ) ? questions.goodChoices: questions.badChoices,
					/* question: (type === 'bad' || type === 'awful' ||  type === 'average' ) ? questions.badQuestion: questions.goodQuestion,
					choices: (type === 'bad'  || type === 'awful' ||  type === 'average' ) ? questions.badChoices: questions.goodChoices, */
					transition: 'collapseExpand'

				});
			} else {
				props.navigation.navigate('CompletedScreen', {
					kiosk,
					transition: 'collapseExpand'
				});
			}
		} catch (e) {
			Alert.alert(
				'Ocurrió un error',
				'Parece que el administrador ha cerrado la sesión del kiosco',
				[
					{
						text: 'OK',
						onPress: () => dispatch(logout())
					}
				]
			);
		}
	}

	useEffect(() => {
		let timeOut = setTimeout(() => {
			props.navigation.navigate('AuthLoading', {transition: 'collapseExpand'})
		}, 7200000)

		return () => {
			clearTimeout(timeOut);
		}
	}, [])

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
				right={
					<View style={styles.row}>
						<View style={styles.baseRightMargin}>
							<LogoutBtn
								onPress={() => props.navigation.navigate('AuthLoading', {transition: 'collapseExpand'})}
								iconName='rotate-cw'
							/>
						</View>
					</View>
				}
			/>
			<View style={[styles.container, styles.justifyContentCenter, styles.footerMargin]}>
				<View style={[styles.row, styles.justifyContentCenter, styles.baseHorizontalMargin]}>
					<HugeText
						text={Object.entries(kiosk).length === 0 ? '' : kiosk.welcome_message || '¡Bienvenido a Qualificame! Por favor utiliza la aplicación para configurar un mensaje de bienvenida'}
					/>
				</View>
				<View style={[styles.row, styles.justifyContentSpaceEvenly, styles.alignItemsCenter, styles.baseVerticalMargin]}>
					<ReactionBtn
						type='excellent'
						size={160}
						onPress={() => onEvent('excellent')}
					/>
					<ReactionBtn
						type='average'
						size={160}
						onPress={() => onEvent('average')}
					/>
					<ReactionBtn
						type='bad'
						size={160}
						onPress={() => onEvent('bad')}
					/>
					<ReactionBtn
						type='awful'
						size={160}
						onPress={() => onEvent('awful')}
					/>
				</View>
			</View>
			<BottomWaves
				color='green'
				email={kiosk.email}
				phone={kiosk.phone}
			/>
		</View>
	);
}

MainScreen.navigationOptions = {
	headerShown: false
};
