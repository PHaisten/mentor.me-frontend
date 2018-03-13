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
import HomeScreenMentee from './screens/HomeScreenMentee';
import SearchBar from './screens/SearchBar';
import MentorSearch from './screens/MentorSearch';
import MentorProfile from './screens/MentorProfile';
import ContactMentor from './screens/ContactMentor';
import MentorbySkill from './screens/MentorbySkill';

const CreateAccount = StackNavigator(
	{
		Login: { screen: LoginScreen },
		CreateAccountLand: { screen: CreateAccountLand }
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none'
	}
);

const CreateMentorNavigator = StackNavigator(
	{
		CreateMentor1: { screen: CreateMentor1 },
		CreateMentor2: { screen: CreateMentor2 },
		CreateMentor3: { screen: CreateMentor3 },
		CreateMentor4: { screen: CreateMentor4 }
	},
	{
		initialRouteName: 'CreateMentor1'
	}
);

const CreateMenteeNavigator = StackNavigator(
	{
		CreateMentee: { screen: CreateAccountMentee },
		CreateMentee2: { screen: CreateMentee2 },
		CreateMentee3: { screen: CreateMentee3 }
	},
	{
		initialRouteName: 'CreateMentee'
	}
);

const MenteeHomeScreen = StackNavigator(
	{
		Home: { screen: HomeScreenMentee },
		Topics: { screen: SearchBar },
		Search: { screen: MentorSearch },
		Profile: { screen: MentorProfile },
		Contact: { screen: ContactMentor },
		MentorSkill: { screen: MentorbySkill }
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
	}
);

const HomeScreenMentor = StackNavigator(
	{
		Home: { screen: HomeScreen }
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
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
			<CreateMentorNavigator
				screenProps={{ handleChoice: this.handleChoice.bind(this) }}
			/>
		) : this.state.choice === 'mentee' ? (
			<CreateMenteeNavigator
				screenProps={{ handleChoice: this.handleChoice.bind(this) }}
			/>
		) : this.state.choice === 'homementee' ? (
			<MenteeHomeScreen
				screenProps={{ handleChoice: this.handleChoice.bind(this) }}
			/>
		) : this.state.choice === 'homementor' ? (
			<HomeScreenMentor
				screenProps={{ handleChoice: this.handleChoice.bind(this) }}
			/>
		) : (
			<CreateAccount
				screenProps={{ handleChoice: this.handleChoice.bind(this) }}
			/>
		);
	}
}
