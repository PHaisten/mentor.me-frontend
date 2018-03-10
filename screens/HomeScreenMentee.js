import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, Image } from 'react-native';
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
	Drawer
} from 'native-base';

import MentorCard from '../src/components/MentorCard';
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

	// goToLogout() {
	//   this.props.navigation.navigate("Logout")
	// }

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
									color: '#08E81F'
								}}
							>
								Home
							</Title>
						</Body>
					</Right>
				</Header>
				<Body />

				<Button
					full
					rounded
					success
					style={{
						marginTop: 10,
						paddingTop: 10
					}}
					onPress={() => this.props.navigation.navigate('Profile')}
				>
					<Text>Example of a Mentor's Profile</Text>
				</Button>
				<Button
					full
					rounded
					warning
					style={{ marginTop: 10 }}
					onPress={() => this.props.navigation.navigate('Contact')}
				>
					<Text>Contact Us</Text>
				</Button>
			</Drawer>
		);
	}
}
