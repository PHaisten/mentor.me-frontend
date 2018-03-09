import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {
	Content,
	Form,
	Input,
	Label,
	CardItem,
	Card,
	Text,
	Item,
	Body,
	Button,
	List,
	ListItem,
	Left,
	Right,
	Switch,
	Icon,
	Footer
} from 'native-base';
import ListSkills from '../src/components/ListSkills';

export default class CreateMentee3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skillList: [],
			skills: []
		};
		this.id = this.props.navigation.state.params.id;
	}

	async componentDidMount() {
		let skillList = await this.fetchSkills();

		this.setState({ skillList });
		console.log(this.state.skills);
	}

	async fetchSkills() {
		try {
			let result = await fetch({
				url: 'http://localhost:3000/api/topics'
			});
			let skills = await result.json(result => {
				console.log(result);
			});
			return skills;
		} catch (e) {
			console.log(e);
			return;
		}
	}

	handleSkills(id) {
		let skillArr = [...this.state.skills];
		skillArr.push(id);
		this.setState({ skills: skillArr });
		console.log(this.state.skills);
	}

	removeSkill(id) {
		let arr = [...this.state.skills];
		let index = arr.indexOf(id);
		for (let i = 0; i < arr.length; i++) {
			if (id === arr[i]) {
				console.log('this id is here');
				console.log(id + ' matches the array ' + arr[i]);
				arr.splice(index, 1);
				this.setState({ skills: arr });
			}
		}
	}

	onSubmit() {
		console.log(
			'This is the array that should be submitted ',
			this.state.skills
		);
		for (let i = 0; i < this.state.skills.length; i++) {
			let topic = this.state.skills[i];
			fetch(`http://localhost:3000/api/mentees/skill/${this.id}`, {
				method: 'post',
				body: JSON.stringify({
					topicid: topic
				}),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});
		}
	}

	render() {
		// const { navigate } = this.props.navigation;
		return (
			<View style={{ height: '100%', width: '100%' }}>
				<ScrollView style={{ marginBottom: 10 }}>
					<Card
						style={{
							marginLeft: 20,
							marginRight: 20,
							marginBottom: 10,
							marginTop: 10
						}}
					>
						<CardItem>
							<Body>
								<Text style={{ alignSelf: 'center' }}>
									Please select all skills that you are interested being
									mentored in!
								</Text>
							</Body>
						</CardItem>
					</Card>
					<List>
						{this.state.skillList.map((skill, index) => {
							return (
								<ListSkills
									key={index}
									skill={skill}
									NewSkill={id => this.handleSkills(id)}
									RemoveSkill={id => this.removeSkill(id)}
								/>
							);
						})}
					</List>
				</ScrollView>
				<View style={{ marginBottom: 15, marginTop: 5 }}>
					<Button
						block
						info
						padding
						style={{ width: 250, alignSelf: 'center' }}
						onPress={() => this.onSubmit()}
					>
						<Text>Submit</Text>
					</Button>
				</View>
			</View>
		);
	}
}
