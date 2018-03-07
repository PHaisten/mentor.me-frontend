import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import CreateAccountMentee from './screens/CreateAccountMentee';
import CreateAccountLand from './screens/CreateAccountLand';
import LoginScreen from './screens/LoginScreen';
import CreateMentor1 from './screens/CreateMentor1';
import CreateMentor2 from './screens/CreateMentor2';
import CreateMentor3 from './screens/CreateMentor3';
import CreateMentor4 from './screens/CreateMentor4';
import CreateMentor5 from './screens/CreateMentor5';
import CreateMentee2 from './screens/CreateMentee2';

const RootNavigator = StackNavigator(
	{
		Login: { screen: LoginScreen },
		HomeScreen: { screen: HomeScreen },
		CreateMentee: { screen: CreateAccountMentee },
		CreateMentee2: { screen: CreateMentee2 },
		CreateAccountLand: { screen: CreateAccountLand },
		CreateMentor1: { screen: CreateMentor1 },
		CreateMentor2: { screen: CreateMentor2 },
		CreateMentor3: { screen: CreateMentor3 },
		CreateMentor4: { screen: CreateMentor4 },
		CreateMentor5: { screen: CreateMentor5 }
	},
	{
		initialRouteName: 'Login'
	}
);

export default class App extends Component {
	render() {
		return <RootNavigator />;
	}
}
