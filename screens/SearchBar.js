import React, { Component } from 'react';
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

	// goToLogout() {
	//   this.props.navigation.navigate("Logout")
	// }

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
								Search by Topic
							</Title>
						</Body>
					</Right>
				</Header>

				<Content style={{ backgroundColor: '#ffffff' }}>
					<CardItem style={{ backgroundColor: '#FFFFF0' }}>
						<Body searchBar rounded>
							<Item
								style={{
									backgroundColor: '#ffffff',
									paddingBottom: 10
								}}
							>
								<Input
									placeholder="Search Subjects"
									onChangeText={text => this.setState({ search: text })}
								/>
								<Icon name="ios-search" />
							</Item>
							<ScrollView style={{ flexDirection: 'row' }}>
								{filteredTopics.map(topic => {
									return <TopicsCard key={topic.id} name={topic.name} />;
								})}
							</ScrollView>
						</Body>
					</CardItem>
				</Content>
			</Drawer>
		);
	}
}
