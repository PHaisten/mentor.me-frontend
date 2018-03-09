import React from 'react';
import { View } from 'react-native';
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
	Icon
} from 'native-base';

export default class CreateMentor1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleValue0: false,
			toggleValue1: false,
			toggleValue2: false,
			toggleValue3: false,
			toggleValue4: false
		};
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Content>
				<Card>
					<CardItem>
						<Body>
							<Text style={{ alignSelf: 'center' }}>
								Please select all skills that you are able to mentor.
							</Text>
						</Body>
					</CardItem>
				</Card>
				<List>
					<ListItem>
						<Left>
							<Icon name="logo-html5" />
						</Left>
						<Body>
							<Text>HTML</Text>
						</Body>
						<Right>
							<Switch
								value={this.state.toggleValue0}
								onValueChange={value => {
									this.setState({ toggleValue0: value });
								}}
							/>
						</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Icon name="logo-css3" />
						</Left>
						<Body>
							<Text>CSS</Text>
						</Body>
						<Right>
							<Switch
								value={this.state.toggleValue1}
								onValueChange={value => {
									this.setState({ toggleValue1: value });
								}}
							/>
						</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Icon name="logo-javascript" />
						</Left>
						<Body>
							<Text>JavaScript</Text>
						</Body>
						<Right>
							<Switch
								value={this.state.toggleValue2}
								onValueChange={value => {
									this.setState({ toggleValue2: value });
								}}
							/>
						</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Icon name="logo-react" />
						</Left>
						<Body>
							<Text>React</Text>
						</Body>
						<Right>
							<Switch
								value={this.state.toggleValue3}
								onValueChange={value => {
									this.setState({ toggleValue3: value });
								}}
							/>
						</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Icon name="logo-react" />
						</Left>
						<Body>
							<Text>React-Native</Text>
						</Body>
						<Right>
							<Switch
								value={this.state.toggleValue4}
								onValueChange={value => {
									this.setState({ toggleValue4: value });
								}}
							/>
						</Right>
					</ListItem>
				</List>
				<Button
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={() => navigate('Confirmation Screen', {})}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
