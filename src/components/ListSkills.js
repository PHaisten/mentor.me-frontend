import React, { Component } from 'react-native';
import { List, ListItem, Body, Text, Right, Switch } from 'native-base';

export default class ListSkills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleValue: false
		};
	}
	return() {
		render(
			<List>
				<ListItem>
					<Body>
						<Text>HTML</Text>
					</Body>
					<Right>
						<Switch
							value={this.state.toggleValue}
							onValueChange={value => {
								this.setState({ toggleValue: value });
							}}
						/>
					</Right>
				</ListItem>
				<ListItem>
					<Body>
						<Text>CSS</Text>
					</Body>
					<Right>
						<Switch
							value={this.state.toggleValue}
							onValueChange={value => {
								this.setState({ toggleValue: value });
							}}
						/>
					</Right>
				</ListItem>
				<ListItem>
					<Body>
						<Text>JavaScript</Text>
					</Body>
					<Right>
						<Switch
							value={this.state.toggleValue}
							onValueChange={value => {
								this.setState({ toggleValue: value });
							}}
						/>
					</Right>
				</ListItem>
				<ListItem>
					<Body>
						<Text>React</Text>
					</Body>
					<Right>
						<Switch
							value={this.state.toggleValue}
							onValueChange={value => {
								this.setState({ toggleValue: value });
							}}
						/>
					</Right>
				</ListItem>
				<ListItem>
					<Body>
						<Text>React-Native</Text>
					</Body>
					<Right>
						<Switch
							value={this.state.toggleValue}
							onValueChange={value => {
								this.setState({ toggleValue: value });
							}}
						/>
					</Right>
				</ListItem>
			</List>
		);
	}
}
