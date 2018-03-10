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
	Button
} from 'native-base';

export default class CreateMentor1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sunday: 'N/A',
			monday: 'N/A',
			tuesday: 'N/A',
			wednesday: 'N/A',
			thursday: 'N/A',
			friday: 'N/A',
			saturday: 'N/A'
		};
		this.id = this.props.navigation.state.params.id;
	}

	updateSchedule() {
		const { navigate } = this.props.navigation;
		fetch(`http://localhost:3000/api/mentors/schedule/${this.id}`, {
			method: 'post',
			body: JSON.stringify({
				sunday: this.state.sunday,
				monday: this.state.monday,
				tuesday: this.state.tuesday,
				wednesday: this.state.wednesday,
				thursday: this.state.thursday,
				friday: this.state.friday,
				saturday: this.state.saturday
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(res => {
				console.log(res);
			})
			.then(() => navigate('CreateMentor4', { id: this.id }))
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<Content>
				<Card>
					<CardItem>
						<Body>
							<Text>Type in your availability. Example: 3:00PM - 5:30PM</Text>
						</Body>
					</CardItem>
				</Card>
				<Form>
					<Item floatingLabel>
						<Label>Sunday</Label>
						<Input
							ref={el => {
								this.sunday = el;
							}}
							onChangeText={sunday => {
								this.setState({ sunday });
								console.log(this.state.sunday);
							}}
							value={this.state.sunday}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Monday</Label>
						<Input
							ref={el => {
								this.monday = el;
							}}
							onChangeText={monday => {
								this.setState({ monday });
								console.log(this.state.monday);
							}}
							value={this.state.monday}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Tuesday</Label>
						<Input
							ref={el => {
								this.tuesday = el;
							}}
							onChangeText={tuesday => {
								this.setState({ tuesday });
								console.log(this.state.tuesday);
							}}
							value={this.state.tuesday}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Wednesday</Label>
						<Input
							ref={el => {
								this.wednesday = el;
							}}
							onChangeText={wednesday => {
								this.setState({ wednesday });
								console.log(this.state.wednesday);
							}}
							value={this.state.wednesday}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Thursday</Label>
						<Input
							ref={el => {
								this.thursday = el;
							}}
							onChangeText={thursday => {
								this.setState({ thursday });
								console.log(this.state.thursday);
							}}
							value={this.state.thursday}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Friday</Label>
						<Input
							ref={el => {
								this.friday = el;
							}}
							onChangeText={friday => {
								this.setState({ friday });
								console.log(this.state.friday);
							}}
							value={this.state.friday}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Saturday</Label>
						<Input
							ref={el => {
								this.saturday = el;
							}}
							onChangeText={saturday => {
								this.setState({ saturday });
								console.log(this.state.saturday);
							}}
							value={this.state.saturday}
						/>
					</Item>
				</Form>
				<Button
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={() => this.updateSchedule()}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
