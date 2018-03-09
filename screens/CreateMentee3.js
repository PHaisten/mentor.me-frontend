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
		// this.id = this.props.navigation.state.params.id;
		this.handleAddSkill.bind(this);
		this.handleRemoveSkill.bind(this);
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

	async addSkill(id) {
		try {
			let arr = this.state.skills.push(id);

			this.runSetSkills(arr);
		} catch (e) {
			console.log(e);
			return;
		}
	}

	async removeSkill(id) {
		try {
			let arr = this.state.skills;
			let i = arr.indexOf(id);
			let newArr = arr.splice(i, 1);

			this.runSetSkills(newArr);
		} catch (e) {
			console.log(e);
			return;
		}
	}

	async runSetSkills(prop) {
		try {
			this.setState({ skills: prop });
			console.log(this.state.skills);
		} catch (e) {
			console.log(e);
			return;
		}
	}

	async handleAddSkill(prop) {
		try {
			this.addSkill(prop);
		} catch (e) {
			console.log(e);
		}
	}

	async handleRemoveSkill(prop) {
		try {
			this.addSkill(prop);
		} catch (e) {
			console.log(e);
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
						{this.state.skillList.map((skill, id) => {
							return (
								<ListSkills
									key={id}
									skill={skill}
									addSkill={this.handleAddSkill.bind(this)}
									removeSkill={this.handleRemoveSkill.bind(this)}
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
						// onPress={() => this.createMentor()}
					>
						<Text>Submit</Text>
					</Button>
				</View>
			</View>
		);
	}
}
