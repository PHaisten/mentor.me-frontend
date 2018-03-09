import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import CreateAccountMentee from './screens/CreateAccountMentee';
import CreateMentee2 from './screens/CreateMentee2';
import CreateMentee3 from './screens/CreateMentee3';
import CreateAccountLand from './screens/CreateAccountLand';
import LoginScreen from './screens/LoginScreen';
import CreateMentor1 from './screens/CreateMentor1';
import CreateMentor2 from './screens/CreateMentor2';
import CreateMentor3 from './screens/CreateMentor3';
import CreateMentor4 from './screens/CreateMentor4';

const CreateAccount = StackNavigator(
	{
		CreateAccountLand: { screen: CreateAccountLand },
		Login: { screen: LoginScreen }
	},
	{
		initialRouteName: 'Login'
	}
);

const CreateMentorNavigator = StackNavigator(
	{
		CreateMentor1: { screen: CreateMentor1 },
		CreateMentor2: { screen: CreateMentor2 },
		CreateMentor3: { screen: CreateMentor3 },
		CreateMentor4: { screen: CreateMentor4 },
		HomeScreen: { screen: HomeScreen }
	},
	{
		initialRouteName: 'CreateMentor1'
		// headerMode: 'none'
	}
);

const CreateMenteeNavigator = StackNavigator(
	{
		CreateMentee: { screen: CreateAccountMentee },
		CreateMentee2: { screen: CreateMentee2 },
		CreateMentee3: { screen: CreateMentee3 },
		HomeScreen: { screen: HomeScreen }
	},
	{
		initialRouteName: 'CreateMentee'
	}
);

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choice: '',
			register: false
		};
	}

	handleChoice(choice) {
		this.setState({ choice });
	}

	render() {
		return this.state.choice === 'mentor' ? (
			<CreateMentorNavigator />
		) : this.state.choice === 'mentee' ? (
			<CreateMenteeNavigator />
		) : (
			<CreateAccount
				screenProps={{ handleChoice: this.handleChoice.bind(this) }}
			/>
		);
	}
}
