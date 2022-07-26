// Use this file to create all app navigators.

import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from 'qualificame-kiosk/app/screens/WelcomeScreen';
import ScannerScreen from 'qualificame-kiosk/app/screens/ScannerScreen';
import MainScreen from 'qualificame-kiosk/app/screens/MainScreen';
import DetailScreen from 'qualificame-kiosk/app/screens/DetailScreen';
import LogoutScreen from 'qualificame-kiosk/app/screens/LogoutScreen';
import CompletedScreen from 'qualificame-kiosk/app/screens/CompletedScreen';
import AuthLoadingScreen from 'qualificame-kiosk/app/screens/AuthLoadingScreen';
import TransitionConfiguration from 'qualificame-kiosk/app/utils/TransitionConfiguration';
import { ApplicationStyles } from 'qualificame-kiosk/app/styles';

const ModalNavigator = createStackNavigator({
	WelcomeScreen,
	ScannerScreen
}, {
	mode: 'modal',
	navigationOptions: {
		headerShown: false,
	},
	//transitionConfig: TransitionConfiguration
})

const AppNavigator = createStackNavigator({
	MainScreen,
	DetailScreen,
	CompletedScreen,
	LogoutScreen,
}, {
	initialRouteName: 'MainScreen',
	navigationOptions: {
		headerShown: false
	},
	//transitionConfig: TransitionConfiguration
});

const MainNavigation = createSwitchNavigator({
	AuthLoading: AuthLoadingScreen,
	App: AppNavigator,
	Auth: ModalNavigator
},{
	initialRouteName: 'AuthLoading',
});


export default createAppContainer(MainNavigation);
