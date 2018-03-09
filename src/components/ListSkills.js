import React, { Component } from 'react';
import { List, ListItem, Body, Text, Right, Switch } from 'native-base';

export default class ListSkills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skill: this.props.skill.id,
			toggleValue: false
		};
	}

	handleToggle(value) {
		this.setState({ toggleValue: value });
		if (value === true) {
			this.props.NewSkill(this.state.skill);
			console.log('Add', this.state.skill);
		} else if (value === false) {
			console.log('Remove', this.state.skill);
			this.props.RemoveSkill(this.state.skill);
		}
	}

	render() {
		// console.log('Super Initial State ' + this.state.toggleValue);
		return (
			<ListItem key={this.props.skill.id}>
				<Body>
					<Text>{this.props.skill.name}</Text>
				</Body>
				<Right>
					<Switch
						value={this.state.toggleValue}
						onValueChange={value => {
							this.handleToggle(value);
						}}
					/>
				</Right>
			</ListItem>
		);
	}
}
