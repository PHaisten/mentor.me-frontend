import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { View, ScrollView } from 'react-native';
import {
	Header,
	Content,
	Container,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Title,
	Right,
	Footer,
	Drawer
} from 'native-base';
import SideBar from '../src/components/SideBar';

export default class MyProfile extends Component {
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

	constructor(props) {
		super(props);
		this.state = {
			mentee: {}
		};
	}

	async componentDidMount() {
		let mentee = await this.fetchMenteeProfile();

		this.setState({ mentee }, () => {
			console.log('the state is now', this.state.mentee);
		});
	}

	async fetchMenteeProfile() {
		try {
			let result = await fetch({
				url: `http://localhost:3000/api/mentees/1811`
			});
			let mentee = await result.json();
			return mentee[0];
			console.log(mentee[0]);
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
							this.goToMentorSearch();
						}}
						Navigate6={() => {
							closeDrawer();
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
							<Title style={{ color: 'white' }}>Your Profile</Title>
						</Body>
					</Right>
				</Header>
				<Container
					style={{
						backgroundColor: '#fff'
					}}
				>
					<Content>
						<Card>
							<CardItem>
								<Left>
									<Body>
										<Text note>Name:</Text>
										<Text style={{ paddingVertical: 3 }}>
											{this.state.mentee.firstname} {this.state.mentee.lastname}
										</Text>
										<Text note>About Me:</Text>
										<Text style={{ paddingVertical: 3 }}>
											{this.state.mentee.bio}
										</Text>
										<Text note>Location:</Text>
										<Text style={{ paddingVertical: 3 }}>
											{this.state.mentee.location}
										</Text>
										<Text note>Member Since:</Text>
										<Text style={{ paddingVertical: 3 }}>
											{this.state.mentee.memberSince}
										</Text>
									</Body>
								</Left>
							</CardItem>
						</Card>
					</Content>
					<Footer>
						<Button info style={{ alignSelf: 'center' }}>
							<Text>Edit Profile</Text>
						</Button>
					</Footer>
				</Container>
			</Drawer>
		);
	}
}
