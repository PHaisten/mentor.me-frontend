import React, { Component } from 'react';
import { View } from 'react-native';
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
		this.props.navigation.navigate('Profile');
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
							closeDrawer();
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
					/>
				}
				// Navigate4={() => { this.goToLogout() }}
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
							<Item fixedLabel>
								<InputGroup borderType="rounded">
									<Icon name="ios-mail" />
									<Textarea
										placeholder="Type your message here"
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
