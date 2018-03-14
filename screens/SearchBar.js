import React, { Component } from 'react';
import { ScrollView, Image, AsyncStorage, AlertIOS } from 'react-native';

import {
	Container,
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
	View
} from 'native-base';

import TopicsCard from '../src/components/TopicsCard';
import SideBar from '../src/components/SideBar';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { topics: [], search: '' };
	}

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
	goToMentorbySkill() {
		this.props.navigation.navigate('MentorSkill');
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

	async componentDidMount() {
		let topics = await this.getTopics();

		this.setState({ topics });
		console.log(this.state.topics);
	}

	async getTopics() {
		try {
			let result = await fetch({
				url: 'http://localhost:3000/api/topics'
			});
			let topics = await result.json();
			return topics;
		} catch (e) {
			console.log(e);
			return;
		}
	}

	render() {
		let filteredTopics = this.state.topics;
		let search = this.state.search;
		if (search.length > 0) {
			filteredTopics = filteredTopics.filter(topics => {
				return topics.name.toLowerCase().match(search.toLowerCase());
			});
		}

		closeDrawer = () => {
			this.drawer._root.close();
		};
		openDrawer = () => {
			this.drawer._root.open();
		};

		return (
			<Container>
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
								closeDrawer();
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
										color: '#ffffff'
									}}
								>
									Search by Topic
								</Title>
							</Body>
						</Right>
					</Header>
					<Item
						style={{
							backgroundColor: '#ffffff',
							paddingBottom: 5,
							paddingHorizontal: 10,
							marginLeft: 0
						}}
					>
						<Input
							placeholder="Search Subjects"
							onChangeText={text => this.setState({ search: text })}
						/>
						<Icon name="ios-search" />
					</Item>

					<Content
						style={{
							backgroundColor: '#ffffff'
						}}
					>
						<Body searchBar rounded>
							{filteredTopics.map(topic => {
								return (
									<TopicsCard
										navigation={this.props.navigation}
										key={topic.id}
										name={topic.name}
										topic={topic}
									/>
								);
							})}
						</Body>
					</Content>
				</Drawer>
			</Container>
		);
	}
}
