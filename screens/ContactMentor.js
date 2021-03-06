import React, { Component } from 'react';
import { AsyncStorage, AlertIOS, View } from 'react-native';
import {
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	Card,
	CardItem,
	Title,
	Body,
	Text,
	Button,
	InputGroup,
	Icon,
	Drawer,
	Left,
	Right,
	Container,
	Textarea,
	Linking
} from 'native-base';
import SideBar from '../src/components/SideBar';

export default class ContactMentor extends Component {
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
							closeDrawer();
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
						<Right
							style={{
								padding: 10
							}}
						>
							<Title style={{ color: 'white' }}>Contact Us</Title>
						</Right>
					</Header>
					<Content>
						<Card>
							<CardItem>
								<Body>
									<Text style={{ textAlign: 'center', padding: 5 }}>
										Have a question or comment? Please email us, and we will get
										back to you as soon as possible!
									</Text>
								</Body>
							</CardItem>
						</Card>
						<Form>
							<Item>
								<Input placeholder="Subject" />
							</Item>
							<Title style={{ color: '#9C9C9C', marginTop: 10 }}>Message</Title>
							<Item fixedLabel>
								<InputGroup borderType="rounded">
									<Icon name="ios-mail" />
									<Textarea
										style={{
											height: 200,
											width: '90%',
											fontSize: 18,
											marginTop: 30
										}}
									/>
								</InputGroup>
							</Item>
							<Button
								block
								info
								padding
								style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
								onPress={() =>
									Linking.openURL(`mailto:paytonhaisten@gmail.com`)
								}
							>
								<Text>Submit</Text>
							</Button>
						</Form>
					</Content>
				</Container>
			</Drawer>
		);
	}
}
