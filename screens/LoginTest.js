import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {
	Item,
	Icon,
	Text,
	Button,
	View,
	Form,
	Label,
	Input
} from 'native-base';

export default class LoginScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={65}>
				<View>
					<Text>Mentor.Me</Text>
				</View>
				<View>
					<Form>
						<Item stackedLabel>
							<Label>Email</Label>
							<Input keyboardType="email-address" />
						</Item>
						<Item stackedLabel last>
							<Label>Password</Label>
							<Input secureTextEntry />
						</Item>
					</Form>

					<Button
						block
						info
						padding
						style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					>
						<Text>Login</Text>
					</Button>
					<Button
						onPress={() => navigate('CreateAccountLand', { name: 'Account' })}
						title="New here? Create an Account"
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

// const styles = StyleSheet.create({
// 	input: {
// 		height: 40,
// 		marginBottom: 10,
// 		paddingLeft: 10,
// 		paddingRight: 10,
// 		backgroundColor: 'white'
// 	},
// 	container1: {
// 		flex: 1,
// 		padding: 15,
// 		alignContent: 'center',
// 		backgroundColor: '#00BCD4'
// 	},
// 	container2: {
// 		padding: 10,
// 		alignContent: 'center'
// 	},
// 	text: {
// 		textAlign: 'center',
// 		color: '#FFF',
// 		fontSize: 50,
// 		fontWeight: 'bold',
// 		fontFamily: 'Verdana',
// 		marginTop: 30
// 	},
// 	button: {
// 		backgroundColor: '#B2EBF2',
// 		paddingVertical: 10,
// 		marginBottom: 10
// 	},
// 	buttonText: {
// 		textAlign: 'center',
// 		padding: 2,
// 		fontWeight: 'bold',
// 		fontSize: 18
// 	},
// 	smallText: {
// 		justifyContent: 'center',
// 		color: 'white'
// 	}
// });
