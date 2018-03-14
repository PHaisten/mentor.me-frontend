import React, { Component } from 'react';
import { View, ScrollView, AsyncStorage, AlertIOS } from 'react-native';
import {
	Header,
	Title,
	Drawer,
	Card,
	CardItem,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Content,
	Right
} from 'native-base';
import { StackNavigator } from 'react-navigation';

import MentorCard from '../src/components/MentorCard';
import SideBar from '../src/components/SideBar';

export default class MentorSearch extends Component {
	goToHome() {
		this.props.navigation.navigate('Home');
	}

	goToContact() {
		this.props.navigation.navigate('Contact');
	}

	goToMentorSearch() {
		this.props.navigation.navigate('Search');
	}

	goToSearchBar() {
		this.props.navigation.navigate('Topics');
	}

	goToMyProfile() {
		this.props.navigation.navigate('Profile');
	}

	logout() {
		AlertIOS.alert('Are you sure you want to logout?', 'y u want 2 leave me?', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'Logout',
				onPress: () => {
					AsyncStorage.clear();
					this.setState({ loggedIn: false });
					this.props.screenProps.handleChoice('');
				}
			}
		]);
	}

	navigate(mentor) {
		this.props.navigation.navigate('Profile', { mentor });
	}

	constructor(props) {
		super(props);
		this.state = { mentors: [] };
	}

	async componentDidMount() {
		let mentors = await this.fetchProfiles();

		this.setState({ mentors });
	}

	async fetchProfiles() {
		try {
			let result = await fetch({
				url: 'http://localhost:3000/api/mentors'
			});
			let mentors = await result.json();
			console.log(mentors);
			return mentors;
		} catch (e) {
			console.log(e);
			return;
		}
	}

	render() {
		closeDrawer = () => {
			this.drawer._root.close();
		};
		openDrawer = () => {
			this.drawer._root.open();
		};

		return (
			<Drawer
				ref={ref => {
					this.drawer = ref;
				}}
				content={
					<SideBar
						Navigate={() => {
							this.goToContact();
						}}
						Navigate1={() => {
							this.goToHome();
						}}
						Navigate2={() => {
							this.goToSearchBar();
						}}
						Navigate3={() => {
							closeDrawer();
						}}
						Navigate6={() => {
							this.goToMyProfile();
						}}
						Navigate4={() => {
							this.logout();
						}}
					/>
				}
				// Navigate4={() => { this.goToLogout() }}
				onClose={() => closeDrawer()}
			>
				<Header style={{ backgroundColor: '#03A6FF' }}>
					<Left>
						<Button
							transparent
							onPress={() => {
								openDrawer();
							}}
						>
							<Icon name="menu" />
						</Button>
					</Left>
					<Right>
						<Body>
							<Title
								style={{
									color: 'white'
								}}
							>
								Search Mentors
							</Title>
						</Body>
					</Right>
				</Header>
				<ScrollView>
					{this.state.mentors.map((mentor, index) => {
						return (
							<MentorCard
								Navigate={() => this.navigate(mentor)}
								key={index}
								mentor={mentor}
							/>
						);
					})}
				</ScrollView>
			</Drawer>
		);
	}
}
