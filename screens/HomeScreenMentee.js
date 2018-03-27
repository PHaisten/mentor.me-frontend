import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
	ScrollView,
	Image,
	AlertIOS,
	AsyncStorage,
	ActivityIndicator,
	View
} from 'react-native';
import {
	Header,
	Title,
	Left,
	Icon,
	Right,
	Button,
	Body,
	Content,
	Text,
	Card,
	CardItem,
	Item,
	Input,
	Drawer,
	Container,
	Spinner
} from 'native-base';

import MatchCard from '../src/components/MatchCard';
import SideBar from '../src/components/SideBar';

export default class HomeScreenMentee extends React.Component {
	static navigationOptions = {
		title: 'Mentor.Me'
	};

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
		this.props.navigation.navigate('MyProfile');
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
		this.state = {
			mentors: [],
			animating: true
		};
		// this.id = this.props.navigation.state.params.id;
	}

	async componentDidMount() {
		let mentors = await this.fetchProfiles();

		this.setState({ mentors }, () => {
			this.sortMentors();
			this.setState({ animating: false });
		});
	}

	async fetchProfiles() {
		try {
			let result = await fetch({
				url: `http://localhost:3000/api/mentees/matches/971`
			});
			let mentors = await result.json();
			console.log(mentors);
			return mentors;
		} catch (e) {
			console.log(e);
			return;
		}
	}
	sortMentors() {
		let arr = [...this.state.mentors];
		let compares = new Map();

		arr.forEach(mentor => {
			let mappedMentor = compares.get(mentor.id);

			if (mappedMentor === undefined) {
				mappedMentor = {};
				mappedMentor.topics = [];
			}

			mappedMentor = { ...mentor, ...mappedMentor };
			mappedMentor.topics.push(mappedMentor.topicid);
			delete mappedMentor.topicid;
			compares.set(mappedMentor.id, mappedMentor);
		});

		this.setState({ mentors: [...compares.values()] }, () => {
			console.log('The updated state is', this.state.mentors);
		});
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
							closeDrawer();
						}}
						Navigate2={() => {
							this.goToSearchBar();
						}}
						Navigate3={() => {
							this.goToMentorSearch();
						}}
						Navigate6={() => {
							this.goToMyProfile();
						}}
						Navigate4={() => {
							this.logout();
						}}
					/>
				}
				onClose={() => closeDrawer()}
			>
				<Container>
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
									Home
								</Title>
							</Body>
						</Right>
					</Header>
					<Content>
						<ScrollView>
							{this.state.mentors.map((mentor, index) => {
								return (
									<MatchCard
										Navigate={() => this.navigate(mentor)}
										key={index}
										mentor={mentor}
									/>
								);
							})}
						</ScrollView>
						<ActivityIndicator
							animating={this.state.animating}
							hidesWhenStopped
							size="large"
							style={{
								alignSelf: 'center',
								marginVertical: 30
							}}
						/>
					</Content>
				</Container>
			</Drawer>
		);
	}
}
