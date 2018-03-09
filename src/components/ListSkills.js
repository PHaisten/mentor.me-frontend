import React, { Component } from 'react';
import { List, ListItem, Body, Text, Right, Switch } from 'native-base';

export default class ListSkills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: ['Test'],
			toggleValue: false
		};
	}

	async handleValue(val) {
		try {
			await this.setState({ toggleValue: val });
			this.state.toggleValue
				? await this.props.addSkill(this.props.skill.id)
				: await this.props.removeSkill(this.props.skill.id);
		} catch (e) {
			console.log(e);
			return;
		}
	}

	render() {
		return (
			<ListItem key={this.props.skill.id}>
				<Body>
					<Text>{this.props.skill.name}</Text>
				</Body>
				<Right>
					<Switch
						value={this.state.toggleValue}
						onValueChange={value => this.handleValue(value)}
					/>
				</Right>
			</ListItem>
		);
	}
}
